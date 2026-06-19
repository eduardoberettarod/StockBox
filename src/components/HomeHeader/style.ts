import { StyleSheet } from "react-native";
import { colors } from "@/theme/colors";

export const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    color: colors.white,
    fontWeight: 700
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  subtitle: {
    fontSize: 14,
    color: colors.gray[500],
  },
  container: {
    gap: 6
  },
});