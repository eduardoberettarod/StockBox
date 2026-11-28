import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { styles } from './style'
import { colors } from '@/theme/colors'

type Props = TouchableOpacityProps & {
  label: string,
  selected?: boolean
}

// Botão para escolher a imagem do produto. Mantém o mesmo layout dos inputs do formulário
// (rótulo em cima, campo com fundo gray[900]) e muda de aparência quando uma imagem já foi escolhida.
export default function ImageButton({ label, selected = false, ...rest }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <TouchableOpacity
        style={[styles.button, selected && styles.buttonSelected]}
        activeOpacity={0.8}
        accessibilityRole="button"
        {...rest}
      >
        <View style={[styles.icon, selected && styles.iconSelected]}>
          <Feather
            name={selected ? 'check' : 'camera'}
            size={16}
            color={selected ? colors.onyx : colors.gray[400]}
          />
        </View>

        <View style={styles.content}>
          <Text style={[styles.title, selected && styles.titleSelected]}>
            {selected ? 'Imagem selecionada' : 'Adicionar imagem'}
          </Text>
          <Text style={styles.subtitle} numberOfLines={1}>
            {selected ? 'Toque para trocar a imagem' : 'Tire uma foto ou escolha da galeria'}
          </Text>
        </View>

        <Feather
          name={selected ? 'refresh-cw' : 'chevron-right'}
          size={18}
          color={selected ? colors.orange[500] : colors.gray[500]}
        />
      </TouchableOpacity>
    </View>
  )
}
