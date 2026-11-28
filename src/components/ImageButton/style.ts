import { StyleSheet } from "react-native";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";

export const styles = StyleSheet.create({
  // Mesmo espaçamento e rótulo do componente Input
  container: {
    width: 'auto',
    flex: 1,
    gap: 10,
    marginTop: 18
  },
  label: {
    color: colors.white,
    fontSize: 12,
    fontFamily: fonts.medium
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    borderRadius: 12,
    backgroundColor: colors.gray[900],
    borderWidth: 1,
    borderColor: colors.gray[800],
    padding: 15
  },
  buttonSelected: {
    borderColor: colors.orange[600]
  },
  // Mesmo par de variações de ícone do StatCard
  icon: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.onyx,
    borderColor: colors.gray[700]
  },
  iconSelected: {
    backgroundColor: colors.orange[600],
    borderColor: colors.orange[700]
  },
  content: {
    flex: 1,
    gap: 2
  },
  title: {
    color: colors.gray[200],
    fontSize: 16,
    fontFamily: fonts.medium
  },
  titleSelected: {
    color: colors.white
  },
  subtitle: {
    color: colors.gray[500],
    fontSize: 12,
    fontFamily: fonts.regular
  }
});
