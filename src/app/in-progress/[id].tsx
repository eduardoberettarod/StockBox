import { View, Text, ScrollView, Alert } from "react-native";
import { router, useLocalSearchParams, useFocusEffect } from "expo-router";
import { Image } from "expo-image";
import { useState, useCallback } from "react";
import { styles } from './style'
import { colors } from "@/theme/colors";
import { useStockBoxDatabase } from "@/database/useStockBoxDatabase";
import { StockBoxResponse } from "@/database/useStockBoxDatabase";

//components
import Header from "@/components/Header";
import Info from "@/components/Info";
import Separator from "@/components/Separator";
import Button from "@/components/Button";

export default function InProgress() {

  const params = useLocalSearchParams<{ id: string }>()
  const stockBoxDatabase = useStockBoxDatabase()
  const [product, setProduct] = useState<StockBoxResponse | null>(null)

  async function loadProduct() {
    try {
      if (params.id) {
        const data = await stockBoxDatabase.getById(Number(params.id))
        setProduct(data)
      }
    } catch (error) {
      Alert.alert("Erro", "Falha ao carregar o produto.")
      console.log(error)
    }
  }

  useFocusEffect(
    useCallback(() => { loadProduct() }, [params.id])
  )

  const totalValue = product ? product.quantity * product.price : 0



  return (
    <View style={{ flex: 1 }}>
      <Header
        title="Detalhes do Item"
      />

      <ScrollView style={styles.container}>

        <View style={styles.containerImage}>
          <Image
            style={styles.image}
            source={{ uri: product?.imageUrl }}
            contentFit="cover"
          />
        </View>

        <View style={{ paddingTop: 24 }}>
          <Text style={styles.title}>{product?.name || "Carregando..."}</Text>

          <Separator color={colors.gray[900]} />

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, paddingTop: 18 }}>
            <Info
              title="Em estoque"
              value={product?.quantity || 0}
              subtitle="unidades"
              icon={{
                iconName: 'box',
                iconColor: colors.gray[700]
              }}
            />
            <Info
              title="Valor Unitário"
              value={product?.price || 0}
              subtitle="R$"
              price={true}
              icon={{
                iconName: 'credit-card',
                iconColor: colors.gray[700]
              }}
            />
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 10, paddingBottom: 18 }}>
            <Info
              title="Valor Total"
              value={totalValue}
              subtitle="R$"
              price={true}
              icon={{
                iconName: 'trending-up',
                iconColor: colors.green[500]
              }}
            />
          </View>
          <Separator color={colors.gray[900]} />

          <View style={{ paddingVertical: 24 }}>
            <Text style={styles.description}>Descrição</Text>
            <Text style={styles.text}>{product?.description || "Sem descrição"}</Text>
          </View>

        </View>

        <View style={{ alignItems: 'center', flexDirection: 'row', gap: 12, paddingBottom: 48 }}>
          <Button
            title="Editar"
            textColor={colors.black}
            color={colors.white}
            style={{
              flex: 1
            }}
            activeOpacity={0.8}
            onPress={() => router.navigate(`/add?id=${params.id}`)}
          />

          <Button
            icon={{
              nameIcon: 'trash',
              sizeIcon: 18,
              colorIcon: colors.white
            }}
            textColor={colors.white}
            color={colors.red[500]}
            style={{
              width: 60,
            }}
            activeOpacity={0.8}
          />
        </View>



      </ScrollView>

    </View>
  )
}
