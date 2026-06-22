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
  icon?: {
    nameIcon: keyof typeof Feather.glyphMap,
    sizeIcon: number,
    colorIcon: string
  }
}

export default function Button({
  title,
  color,
  icon,
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
      {icon && (
        <Feather
          name={icon.nameIcon}
          size={icon.sizeIcon}
          color={icon.colorIcon}
        />
      )}

      {title && (
        <Text style={[styles.text, { color: textColor }]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  )
}