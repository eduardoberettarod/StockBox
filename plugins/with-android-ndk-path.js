const fs = require("node:fs");
const path = require("node:path");
const {
  withAppBuildGradle,
  withProjectBuildGradle,
} = require("@expo/config-plugins");

const defaultWindowsNdkPath = "C:/ndk/27.1.12297006";

function withAndroidNdkPath(config) {
  if (process.platform !== "win32") {
    return config;
  }

  const configuredNdkPath =
    process.env.STOCKBOX_ANDROID_NDK_PATH || defaultWindowsNdkPath;
  if (configuredNdkPath.includes(" ")) {
    throw new Error(
      `STOCKBOX Android NDK path must not contain spaces: ${configuredNdkPath}`
    );
  }

  const compilerPath = path.join(
    configuredNdkPath,
    "toolchains",
    "llvm",
    "prebuilt",
    "windows-x86_64",
    "bin",
    "clang++.exe"
  );

  if (!fs.existsSync(compilerPath)) {
    if (process.env.STOCKBOX_ANDROID_NDK_PATH) {
      throw new Error(
        `STOCKBOX_ANDROID_NDK_PATH does not contain an NDK: ${configuredNdkPath}`
      );
    }

    return config;
  }

  const ndkPath = path.resolve(configuredNdkPath).replace(/\\/g, "/");
  const ndkPathAssignment = `rootProject.ext.ndkPath = ${JSON.stringify(ndkPath)}`;

  config = withProjectBuildGradle(config, (modConfig) => {
    let contents = modConfig.modResults.contents;
    const assignmentPattern = /^[ \t]*rootProject\.ext\.ndkPath\s*=.*$/m;

    if (assignmentPattern.test(contents)) {
      contents = contents.replace(assignmentPattern, ndkPathAssignment);
    } else {
      const insertionPoint = "allprojects {";
      if (!contents.includes(insertionPoint)) {
        throw new Error("Could not find allprojects block in android/build.gradle");
      }

      contents = contents.replace(
        insertionPoint,
        `${ndkPathAssignment}\n\n${insertionPoint}`
      );
    }

    modConfig.modResults.contents = contents;
    return modConfig;
  });

  config = withAppBuildGradle(config, (modConfig) => {
    let contents = modConfig.modResults.contents;
    const ndkPathLine = "ndkPath rootProject.ext.ndkPath";

    if (!contents.includes(ndkPathLine)) {
      const ndkVersionLine = "    ndkVersion rootProject.ext.ndkVersion";
      if (!contents.includes(ndkVersionLine)) {
        throw new Error("Could not find ndkVersion in android/app/build.gradle");
      }

      contents = contents.replace(
        ndkVersionLine,
        `${ndkVersionLine}\n    ${ndkPathLine}`
      );
    }

    modConfig.modResults.contents = contents;
    return modConfig;
  });

  return config;
}

module.exports = withAndroidNdkPath;
