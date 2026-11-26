import { View } from "react-native";
import { Suspense } from "react";

import { Stack } from "expo-router";
import { SQLiteProvider } from 'expo-sqlite'
import { useFonts } from "expo-font";

import { migrate } from "@/database/migrate";
import { colors } from "@/theme/colors";
import { fontAssets } from "@/theme/fonts";

//components
import Loading from "@/components/Loading";
import TabBar from "@/components/TabBar";

export default function Layout() {
  const [fontsLoaded, fontError] = useFonts(fontAssets);

  if (fontError) {
    throw fontError;
  }

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <SQLiteProvider
        databaseName='stockbox.db'
        onInit={migrate}
        useSuspense
      >
        <View style={{ flex: 1, backgroundColor: colors.black }}>
          <Stack screenOptions={{
            headerShown: false,
            statusBarHidden: true,
            contentStyle: { backgroundColor: colors.black }
          }} />
          <TabBar />
        </View>
      </SQLiteProvider>
    </Suspense>
  )
}