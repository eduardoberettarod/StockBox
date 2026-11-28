import { StyleSheet } from "react-native";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";

export const styles = StyleSheet.create({
  container: {
    width: 'auto',
    flex: 1,
    backgroundColor: colors.onyx,
    padding: 26,
    borderWidth: 1,
    borderColor: colors.gray[700],
    borderRadius: 24,
    gap: 18
  },
  title: {
    fontSize: 14,
    color: colors.gray[300],
    marginBottom: 4,
    fontFamily: fonts.regular
  },
  value: {
    fontSize: 26,
    color: colors.gray[100],
    fontFamily: fonts.bold
  },
  subtitle: {
    fontSize: 12,
    color: colors.gray[300],
    marginBottom: 5,
    fontFamily: fonts.regular
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 8
  }
});