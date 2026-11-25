import { colors } from '@/theme/colors';
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    bottom: 50,
    left: '50%',
    transform: [{translateX: '-50%'}],
    position: 'absolute',
    overflow: 'hidden',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.gray[700],
  },
  blur: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    flexDirection: 'row',
    gap: 6,
  },
});