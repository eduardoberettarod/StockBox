import { useState } from "react";
import { View, Text, Pressable, LayoutChangeEvent } from "react-native";
import { PieChart } from "react-native-gifted-charts";
import { Slice, chartColors, formatBRL } from "@/utils/stock";
import { colors } from "@/theme/colors";
import { styles } from "./style";

type Props = { slices: Slice[] };

const MAX_SIZE = 240;
const STROKE_RATIO = 0.15; // espessura do anel em relação ao tamanho do gráfico
const MIN_PERCENT = 1; // fatia mínima desenhada, para que valores muito pequenos continuem visíveis/clicáveis
const DIM_ALPHA = "8C"; // ~0.55 de opacidade (hex) para as fatias não selecionadas
const GLOW_RADIUS = 14; // alcance do brilho (shadowRadius) da maior fatia
const GLOW_OPACITY = 0.85;

export default function DistributionPie({ slices }: Props) {
  const [width, setWidth] = useState(0);
  const [selected, setSelected] = useState(0);

  if (slices.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Distribuição do valor</Text>
        <Text style={styles.empty}>Sem dados para exibir.</Text>
      </View>
    );
  }

  const size = Math.min(width || MAX_SIZE, MAX_SIZE);
  const stroke = size * STROKE_RATIO;
  const radius = size / 2;
  const innerRadius = radius - stroke;
  const innerWidth = size - stroke * 2 - 16;

  const activeIndex = Math.min(selected, slices.length - 1);
  const active = slices[activeIndex];
  const activeColor = chartColors[activeIndex];

  // Fatia com a maior quantidade (valor): recebe o brilho (shadowColor).
  const largestIndex = slices.reduce((best, s, i) => (s.value > slices[best].value ? i : best), 0);
  const largestColor = chartColors[largestIndex];

  // Sem espaço entre os segmentos (strokeWidth 0); fatias não selecionadas ficam esmaecidas.
  const data = slices.map((s, i) => ({
    value: Math.max(s.percent, MIN_PERCENT),
    color: i === activeIndex ? chartColors[i] : `${chartColors[i]}${DIM_ALPHA}`,
  }));

  // Camada atrás do gráfico só com a maior fatia visível; o shadowColor nativo
  // acompanha o formato dela e o anel principal (por cima) esconde o miolo.
  const glowData = slices.map((s, i) => ({
    value: Math.max(s.percent, MIN_PERCENT),
    color: i === largestIndex ? largestColor : "transparent",
  }));

  // Porcentagem real no centro: "<1" para fatias minúsculas e nunca "100" se houver outras fatias.
  const pct = active.percent;
  const pctLabel = pct < 1 ? "<1" : slices.length > 1 ? String(Math.min(99, Math.round(pct))) : "100";

  function handleLayout(e: LayoutChangeEvent) {
    setWidth(e.nativeEvent.layout.width);
  }

  return (
    <View style={styles.container}>

      <>
        <View style={styles.chartArea} onLayout={handleLayout}>
          {width > 0 && (
            <View style={{ width: size, height: size }}>
              {slices.length > 1 && (
                <View
                  pointerEvents="none"
                  style={[
                    styles.glow,
                    {
                      shadowColor: largestColor,
                      shadowOpacity: GLOW_OPACITY,
                      shadowRadius: GLOW_RADIUS,
                    },
                  ]}
                >
                  <PieChart
                    data={glowData}
                    donut
                    radius={radius}
                    innerRadius={innerRadius}
                    innerCircleColor="transparent"
                    strokeWidth={0}
                  />
                </View>
              )}

              <PieChart
                data={data}
                donut
                radius={radius}
                innerRadius={innerRadius}
                innerCircleColor={colors.onyx}
                strokeWidth={0}
                onPress={(_: unknown, index: number) => setSelected(index)}
                centerLabelComponent={() => (
                  <View style={styles.center}>
                    <View style={styles.percentRow}>
                      <Text style={styles.percentValue}>{pctLabel}</Text>
                      <Text style={styles.percentSign}>%</Text>
                    </View>
                    {/* <View
                      style={[
                        styles.pill,
                        { maxWidth: innerWidth, borderColor: activeColor },
                      ]}
                    >
                      <Text style={[styles.pillText, { color: activeColor }]} numberOfLines={1}>
                        {active.label}
                      </Text>
                    </View> */}
                    <Text style={[styles.centerValue, { maxWidth: innerWidth }]} numberOfLines={1}>
                      {formatBRL(active.value)}
                    </Text>
                  </View>
                )}
              />
            </View>
          )}
        </View>

        {/* flexWrap: se o item não couber na linha, desce para a próxima */}
        <View style={styles.legend}>
          {slices.map((s, i) => (
            <Pressable
              key={`${s.label}-${i}`}
              style={[styles.legendItem, i !== selected && styles.legendItemDim]}
              onPress={() => setSelected(i)}
            >
              <View style={[styles.dot, { backgroundColor: chartColors[i] }]} />
              <Text style={styles.legendLabel}>{s.label}</Text>
            </Pressable>
          ))}
        </View>
      </>
    </View>
  );
}
