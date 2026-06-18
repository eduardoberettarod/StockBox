import { View, ColorValue } from 'react-native'
import { styles } from './style'
import React from 'react'

export default function Separator({ color }: { color: ColorValue }) {
  return (
    <View style={[styles.separator, { backgroundColor: color }]} />
  )
}

