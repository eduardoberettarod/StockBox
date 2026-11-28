import { StyleSheet } from 'react-native'
import { colors } from '@/theme/colors'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.orange[400],
    padding: 18,
    borderRadius: 44,
    position: 'absolute',
    bottom: 120,
    right: 24,
    shadowColor: colors.orange[400],
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 6,
  },
});