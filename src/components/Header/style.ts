import { StyleSheet } from "react-native";
import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";

export const styles = StyleSheet.create({
  container: {
    position: 'static',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.black,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  button: {
    overflow: 'hidden',
    borderRadius: 44,
    borderWidth: 1,
    borderColor: colors.gray[700]
  },
  blur: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16
  },
  left: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 18
  },
  text: {
    color: colors.white,
    fontSize: 20,
    fontFamily: fonts.bold
  }
});