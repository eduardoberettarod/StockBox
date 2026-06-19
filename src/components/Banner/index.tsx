import { View, Text, Image } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { styles } from './style'
import { colors } from '@/theme/colors'

export default function Banner() {
  return (
    <View style={styles.container}>
      <Feather name='image' size={64} color={colors.gray[700]} />
      <Text style={styles.text}>Prévia da imagem</Text>
    </View>
  )
}