import { View, Text, Image, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { colors } from '@/theme/colors'
import { styles } from './style'

type CardProps = TouchableOpacityProps & {
  id: string,
  name: string,
  quantity: number
  price: number
  imageUrl: string
}

type Props = {
  data: CardProps
}


export default function Card({ data }: Props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} key={data.id}>
      <Image
        source={{ uri: `${data.imageUrl}` }}
        style={styles.image}
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