import { View, Text } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import { styles } from './style'
import Separator from '../Separator';
import { colors } from '@/theme/colors';
type Props = {
  title: string;
  value: string;
  description?: string;
  date?: string
};

export default function LargeCard({ title, value, description, date }: Props) {
  return (
    <View style={styles.container}>

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.value} numberOfLines={1} adjustsFontSizeToFit>
          {value}
        </Text>
        {description ? <Text style={styles.description}>{description}</Text> : null}
      </View>
      <Separator color={colors.gray[700]} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Entypo name="dot-single" size={24} color={colors.orange[600]} />
          <Text style={styles.label}>Inventário Atualizado</Text>
        </View>

        <Text style={styles.date}>Hoje, 09:41</Text>
      </View>
    </View>
  )
}