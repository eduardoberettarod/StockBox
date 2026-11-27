import { View, Alert } from "react-native";
import { useState, useCallback, useMemo } from "react";
import { useFocusEffect } from "expo-router";

import { StockBoxResponse, useStockBoxDatabase } from "@/database/useStockBoxDatabase";
import { buildSummary, formatBRL, formatNumber } from "@/utils/stock";

// components
import Scroll from "@/components/Scroll";
import HomeHeader from "@/components/HomeHeader";
import StatCard from "@/components/StatCard";
import DistributionPie from "@/components/DistributionPie";
import LargeCard from "@/components/LargeCard";
import { colors } from "@/theme/colors";


export default function Index() {
  const stockBoxDatabase = useStockBoxDatabase();
  const [products, setProducts] = useState<StockBoxResponse[]>([]);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          setProducts(await stockBoxDatabase.listBySavedValue());
        } catch (error) {
          Alert.alert("Erro", "Falha ao carregar os produtos.");
          console.log(error);
        }
      })();
    }, [])
  );

  const summary = useMemo(() => buildSummary(products), [products]);

  return (
    <Scroll>
      <HomeHeader />

      <View style={{ gap: 12, marginTop: 24 }}>
        <View style={{ flexDirection: "row" }}>
          <LargeCard
            title="Valor total do estoque"
            value={formatBRL(summary.totalValue)}
            description="Valor estimado dos produtos armazenados."
          />
        </View>

        <View style={{ flexDirection: "row", gap: 12 }}>
          <StatCard
            icon={{
              iconName: "layers",
              iconColor: colors.orange[600]
            }}
            title="Itens em estoque"
            measure="un"
            value={formatNumber(summary.totalItems)}
            backgroundColor={colors.onyx}
            borderColor={colors.orange[800]}
            useGradient
            borderColorCard={colors.orange[600]}
          />
          <StatCard
            icon={{
              iconName: "package",
              iconColor: colors.onyx
            }}
            title="Produtos cadastrados"
            measure="SKUs"
            value={String(summary.totalProducts)}
            backgroundColor={colors.orange[600]}
            borderColor={colors.orange[700]}
            borderColorCard={colors.gray[700]}
          />
        </View>

        <DistributionPie slices={summary.slices} />
      </View>
    </Scroll>
  );
}
