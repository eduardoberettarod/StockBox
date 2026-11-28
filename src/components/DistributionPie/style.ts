import { StyleSheet } from "react-native";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.onyx,
    borderWidth: 1,
    borderColor: colors.gray[700],
    borderRadius: 32,
    padding: 36,
    gap: 20,
  },
  title: { fontSize: 14, fontWeight: "600", color: colors.gray[100] },
  empty: { fontSize: 13, color: colors.gray[500] },

  chartArea: { alignItems: "center", justifyContent: "center", alignSelf: "stretch" },
  center: {
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  // camada de brilho atrás do gráfico (shadowColor da maior fatia)
  glow: {
    ...StyleSheet.absoluteFillObject,
    shadowOffset: { width: 0, height: 0 },
  },
  percentRow: { flexDirection: "row", alignItems: "flex-end" },
  percentValue: {
    fontSize: 44,
    lineHeight: 48,
    color: colors.gray[100],
    fontFamily: fonts.black,
  },
  percentSign: {
    fontSize: 16,
    lineHeight: 28,
    color: colors.gray[100],
    fontFamily: fonts.bold,
    marginLeft: 2,
  },
  pill: {
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: colors.gray[900],
  },
  pillText: {
    fontSize: 10,
    letterSpacing: 0.8,
    textTransform: "uppercase",
    fontFamily: fonts.semiBold,
  },
  centerValue: { fontSize: 12, color: colors.gray[400], fontFamily: fonts.medium },

  legend: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    columnGap: 16,
    rowGap: 10,
    marginTop: 24
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    maxWidth: "100%",
  },
  legendItemDim: { opacity: 0.7 },
  dot: { width: 10, height: 10, borderRadius: 5 },
  legendLabel: {
    flexShrink: 1,
    fontSize: 12,
    letterSpacing: 0.4,
    color: colors.gray[200],
    fontFamily: fonts.medium,
  },
});
