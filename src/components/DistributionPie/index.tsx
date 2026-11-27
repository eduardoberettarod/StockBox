import { useState } from "react";
import { View, Text, Pressable, LayoutChangeEvent } from "react-native";
import Svg, { Circle, Path } from "react-native-svg";
import { Slice, chartColors, formatBRL } from "@/utils/stock";
import { styles } from "./style";

type Props = { slices: Slice[] };

const MAX_SIZE = 240;
const STROKE = 26;
const GAP_DEG = 5; // espaço visível entre as pontas arredondadas dos segmentos
const MIN_ARC_DEG = 1; // trecho mínimo de arco desenhado em cada fatia
const START_DEG = -90; // começa no topo e segue no sentido horário

function polar(cx: number, cy: number, r: number, deg: number) {
  const rad = (deg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function arcPath(cx: number, cy: number, r: number, startDeg: number, endDeg: number) {
  const start = polar(cx, cy, r, startDeg);
  const end = polar(cx, cy, r, endDeg);
  const largeArc = endDeg - startDeg > 180 ? 1 : 0;
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${largeArc} 1 ${end.x} ${end.y}`;
}

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
  const radius = (size - STROKE) / 2;
  const center = size / 2;
  const innerWidth = size - STROKE * 2 - 16;

  const activeIndex = Math.min(selected, slices.length - 1);
  const active = slices[activeIndex];
  const activeColor = chartColors[activeIndex];

  // Cada ponta arredondada "invade" STROKE/2 do arco; compensamos para os segmentos não se tocarem.
  const capDeg = ((STROKE / 2) / radius) * (180 / Math.PI);
  const pad = capDeg + GAP_DEG / 2;

  // Cada fatia ganha um tamanho mínimo visível (pontas + espaço + um trecho de arco);
  // o restante do círculo é dividido proporcionalmente. Assim fatias pequenas nunca
  // ficam por cima das vizinhas, mesmo com <1% do valor.
  const minSpan = 2 * pad + MIN_ARC_DEG;
  const free = Math.max(360 - slices.length * minSpan, 0);

  let cursor = START_DEG;
  const arcs = slices.map((s, i) => {
    const span = minSpan + (s.percent / 100) * free;
    const from = cursor;
    cursor += span;
    const path = arcPath(center, center, radius, from + pad, cursor - pad);
    return { path, color: chartColors[i], index: i };
  });

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
              <Svg width={size} height={size}>
                {slices.length === 1 ? (
                  <Circle
                    cx={center}
                    cy={center}
                    r={radius}
                    stroke={chartColors[0]}
                    strokeWidth={STROKE}
                    fill="none"
                  />
                ) : (
                  arcs.map((a) => (
                    <Path
                      key={a.index}
                      d={a.path}
                      stroke={a.color}
                      strokeWidth={STROKE}
                      strokeLinecap="round"
                      fill="none"
                      opacity={a.index === selected ? 1 : 0.55}
                      onPress={() => setSelected(a.index)}
                    />
                  ))
                )}
              </Svg>

              <View style={styles.center} pointerEvents="none">
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
                <Text style={styles.centerValue} numberOfLines={1}>
                  {formatBRL(active.value)}
                </Text>
              </View>
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
