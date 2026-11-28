import { View, Text, Alert, StyleSheet, TouchableOpacity } from "react-native";
import { router, useLocalSearchParams, useFocusEffect } from "expo-router";
import { Image } from "expo-image";
import { Feather } from "@expo/vector-icons";
import { useState, useCallback } from "react";

import { styles } from "./style";
import { colors } from "@/theme/colors";
import { formatBRL, formatNumber } from "@/utils/stock";
import { useStockBoxDatabase, StockBoxResponse } from "@/database/useStockBoxDatabase";

// components
import Scroll from "@/components/Scroll";
import Header from "@/components/Header";
import Gradient from "@/components/Gradient";
import Button from "@/components/Button";

export default function InProgress() {
  const params = useLocalSearchParams<{ id: string }>();
  const stockBoxDatabase = useStockBoxDatabase();
  const [product, setProduct] = useState<StockBoxResponse | null>(null);

  async function loadProduct() {
    try {
      if (params.id) {
        const data = await stockBoxDatabase.getById(Number(params.id));
        setProduct(data);
      }
    } catch (error) {
      Alert.alert("Erro", "Falha ao carregar o produto.");
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      loadProduct();
    }, [params.id])
  );

  const quantity = product?.quantity || 0;
  const price = product?.price || 0;
  const totalValue = product ? product.quantity * product.price : 0;
  const hasImage = !!product?.imageUrl?.trim();
  const formattedUnitPrice = formatBRL(price).replace(/^R\$\s*/, "");

  return (
    <Scroll includeBottomInset={false}>
      <Header title="Detalhes do Item" />

      <View style={{ gap: 12, marginTop: 24 }}>
        {/* Imagem + nome */}
        <View style={styles.imageCard}>
          {hasImage ? (
            <Image
              style={styles.image}
              source={{ uri: product?.imageUrl }}
              contentFit="cover"
            />
          ) : (
            <View style={styles.imagePlaceholder}>
              <Feather name="image" size={48} color={colors.gray[700]} />
            </View>
          )}
        </View>

        <Text style={styles.title}>{product?.name || "Carregando..."}</Text>

        {/* Valor total: destaque da tela, com o mesmo brilho laranja do card de itens da home */}
        <View style={styles.totalCard}>
          <Gradient style={StyleSheet.absoluteFill} />

          <View style={styles.totalHeader}>
            <View style={styles.iconOrange}>
              <Feather name="trending-up" size={18} color={colors.orange[600]} />
            </View>
            <Text style={styles.cardTitle}>Valor total</Text>
          </View>

          <View style={styles.totalContent}>
            <Text style={styles.totalValue} numberOfLines={1} adjustsFontSizeToFit>
              {formatBRL(totalValue)}
            </Text>
            <Text style={styles.cardDescription}>
              {formatNumber(quantity)} un × {formatBRL(price)}
            </Text>
          </View>
        </View>

        {/* Estoque e valor unitário */}
        <View style={{ flexDirection: "row", gap: 12 }}>
          <View style={styles.statCard}>
            <View style={styles.iconOrange}>
              <Feather name="box" size={18} color={colors.orange[600]} />
            </View>
            <View style={styles.statContent}>
              <Text style={styles.statTitle}>Em estoque</Text>
              <View style={styles.statRow}>
                <Text
                  style={styles.statValue}
                  numberOfLines={1}
                  adjustsFontSizeToFit
                  minimumFontScale={0.6}
                >
                  {formatNumber(quantity)}
                </Text>
                <Text style={styles.statMeasure}>un</Text>
              </View>
            </View>
          </View>

          <View style={styles.statCard}>
            <View style={styles.iconSolid}>
              <Feather name="credit-card" size={18} color={colors.onyx} />
            </View>
            <View style={styles.statContent}>
              <Text style={styles.statTitle}>Valor unitário</Text>
              <View style={styles.statRow}>
                <Text style={styles.statMeasure}>R$</Text>
                <Text
                  style={styles.statValue}
                  numberOfLines={1}
                  adjustsFontSizeToFit
                  minimumFontScale={0.6}
                >
                  {formattedUnitPrice}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Descrição */}
        <View style={styles.descriptionCard}>
          <Text style={styles.cardTitle}>Descrição</Text>
          <Text style={styles.descriptionText}>
            {product?.description || "Sem descrição"}
          </Text>
        </View>

        {/* Ações */}
        <View style={styles.actions}>
          <Button
            title="Editar"
            textColor={colors.onyx}
            color={colors.orange[500]}
            style={{ flex: 1 }}
            activeOpacity={0.8}
            onPress={() => router.navigate(`/add?id=${params.id}`)}
          />

          <TouchableOpacity
            style={styles.deleteButton}
            activeOpacity={0.8}
            accessibilityLabel="Excluir item"
          >
            <Feather name="trash-2" size={20} color={colors.red[400]} />
          </TouchableOpacity>
        </View>
      </View>
    </Scroll>
  );
}
