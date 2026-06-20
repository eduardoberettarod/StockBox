import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native'
import { styles } from './style'
import { Feather } from '@expo/vector-icons'

type ButtonProps = TouchableOpacityProps & {
  title: string,
  color: string,
  icon?: {
    nameIcon: keyof typeof Feather.glyphMap,
    sizeIcon: number,
    colorIcon: string
  }
}

export default function Button({ title, color, icon, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color }]}
      {...rest}
    >
      <Feather name={icon?.nameIcon} size={icon?.sizeIcon} color={icon?.colorIcon} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}