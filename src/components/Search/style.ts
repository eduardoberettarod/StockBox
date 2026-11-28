import { StyleSheet } from "react-native"
import { colors } from "@/theme/colors"
import { fonts } from "@/theme/fonts";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 6,
  },
  label: {
    color: colors.gray[500],
    fontSize: 13,
    paddingLeft: 4,
    letterSpacing: -0.1,
    fontFamily: fonts.medium
  },
  inputContainer: {
    height: 50,
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.gray[700],
  },
  blurView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  icon: {
    marginRight: 10,
    opacity: 0.9,
  },
  textInput: {
    color: colors.white,
    fontSize: 16,
    flex: 1,
    letterSpacing: -0.2,
    height: '100%',
    fontFamily: fonts.regular
  }
})