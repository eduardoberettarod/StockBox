import { View, Text } from 'react-native'
import CurrencyInputRN from 'react-native-currency-input'

import { styles } from './style'
import { colors } from '@/theme/colors'

type Props = {
  label: string
  value: number | null
  onChangeValue: (value: number | null) => void
  placeholder?: string
}

export default function CurrencyInput({
  label,
  value,
  onChangeValue,
  placeholder,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {label}
      </Text>

      <CurrencyInputRN
        value={value}
        onChangeValue={onChangeValue}
        prefix="R$ "
        delimiter="."
        separator=","
        precision={2}
        placeholder={placeholder}
        placeholderTextColor={colors.gray[500]}
        style={styles.input}
      />
    </View>
  )
}