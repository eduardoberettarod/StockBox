import { View, Text, Alert } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./style";

//components
import Input from "@/components/Input";
import Header from "@/components/Header";
import Card from "@/components/Card";
import List from "@/components/List";

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

      <View>
        <List
        title="Metas"
        data={targets}
        renderItem={({ item }) =>
          <Card
            data={item}
            onPress={() => router.navigate(`/in-progress/${item.id}`)}
          />
        }
        emptyMessage="Nenhuma meta encontrada."
        containerStyle={{ paddingHorizontal: 24 }}
      />
      </View>
      
    </View>
  )
}