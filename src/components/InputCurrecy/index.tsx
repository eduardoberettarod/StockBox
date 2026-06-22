import { View, Text } from 'react-native'
import CurrencyInputRN from 'react-native-currency-input'

import { styles } from './style'
import { colors } from '@/theme/colors'

type Props = {
  label: string
  value: number | null
  onChangeValue: (value: number | null) => void
  placeholder?: string
  price?: boolean
  quantity?: boolean
}

export default function CurrencyInput({
  label,
  value,
  onChangeValue,
  placeholder,
  price = false,
  quantity = false
}: Props) {

  const currencyProps = price
    ? {
        prefix: "R$ ",
        delimiter: ".",
        separator: ",",
        precision: 2,
      }
    : {}

  const quantityProps = quantity
    ? {
        delimiter: ".",
        separator: "",
        precision: 0,
      }
    : {}

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <CurrencyInputRN
        value={value}
        onChangeValue={onChangeValue}
        {...currencyProps}
        {...quantityProps}
        placeholder={placeholder}
        placeholderTextColor={colors.gray[500]}
        style={styles.input}
      />
    </View>
  )
}