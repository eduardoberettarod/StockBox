import { StyleSheet } from "react-native";
import { colors } from "@/theme/colors";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: colors.gray[700]
  },
  containerImage: {
    maxHeight: 400,
    marginTop: 24,
  },
  title: {
    fontSize: 26,
    color: colors.white,
    fontWeight: 700,
    marginBottom: 18
  },
  description: {
    fontSize: 14,
    color: colors.gray[400],
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 18
  },
  text: {
    fontSize: 16,
    color: colors.gray[400],
    textAlign: 'left',
    lineHeight: 24
  }
});