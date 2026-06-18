import {
  Text,
  View,
  ViewStyle,
  FlatList,
  FlatListProps,
  StyleProp
} from 'react-native'
import { styles } from './style'
import { colors } from '@/theme/colors'

//components
import Separator from '@/components/Separator'

type Props<ItemT> = FlatListProps<ItemT> & {
  title: string,
  emptyMessage?: string,
  containerStyle?: StyleProp<ViewStyle>
}

export default function List<T>({
  title,
  emptyMessage = "Nenhum item encontrado",
  containerStyle,
  data,
  renderItem,
  ...rest
}: Props<T>) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <Separator color={colors.gray[300]} />}
        ListEmptyComponent={() => <Text style={styles.empty}>{emptyMessage}</Text>}
        {...rest}
      />
    </View>
  )
}