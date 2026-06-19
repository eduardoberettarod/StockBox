import { View, Text, TouchableOpacity } from 'react-native'
import { router } from 'expo-router'

import { BlurView } from 'expo-blur'
import { Feather } from '@expo/vector-icons'

import { styles } from './style'
import { colors } from '@/theme/colors'

export default function Header() {
  return (
    <View style={styles.container}>

      <View style={styles.left}>
        <TouchableOpacity style={styles.button}
          onPress={() => router.back()}
        >
          <BlurView style={styles.blur}>
            <Feather name='chevron-left' color={colors.white} size={28} />
          </BlurView>
        </TouchableOpacity>

        <Text style={styles.text}>
          Novo Produto
        </Text>
      </View>

    </View>
  )
}