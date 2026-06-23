import { StyleSheet } from "react-native";
import { colors } from "@/theme/colors";

export const styles = StyleSheet.create({
  container: {
    width: 'auto',
    flex: 1,
    backgroundColor: colors.gray[900],
    padding: 24,
    borderWidth: 1,
    borderColor: colors.gray[700],
    borderRadius: 14,
    gap: 18
  },
  title: {
    fontSize: 14,
    color: colors.gray[300],
    marginBottom: 4
  },
  value: {
    fontSize: 28,
    color: colors.gray[100],
    fontWeight: 700
  },
  subtitle: {
    fontSize: 14,
    color: colors.gray[300],
    marginBottom: 5
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 10
  }
});