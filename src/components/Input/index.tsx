import React, { useState, useRef } from 'react'
import {
  TextInput,
  TextInputProps,
  Text,
  View,
  Animated,
} from 'react-native'
import { BlurView } from 'expo-blur'
import { Feather } from '@expo/vector-icons'
import { colors } from '@/theme/colors'
import { styles } from './style'

type InputProps = TextInputProps & {
  label?: string
  iconName?: keyof typeof Feather.glyphMap | string // Flexibilidade para trocar o ícone se necessário
}

export default function Input({ label, iconName = 'search', ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false)
  
  // Controle de animação suave para o estado de Focus (150ms a 200ms)
  const focusAnim = useRef(new Animated.Value(0)).current

  const handleFocus = (e: any) => {
    setIsFocused(true)
    Animated.timing(focusAnim, {
      toValue: 1,
      duration: 180,
      useNativeDriver: false, // Propriedades de cor de borda não aceitam driver nativo puro no RN core
    }).start()
    if (rest.onFocus) rest.onFocus(e)
  }

  const handleBlur = (e: any) => {
    setIsFocused(false)
    Animated.timing(focusAnim, {
      toValue: 0,
      duration: 180,
      useNativeDriver: false,
    }).start()
    if (rest.onBlur) rest.onBlur(e)
  }

  // Interpolações refinadas para o efeito Glassmorphism ativo
  const borderColor = focusAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.translucent, 'rgba(250, 250, 247, 0.6)'], // Transição para o seu colors.white com alpha
  })

  const inputBackground = focusAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['rgba(238, 238, 238, 0.05)', 'rgba(238, 238, 238, 0.12)'],
  })

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      
      <Animated.View style={[styles.inputContainer, { borderColor, backgroundColor: inputBackground }]}>
        <BlurView intensity={isFocused ? 45 : 25} tint="dark" style={styles.blurView}>
          <Feather 
            name={iconName as any} 
            size={18} 
            color={isFocused ? colors.white : colors.gray[600]} 
            style={styles.icon}
          />
          <TextInput
            style={styles.textInput}
            placeholderTextColor={colors.gray[600]}
            onFocus={handleFocus}
            onBlur={handleBlur}
            selectionColor={colors.blue[300]} // Cursor no azul da sua paleta
            keyboardAppearance="dark"
            {...rest}
          />
        </BlurView>
      </Animated.View>
    </View>
  )
}