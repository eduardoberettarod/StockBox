import { StyleSheet } from "react-native";
import { colors } from "@/theme/colors";

export const styles = StyleSheet.create({
  container: {
    width: 'auto',
    flex: 1,
    gap: 10,
    marginTop: 18
  },
  label: {
    color: colors.white,
    fontSize: 12
  },
  input: {
    color: colors.white,
    fontSize: 16,
    borderRadius: 6,
    backgroundColor: colors.gray[900],
    borderWidth: 1,
    borderColor: colors.gray[800],
    padding: 15
  }
});