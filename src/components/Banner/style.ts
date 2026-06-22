import { StyleSheet } from "react-native";
import { colors } from "@/theme/colors";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 8,
    marginTop: 14,
    height: 350,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: colors.gray[900],
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.gray[800]
  },
  text: {
    color: colors.gray[700],
    fontSize: 14,
    fontWeight: 500
  },
  placeholder: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%',
    height: '100%'
  }
});