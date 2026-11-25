import { View, Alert } from "react-native";

import { useState, useCallback, useMemo } from "react";

import { useSafeAreaInsets } from "react-native-safe-area-context";

import { router, useFocusEffect } from "expo-router";

import { styles } from "./style";

import { colors } from "@/theme/colors";

// components
import HomeHeader from "@/components/HomeHeader";
import Search from "@/components/Search";
import Card, { CardProps } from "@/components/Card";
import List from "@/components/List";

import { useStockBoxDatabase } from "@/database/useStockBoxDatabase";

export default function Products() {
  const insets = useSafeAreaInsets();

  const stockBoxDatabase = useStockBoxDatabase();

  const [products, setProducts] = useState<CardProps[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  async function fetchProducts(): Promise<CardProps[]> {
    try {
      const response = await stockBoxDatabase.listBySavedValue();

      console.log(response);

      return response.map((item) => ({
        id: String(item.id),
        name: item.name,
        description: item.description,
        quantity: item.quantity,
        price: item.price,
        imageUrl: item.imageUrl,
      }));
    } catch (error) {
      Alert.alert("Erro", "Falha ao carregar os produtos.");
      console.log(error);

      return [];
    }
  }

  const fetchData = async () => {
    const stockBoxData = await fetchProducts();

    setProducts(stockBoxData);
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, products]);

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [])
  );

  return (
    <View style={{ flex: 1, paddingTop: insets.top + 30, paddingHorizontal: 12 }}>

      <List
        title="Inventário"
        button="Produto"
        onAdd={() => router.navigate("/add")}
        icon={{ iconName: "plus", iconColor: colors.white, iconSize: 16 }}
        data={filteredProducts}
        renderItem={({ item }) => (
          <Card data={item} onPress={() => router.navigate(`/in-progress/${item.id}`)} />
        )}
        ListHeaderComponent={
          <View style={styles.input}>
            <Search value={searchQuery} onChangeText={setSearchQuery} />
          </View>
        }
      />
    </View>
  );
}