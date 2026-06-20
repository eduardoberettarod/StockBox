import { View, Text } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

//components


export default function InProgress() {

  const params = useLocalSearchParams<{ id: string }>()

  return (
    <View style={{ flex: 1, padding: 24, gap: 32 }}>

    </View>
  )
}
