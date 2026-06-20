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
  placeholder?: string,
  textarea?: boolean
}

export default function Input({
  label,
  placeholder,
  textarea = false,
  ...rest
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <TextInput
        style={[
          styles.input,
          textarea && styles.textarea
        ]}
        multiline={textarea}
        textAlignVertical={textarea ? 'top' : 'center'}
        placeholderTextColor={colors.gray[500]}
        placeholder={placeholder}
        {...rest}
      />
    </View>
  )
}

