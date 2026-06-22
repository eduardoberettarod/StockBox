import { View, Text, Alert } from "react-native";
import { useState, useEffect, useCallback } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router, useFocusEffect } from "expo-router";
import { styles } from "./style";
import { colors } from "@/theme/colors";

//components
import HomeHeader from "@/components/HomeHeader";
import Search from "@/components/Search";
import Card, { CardProps } from "@/components/Card";
import List from "@/components/List";
import { Feather } from "@expo/vector-icons";
import { useStockBoxDatabase } from "@/database/useStockBoxDatabase";

export default function Index() {
  const insets = useSafeAreaInsets()
  const stockBoxDatabase = useStockBoxDatabase()
  const [products, setProducts] = useState<CardProps[]>([])

  async function fetchProducts(): Promise<CardProps[]> {
    try {
      const response = await stockBoxDatabase.listBySavedValue()
      console.log(response)
      return response.map((item) => ({
        id: String(item.id),
        name: item.name,
        description: item.description,
        quantity: item.quantity,
        price: item.price,
        imageUrl: item.imageUrl
      }))
    } catch (error) {
      Alert.alert("Erro", "Falha ao carregar os produtos.")
      console.log(error)
      return []
    }
  }

  async function fetchData() {
    const stockBoxPromise = await fetchProducts()
    const [stockBoxData] = await Promise.all([stockBoxPromise])

    setProducts(stockBoxData)
  }

  useFocusEffect(
    useCallback(() => { fetchData() }, [])
  )

  return (
    <View style={styles.container}>
      <View style={{ paddingTop: insets.top + 10 }}>
        <HomeHeader />
      </View>

      <View style={styles.input}>
        <Search />
      </View>

      <View style={{ flex: 1 }}>
        <List
          title="Inventário"
          button="Produto"
          onAdd={() => router.navigate('/add')}
          icon={{
            iconName: 'plus',
            iconColor: colors.white,
            iconSize: 16
          }}
          data={products}
          renderItem={({ item }) =>
            <Card
              data={item}
              onPress={() => router.navigate(`/in-progress/${item.id}`)}
            />
          }

          containerStyle={{ paddingHorizontal: 12 }}
        />
      </View>

    </View>
  )
}