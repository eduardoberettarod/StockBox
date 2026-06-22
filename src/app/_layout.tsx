import { View } from "react-native";
import { Suspense } from "react";

import { Stack } from "expo-router";
import { SQLiteProvider } from 'expo-sqlite'

import { migrate } from "@/database/migrate";
import { colors } from "@/theme/colors";

//components
import Loading from "@/components/Loading";

export default function Layout() {
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
            contentStyle: { backgroundColor: colors.black }
          }} />
        </View>
      </SQLiteProvider>
    </Suspense>
  )
}