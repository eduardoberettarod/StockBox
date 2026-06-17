import { StyleSheet } from "react-native"
import { colors } from "@/theme/colors"

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 6,
  },
  label: {
    color: colors.gray[500],
    fontSize: 13,
    fontWeight: '600',
    paddingLeft: 4,
    letterSpacing: -0.1,
  },
  inputContainer: {
    height: 50, // Altura padrão do iOS de extrema ergonomia para toque
    borderRadius: 50, // Cantos arredondados premium (Squircle standard)
    overflow: 'hidden',
    borderWidth: 1,
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
    fontSize: 16, // Evita o zoom automático indesejado do iOS ao focar
    fontWeight: '400',
    flex: 1,
    letterSpacing: -0.2,
    height: '100%',
  }
})