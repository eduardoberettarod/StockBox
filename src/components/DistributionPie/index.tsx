import { View, Text } from "react-native";
import { PieChart } from "react-native-gifted-charts";
import { colors } from "@/theme/colors";
import { Slice, chartColors, formatBRL } from "@/utils/stock";
import { styles } from "./style";

type Props = { slices: Slice[] };

export default function DistributionPie({ slices }: Props) {
  const data = slices.map((s, i) => ({
    value: s.value,
    color: chartColors[i],
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Distribuição do valor</Text>

      {slices.length === 0 ? (
        <Text style={styles.empty}>Sem dados para exibir.</Text>
      ) : (
        <View style={styles.body}>
          <PieChart
            data={data}
            donut
            radius={62}
            innerRadius={42}
            innerCircleColor={colors.gray[900]}
            strokeWidth={3}
            strokeColor={colors.gray[900]}
            isAnimated={false}
          />

          <View style={styles.legend}>
            {slices.map((s, i) => (
              <View key={s.label} style={styles.legendItem}>
                <View style={[styles.dot, { backgroundColor: chartColors[i] }]} />
                <View style={{ flex: 1 }}>
                  <Text style={styles.legendLabel} numberOfLines={1}>{s.label}</Text>
                  <Text style={styles.legendValue}>{formatBRL(s.value)}</Text>
                </View>
                <Text style={styles.percent}>{s.percent.toFixed(1).replace(".", ",")}%</Text>
              </View>
            ))}
          </View>
        </View>
      )}
    </View>
  );
}
