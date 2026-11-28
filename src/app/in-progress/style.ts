import { StyleSheet } from "react-native";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";

// Mesmos tokens dos cards da home (StatCard / LargeCard / DistributionPie):
// fundo onyx, borda gray[700], raio 24 e laranja como cor de destaque.
export const styles = StyleSheet.create({
  // Imagem
  imageCard: {
    width: "100%",
    aspectRatio: 1,
    overflow: "hidden",
    backgroundColor: colors.onyx,
    borderWidth: 1,
    borderColor: colors.gray[700],
    borderRadius: 24,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imagePlaceholder: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    lineHeight: 34,
    color: colors.white,
    fontFamily: fonts.bold,
    marginTop: 8,
    marginBottom: 4,
  },

  // Textos de card (iguais ao título do LargeCard)
  cardTitle: {
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 0.3,
    textTransform: "uppercase",
    color: colors.gray[300],
  },
  cardDescription: {
    fontSize: 12,
    color: colors.gray[500],
    fontFamily: fonts.regular,
  },

  // Valor total
  totalCard: {
    overflow: "hidden",
    backgroundColor: colors.onyx,
    borderWidth: 1,
    borderColor: colors.orange[600],
    borderRadius: 24,
    padding: 24,
    gap: 18,
  },
  totalHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  totalContent: {
    gap: 4,
  },
  totalValue: {
    fontSize: 40,
    color: colors.gray[100],
    fontFamily: fonts.black,
  },

  // Ícones (mesmo par de variações do StatCard)
  iconOrange: {
    borderWidth: 1,
    padding: 9,
    borderRadius: 12,
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.onyx,
    borderColor: colors.orange[800],
  },
  iconSolid: {
    borderWidth: 1,
    padding: 9,
    borderRadius: 12,
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.orange[600],
    borderColor: colors.orange[700],
  },

  // Em estoque / Valor unitário
  statCard: {
    flex: 1,
    minWidth: 0,
    backgroundColor: colors.onyx,
    borderWidth: 1,
    borderColor: colors.gray[700],
    borderRadius: 24,
    padding: 18,
    gap: 14,
  },
  statContent: {
    gap: 4,
  },
  statTitle: {
    fontSize: 11,
    lineHeight: 14,
    fontWeight: "600",
    letterSpacing: 0.6,
    textTransform: "uppercase",
    color: colors.gray[300],
  },
  statRow: {
    flexDirection: "row",
    alignItems: "baseline",
    gap: 6,
  },
  statValue: {
    flexShrink: 1,
    fontSize: 28,
    color: colors.gray[100],
    fontFamily: fonts.black,
  },
  statMeasure: {
    color: colors.gray[600],
    fontFamily: fonts.regular,
  },

  // Descrição
  descriptionCard: {
    backgroundColor: colors.onyx,
    borderWidth: 1,
    borderColor: colors.gray[700],
    borderRadius: 24,
    padding: 24,
    gap: 14,
  },
  descriptionText: {
    fontSize: 15,
    lineHeight: 23,
    color: colors.gray[400],
    fontFamily: fonts.regular,
  },

  // Ações
  actions: {
    flexDirection: "row",
    alignItems: "stretch",
    gap: 12,
    marginTop: 12,
  },
  deleteButton: {
    width: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.onyx,
    borderWidth: 1,
    borderColor: colors.red[700],
    borderRadius: 999,
  },
});
