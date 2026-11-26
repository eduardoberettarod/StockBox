import { StyleSheet } from 'react-native'
import { colors } from '@/theme/colors'
import { fonts } from '@/theme/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.onyx,
    borderWidth: 1,
    borderColor: colors.gray[700],
    borderRadius: 24,
    padding: 24,
    gap: 14,
  },
  content: {
    gap: 2,
  },
  title: {
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 0.3,
    textTransform: "uppercase",
    color: colors.gray[300],
    marginBottom: 12
  },
  value: {
    fontSize: 36,
    color: colors.gray[100],
    fontFamily: fonts.black
  },
  description: {
    fontSize: 12,
    color: colors.gray[500],
  },
  label: {
    color: colors.gray[400],
    fontFamily: fonts.regular,
    fontSize: 12
  },
  date: {
    color: colors.gray[100],
    fontFamily: fonts.semiBold,
    fontSize: 12
  }
});