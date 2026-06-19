import { StyleSheet } from "react-native";
import { colors } from "@/theme/colors";

export const styles = StyleSheet.create({
  container: {
    position: 'static',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.black,
    paddingTop: 72,
    paddingBottom: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  button: {
    overflow: 'hidden',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.white
  },
  blur: {
    padding: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  left: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 18
  },
  text: {
    color: colors.white,
    fontWeight: 700,
    fontSize: 20
  }
});