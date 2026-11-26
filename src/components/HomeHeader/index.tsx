import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './style'
import { colors } from '@/theme/colors';

import { Feather } from '@expo/vector-icons';

export default function HomeHeader() {

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Feather name="box" size={24} color={colors.orange[600]} />
        <Text style={styles.title}>StockBox</Text>
      </View>

      <View>
        <Text style={styles.subtitle}>Gerenciamento de estoque de produtos.</Text>
      </View>

    </View>
  )
}