import { View, Text } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { Image } from 'expo-image'

import { styles } from './style'
import { colors } from '@/theme/colors'

type BannerProps = {
  background: string
}

export default function Banner({ background }: BannerProps) {
  const hasImage = background.trim().length > 0

  return (
    <View style={styles.container}>
      {hasImage ? (
        <Image
          source={{ uri: background }}
          contentFit="cover"
          style={styles.image}
        />
      ) : (
        <View style={styles.placeholder}>
          <Feather name="image" size={64} color={colors.gray[700]} />
          <Text style={styles.text}>Prévia da imagem</Text>
        </View>
      )}
    </View>
  )
}