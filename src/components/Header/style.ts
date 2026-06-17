import { StyleSheet } from "react-native";
import { colors } from "@/theme/colors";

export const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    color: colors.white,
    fontWeight: 700
  },
  subtitle: {
    fontSize: 24,
    color: colors.gray[300],
    fontWeight: 700
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  button: {
    backgroundColor: colors.translucent,
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
});