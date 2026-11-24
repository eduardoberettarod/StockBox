import { View, Text, TouchableOpacity } from 'react-native'
import { router } from 'expo-router'

import { BlurView } from 'expo-blur'
import { EvilIcons } from '@expo/vector-icons'

import { styles } from './style'
import { colors } from '@/theme/colors'

type HeaderProps = {
  title: string
}

export default function Header({ title, ...rest }: HeaderProps) {
  return (
    <View style={styles.container}>

      <View style={styles.left}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          {...rest}
          onPress={() => router.back()}
        >
          <BlurView
            style={styles.blur}
            tint={'dark'}
            pointerEvents="none"
            intensity={80}
          >
            <EvilIcons name="chevron-left" size={24} color={colors.gray[100]} />
          </BlurView>
        </TouchableOpacity>

        <Text style={styles.text}>
          {title}
        </Text>
      </View>

    </View>
  )
}