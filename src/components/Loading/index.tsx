import { View, Text, ActivityIndicator } from 'react-native'
import { styles } from './style'
import { colors } from '@/theme/colors'

export default function Loading() {
  return (
    <ActivityIndicator 
    color={colors.black}
    style={styles.container}
    />
  )
}