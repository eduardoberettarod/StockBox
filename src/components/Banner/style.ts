import { StyleSheet } from "react-native";
import { colors } from "@/theme/colors";

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 8,
    backgroundColor: colors.gray[900],
    height: 350,
    justifyContent: 'center',
    marginTop: 14,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.gray[800]
  },
  text: {
    color: colors.gray[700],
    fontSize: 14,
    fontWeight: 500
  }
});