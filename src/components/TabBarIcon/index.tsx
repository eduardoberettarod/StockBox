import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React from 'react'
import { styles } from './style';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '@/theme/colors';

type IconName = 'view-dashboard-outline' | 'package-variant-closed'

type TabBarIconProps = TouchableOpacityProps & {
  name: IconName
  size?: number
  active?: boolean
}

// Ícone clicável de uma aba da TabBar, com estilo diferente quando a aba está ativa.
export default function TabBarIcon({ name, size = 24, active = false, style, ...rest }: TabBarIconProps) {
  return (
    <TouchableOpacity
      style={[styles.button, active ? styles.activeButton : styles.inactiveButton, style]}
      {...rest}
      activeOpacity={0.8}
    >
      <MaterialCommunityIcons
        name={name}
        size={size}
        color={active ? colors.black : colors.white}
      />
    </TouchableOpacity>
  )
}