import { colors } from "@/theme/colors";
import { fonts } from "@/theme/fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 12,
  },
  image: {
    width: 55,
    height: 55,
    objectFit: 'cover',
    borderRadius: 8,
  },
  infoContainer: {
    flex: 1,
    gap: 2,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 15,
    color: colors.white,
    fontFamily: fonts.bold
  },
  quantity: {
    fontSize: 13,
    color: colors.gray[500],
    fontFamily: fonts.regular
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  price: {
    fontSize: 14,
    color: colors.gray[500],
    fontFamily: fonts.bold
  },
});