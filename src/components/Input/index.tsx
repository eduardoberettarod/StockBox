import {
  TextInput,
  TextInputProps,
  Text,
  View
} from 'react-native'

import { styles } from './style'
import { colors } from '@/theme/colors'

type Props = TextInputProps & {
  label: string,
  placeholder: string
}

export default function Input({ label, placeholder, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor={colors.gray[500]}
        placeholder={placeholder}
        {...rest}
      />
    </View>
  )
}

