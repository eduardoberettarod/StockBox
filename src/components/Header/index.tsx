import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './style'
import { FontAwesome6 } from '@expo/vector-icons';

export default function Header() {

  return (
    <View style={styles.container}>

      <View>
        <Text style={styles.title}>Stock</Text>
        <Text style={styles.subtitle}>Box</Text>
      </View>

      <View>
        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <FontAwesome6 name="bell" size={24} color="white" />
        </TouchableOpacity>
      </View>

    </View>
  )
}