import { View, Text, ScrollView } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { Image } from "expo-image";
import { styles } from './style'
import { colors } from "@/theme/colors";

//components
import Header from "@/components/Header";
import Info from "@/components/Info";
import Separator from "@/components/Separator";
import Button from "@/components/Button";

export default function InProgress() {

  const params = useLocalSearchParams<{ id: string }>()

  return (
    <View style={{ flex: 1 }}>
      <Header
        title="Detalhes do Item"
      />

      <ScrollView style={styles.container}>

        <View style={styles.containerImage}>
          <Image
            style={styles.image}
            source={{ uri: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400" }}
            contentFit="cover"
          />
        </View>

        <View style={{ paddingTop: 24 }}>
          <Text style={styles.title}>Nome do Produto</Text>

          <Separator color={colors.gray[900]} />

          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, paddingTop: 18 }}>
            <Info
              title="Em estoque"
              value={12}
              subtitle="unidades"
              icon={{
                iconName: 'box',
                iconColor: colors.gray[700]
              }}
            />
            <Info
              title="Valor Unitário"
              value={450}
              subtitle="R$"
              price={true}
              icon={{
                iconName: 'credit-card',
                iconColor: colors.gray[700]
              }}
            />
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 10, paddingBottom: 18 }}>
            <Info
              title="Valor Total"
              value={450}
              subtitle="R$"
              price={true}
              icon={{
                iconName: 'trending-up',
                iconColor: colors.green[500]
              }}
            />
          </View>
          <Separator color={colors.gray[900]} />

          <View style={{ paddingVertical: 24 }}>
            <Text style={styles.description}>Descrição</Text>
            <Text style={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi neque odio impedit molestiae iusto ab eveniet voluptates accusantium voluptatum? Impedit odio officiis maiores magni voluptatibus fugit, accusantium debitis tempora eum.</Text>
          </View>

        </View>

        <View style={{ alignItems: 'center', flexDirection: 'row', gap: 12, paddingBottom: 48 }}>
          <Button
            title="Editar"
            textColor={colors.black}
            color={colors.white}
            style={{
              flex: 1
            }}
            activeOpacity={0.8}
            />

          <Button
            icon={{
              nameIcon: 'trash',
              sizeIcon: 18,
              colorIcon: colors.white
            }}
            textColor={colors.white}
            color={colors.red[500]}
            style={{
              width: 60,
            }}
            activeOpacity={0.8}
          />
        </View>



      </ScrollView>

    </View>
  )
}
