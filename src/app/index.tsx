import { View, Text, Alert } from "react-native";
import { useState, useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";
import { styles } from "./style";
import { colors } from "@/theme/colors";

//components
import HomeHeader from "@/components/HomeHeader";
import Search from "@/components/Search";
import Card, { CardProps } from "@/components/Card";
import List from "@/components/List";
import { Feather } from "@expo/vector-icons";

export default function Index() {
  const insets = useSafeAreaInsets()

  const items = [
    {
      id: "item_001",
      name: "Teclado Mecânico HyperX Alloy",
      quantity: 14,
      price: 349.90,
      imageUrl: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400",
    },
    {
      id: "item_002",
      name: "Mouse Logitech MX Master 3",
      quantity: 27,
      price: 499.00,
      imageUrl: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
    },
    {
      id: "item_003",
      name: "Monitor LG UltraWide 29\"",
      quantity: 5,
      price: 1899.99,
      imageUrl: "https://images.unsplash.com/photo-1593640408182-31c228f8f3cf?w=400",
    },
    {
      id: "item_004",
      name: "Headset Sony WH-1000XM5",
      quantity: 9,
      price: 1299.00,
      imageUrl: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400",
    },
    {
      id: "item_005",
      name: "Webcam Logitech C922 Pro",
      quantity: 33,
      price: 599.90,
      imageUrl: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400",
    },
    {
      id: "item_006",
      name: "SSD Samsung 870 EVO 1TB",
      quantity: 41,
      price: 449.00,
      imageUrl: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400",
    },
    {
      id: "item_007",
      name: "Hub USB-C Anker 7-em-1",
      quantity: 18,
      price: 219.90,
      imageUrl: "https://images.unsplash.com/photo-1591405351990-4726e331f141?w=400",
    },
    {
      id: "item_008",
      name: "Cadeira Gamer Secretlab Titan",
      quantity: 3,
      price: 3499.00,
      imageUrl: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400",
    },
  ];

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
          data={items}
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