import {
  Text,
  View,
  ViewStyle,
  FlatList,
  FlatListProps,
  StyleProp,
  TouchableOpacity
} from 'react-native'
import { styles } from './style'
import { colors } from '@/theme/colors'
import { router } from 'expo-router'

//components
import Separator from '@/components/Separator'
import { Feather } from '@expo/vector-icons'

type Props<ItemT> = FlatListProps<ItemT> & {
  title: string,
  button?: string,
  emptyMessage?: string,
  onAdd?: () => void,
  containerStyle?: StyleProp<ViewStyle>
  icon?: {
    iconName: keyof typeof Feather.glyphMap,
    iconSize: number,
    iconColor: string
  }
}

export default function List<T>({
  title,
  emptyMessage = "Nenhum item encontrado",
  containerStyle,
  data,
  renderItem,
  button,
  icon,
  onAdd,
  ...rest
}: Props<T>) {
  return (
    <View style={[styles.container, containerStyle]}>

      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>

        <TouchableOpacity style={styles.button} onPress={onAdd}>
          <Feather name={icon?.iconName} size={icon?.iconSize} color={icon?.iconColor} />
          <Text style={styles.textButton}>
            {button}
          </Text>
        </TouchableOpacity>

      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => (item as any).id || `${index}`}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <Separator color={colors.gray[500]} />}
        ListEmptyComponent={() =>
          <View style={{ flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <Feather name="codepen" color={colors.gray[800]} size={72} />
            <Text style={{ color: colors.gray[800], fontSize: 16 }}>Nenhum produto encontrado.</Text>
          </View>}
        {...rest}
      />
    </View>
  )
}