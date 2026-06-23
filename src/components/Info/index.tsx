import { View, Text } from 'react-native'
import { styles } from './style'
import { Feather } from '@expo/vector-icons'


type InfoProps = {
  title: string,
  subtitle: string,
  value: number,
  price?: boolean,
  icon: {
    iconName: keyof typeof Feather.glyphMap,
    iconColor: string
  }
}


export default function Info({ title, subtitle, value, icon, price = false }: InfoProps) {

  const valueFormat = new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);

  return (
    <View style={styles.container}>
      <Feather name={icon.iconName} size={24} color={icon.iconColor} />
      <View>
        <Text style={styles.title}>{title}</Text>
        {!price ? (
          <View style={styles.footer}>
            <Text style={styles.value}>{value}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>
        ) : (
          <View style={[styles.footer, { gap: 6 }]}>
            <Text style={styles.subtitle}>{subtitle}</Text>
            <Text style={styles.value}>{valueFormat}</Text>
          </View>
        )}
      </View>
    </View>
  )
}