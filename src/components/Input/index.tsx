import {
  TextInput,
  TextInputProps,
  Text,
  View
} from 'react-native'

import { styles } from './style'
import { colors } from '@/theme/colors'

import { BlurView } from 'expo-blur'
import { Feather } from '@expo/vector-icons'

type Props = TextInputProps & {
  label?: string
}

export default function Input({ label, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        <BlurView intensity={40} style={styles.blurView}>
          <Feather name='search' size={24} color={colors.white} />
          <TextInput
            style={styles.textInput}
            placeholderTextColor={colors.gray[500]}
            {...rest}
          />
        </BlurView>
      </View>
    </View>
  )
}
