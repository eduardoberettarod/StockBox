import {
  StyleProp,
  ViewStyle,
  Text,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native'
import { styles } from './style'
import { Feather } from '@expo/vector-icons'

type ButtonProps = TouchableOpacityProps & {
  title?: string,
  color: string,
  textColor: string,
  style?: StyleProp<ViewStyle>,
}

export default function Button({
  title,
  color,
  textColor,
  style,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: color },
        style
      ]}
      {...rest}
    >
      <Text style={[styles.text, { color: textColor }]}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}