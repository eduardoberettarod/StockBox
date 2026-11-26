import { StyleSheet } from "react-native";
import { colors } from "@/theme/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[900],
    borderWidth: 1,
    borderColor: colors.gray[700],
    borderRadius: 14,
    padding: 16,
    gap: 16,
  },
  title: { fontSize: 14, fontWeight: "600", color: colors.gray[100] },
  empty: { fontSize: 13, color: colors.gray[500] },
  body: { flexDirection: "row", alignItems: "center", gap: 16 },
  legend: { flex: 1, gap: 12 },
  legendItem: { flexDirection: "row", alignItems: "center", gap: 8 },
  dot: { width: 8, height: 8, borderRadius: 4 },
  legendLabel: { fontSize: 13, fontWeight: "500", color: colors.gray[100] },
  legendValue: { fontSize: 11, color: colors.gray[500] },
  percent: { fontSize: 13, fontWeight: "700", color: colors.gray[100] },
});
