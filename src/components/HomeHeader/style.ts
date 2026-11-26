import { StyleSheet } from "react-native";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";

export const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    color: colors.white,
    fontFamily: fonts.bold,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  subtitle: {
    fontSize: 14,
    color: colors.gray[400],
    fontFamily: fonts.regular
  },
  container: {
    gap: 6
  },
});