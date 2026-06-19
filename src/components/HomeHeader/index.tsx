import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './style'
import { colors } from '@/theme/colors';

import { AntDesign } from '@expo/vector-icons';

export default function HomeHeader() {

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <AntDesign name="codepen" size={24} color={colors.white} />
        <Text style={styles.title}>StockBox</Text>
      </View>

      <View>
        <Text style={styles.subtitle}>Gerenciamento de estoque de produtos.</Text>
      </View>

    </View>
  )
}