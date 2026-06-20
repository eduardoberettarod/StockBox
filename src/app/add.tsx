import { View, Text, ScrollView } from 'react-native'
import { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from './style'
import { colors } from '@/theme/colors'

//components
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Input from '@/components/Input'
import CurrencyInput from '@/components/InputCurrecy'
import Button from '@/components/Button'

export default function Add() {

  const [valor, setValor] = useState<number | null>(0)
  const insets = useSafeAreaInsets()

  return (
    <View style={{ flex: 1 }}>

      <Header
        title='Novo Produto'
      />

      <ScrollView style={{ paddingHorizontal: 14, flex: 1, paddingTop: 12 }}>
        <Banner />

        <Input
          label='URL da imagem'
          placeholder='https://exemplo.com/imagem.png'
        />

        <Input
          label='Nome do Produto'
          placeholder='Título do produto'
        />

        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Input
            label='Estoque'
            defaultValue='0'
          />
          <CurrencyInput
            label="Valor Unitário"
            value={valor}
            onChangeValue={setValor}
          />
        </View>

        <Input
          label='Descrição (Opcional)'
          placeholder='Detalhes sobre o produto...'
          textarea
        />

        <View style={{ paddingBottom: 76 }}>
          <Button
            title='SALVAR'
            color={colors.white}
            icon={{
              nameIcon: 'save',
              colorIcon: colors.black,
              sizeIcon: 16
            }}
            activeOpacity={0.8}
          />
        </View>

      </ScrollView>

    </View>
  )
}