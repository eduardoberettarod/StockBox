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

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      
      <View style={styles.inputContainer}>
        <BlurView intensity={45} tint="dark" style={styles.blurView}>
          <Feather 
            name={iconName as any} 
            size={18} 
            color={colors.white} 
            style={styles.icon}
          />
          <TextInput
            style={styles.textInput}
            placeholderTextColor={colors.gray[600]}
            keyboardAppearance="dark"
            placeholder='Buscar produto por nome...'
            {...rest}
          />
        </BlurView>
      </View>
    </View>
  )
}