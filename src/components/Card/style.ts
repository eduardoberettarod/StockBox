import { colors } from "@/theme/colors";
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
    fontSize: 14,
    fontWeight: '600',
    color: colors.white,
  },
  quantity: {
    fontSize: 13,
    fontWeight: '400',
    color: colors.gray[500],
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  price: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.gray[500],
  },
});