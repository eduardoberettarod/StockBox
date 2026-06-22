import { View, Text, ScrollView, Alert } from 'react-native'
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
import { router, useLocalSearchParams } from 'expo-router'
import { useStockBoxDatabase } from '@/database/useStockBoxDatabase'

export default function Add() {
  const [productName, setProductName] = useState('')
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState<number | null>(0)
  const [image, setImage] = useState('')
  const [value, setValue] = useState<number | null>(0)

  const params = useLocalSearchParams<{ id?: string }>()
  const stockBoxDatabase = useStockBoxDatabase()

  function userSave() {
    if (
      !productName.trim() ||
      !description.trim() ||
      !image.trim() ||
      quantity === null ||
      quantity <= 0 ||
      value === null ||
      value <= 0
    ) {
      return Alert.alert("Atenção!", "Preencha os todos os campos.")
    }

    if (params.id) {
      //update
    } else {
      saveData()
    }
  }

  async function saveData() {
    try {
      await stockBoxDatabase.create({
        name: productName,
        description: description,
        quantity: Number(quantity),
        price: Number(value),
        imageUrl: image
      })
      Alert.alert("Sucesso", "Produto cadastrado com sucesso.", [
        {
          text: "OK", onPress: () => router.back()
        }
      ])
    } catch (error) {
      Alert.alert("Erro", "Falha ao cadastrar novo produto.")
      console.log(error)
    }
  }



  return (
    <View style={{ flex: 1 }}>

      <Header
        title='Novo Produto'
      />

      <ScrollView style={{ paddingHorizontal: 14, flex: 1, paddingTop: 12 }}>
        <Banner 
          background={image}
        />

        <Input
          label='URL da imagem'
          placeholder='https://exemplo.com/imagem.png'
          value={image}
          onChangeText={setImage}
        />

        <Input
          label='Nome do Produto'
          placeholder='Título do produto'
          value={productName}
          onChangeText={setProductName}
        />

        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <CurrencyInput
            label='Estoque'
            value={quantity}
            onChangeValue={setQuantity}
            quantity
          />
          <CurrencyInput
            label="Valor Unitário"
            value={value}
            onChangeValue={setValue}
            price
          />
        </View>

        <Input
          label='Descrição (Opcional)'
          placeholder='Detalhes sobre o produto...'
          textarea
          value={description}
          onChangeText={setDescription}
        />

        <View style={{ paddingBottom: 76, marginTop: 24 }}>
          <Button
            title='SALVAR'
            color={colors.white}
            textColor={colors.black}
            icon={{
              nameIcon: 'save',
              colorIcon: colors.black,
              sizeIcon: 16
            }}
            activeOpacity={0.8}
            style={{
              flex: 1
            }}
            onPress={() => userSave()}
          />
        </View>

      </ScrollView>

    </View>
  )
}