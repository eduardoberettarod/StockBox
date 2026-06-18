import { View, Text, Alert } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./style";

//components
import Input from "@/components/Input";
import Header from "@/components/Header";

export default function Index() {

  const insets = useSafeAreaInsets()

  return (
    <View style={styles.container}>
      <View style={{ paddingTop: insets.top + 10 }}>
        <Header />
      </View>
      
      <View style={styles.input}>
        <Input />
      </View>
      
    </View>
  )
}