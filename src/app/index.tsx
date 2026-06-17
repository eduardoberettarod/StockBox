import { View, Text, Alert } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "@/components/Input/style";

//components
import Input from "@/components/Input";
import Header from "@/components/Header";

export default function Index() {

  const insets = useSafeAreaInsets()

  return (
    <View style={{ flex: 1, paddingHorizontal: 16 }}>
      <View style={{ paddingTop: insets.top + 10}}>
        <Header />
      </View>
      <Input />
    </View>
  )
}