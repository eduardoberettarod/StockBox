import { StyleSheet } from "react-native";
import { colors } from "@/theme/colors";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 10,
  },
  label: {
    color: colors.gray[500],
    fontSize: 12
  },
  input: {
    height: 54,
    borderRadius: 31,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.translucent
  },
  blurView: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,

  },
  textInput: {
    color: colors.gray[500],
    fontSize: 14,
    flex: 1
  }
});