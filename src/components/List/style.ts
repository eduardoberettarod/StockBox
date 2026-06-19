import { StyleSheet } from "react-native";
import { colors } from "@/theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listContent: {
    paddingTop: 16,
    paddingBottom: 72
  },
  title: {
    fontSize: 18,
    color: colors.white,
  },
  empty: {
    fontSize: 14,
    color: colors.gray[600],
    flex: 1,
    textAlign: 'center',
    paddingTop: 24
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 18
  },
  textButton: {
    color: colors.white,
    fontSize: 14
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  }
})