import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { Image } from 'expo-image'
import { Feather } from '@expo/vector-icons'
import { colors } from '@/theme/colors'
import { styles } from './style'

export type CardProps = {
  id: string,
  name: string,
  quantity: number,
  price: number,
  imageUrl: string,
  description: string
}

type Props = TouchableOpacityProps & {
  data: CardProps
}


export default function Card({ data, ...rest }: Props) {

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      {...rest}
    >
      <Image
        source={{ uri: `${data.imageUrl}` }}
        style={styles.image}
        contentFit="cover"
      />

      <View style={styles.infoContainer}>
        <Text style={styles.productName} numberOfLines={1}>{data.name}</Text>
        <Text style={styles.quantity}>{data.quantity} unidades</Text>
      </View>

      <View style={styles.rightContent}>
        <Text style={styles.price}>R$ {data.price}</Text>
        <Feather name='chevron-right' size={18} color={colors.gray[400]} />
      </View>

    </TouchableOpacity>
  )
}