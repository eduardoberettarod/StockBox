import { StyleSheet } from "react-native";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.onyx,
    borderWidth: 1,
    borderRadius: 24,
    padding: 16,
    gap: 14,
  },
  content: {
    gap: 4,
    alignSelf: 'flex-start'
  },
  title: {
    height: 28,
    fontSize: 11,
    lineHeight: 14,
    fontWeight: "600",
    letterSpacing: 0.6,
    textTransform: "uppercase",
    color: colors.gray[300],
  },
  value: {
    fontSize: 36,
    color: colors.gray[100],
    fontFamily: fonts.black
  },
  description: {
    fontSize: 12,
    color: colors.gray[500],
  },
  icon: {
    borderWidth: 1,
    padding: 9,
    borderRadius: 12,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
  },
  measure: {
    color: colors.gray[600],
  }
});
