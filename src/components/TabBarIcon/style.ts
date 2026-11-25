import { colors } from '@/theme/colors';
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  button: {
    padding: 16,
    borderRadius: 33,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  activeButton: {
    backgroundColor: colors.gray[100],
    shadowColor: colors.gray[100],
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 6,
  },
  inactiveButton: {
    backgroundColor: 'transparent',
  },
});