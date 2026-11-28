import { View, Text, ScrollView, Alert } from 'react-native'
import { useState, useCallback } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useFocusEffect } from 'expo-router'
import * as ImagePicker from 'expo-image-picker'
import * as MediaLibrary from 'expo-media-library'
import { styles } from './style'
import { colors } from '@/theme/colors'

//components
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import Input from '@/components/Input'
import ImageButton from '@/components/ImageButton'
import CurrencyInput from '@/components/InputCurrecy'
import Button from '@/components/Button'
import { router, useLocalSearchParams } from 'expo-router'
import { useStockBoxDatabase, StockBoxResponse } from '@/database/useStockBoxDatabase'
import Scroll from '@/components/Scroll';

export default function Add() {
  const [productName, setProductName] = useState('')
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState<number | null>(0)
  const [image, setImage] = useState('')
  const [value, setValue] = useState<number | null>(0)
  const [isLoading, setIsLoading] = useState(false)

  const params = useLocalSearchParams<{ id?: string }>()
  const stockBoxDatabase = useStockBoxDatabase()
  const isEditing = !!params.id

  async function loadProduct() {
    if (params.id) {
      try {
        setIsLoading(true)
        const product = await stockBoxDatabase.getById(Number(params.id))
        if (product) {
          setProductName(product.name)
          setDescription(product.description)
          setQuantity(product.quantity)
          setValue(product.price)
          setImage(product.imageUrl)
        }
      } catch (error) {
        Alert.alert("Erro", "Falha ao carregar o produto.")
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
  }

  useFocusEffect(
    useCallback(() => {
      loadProduct()
    }, [params.id])
  )

  // Resolve um endereço de imagem que continue válido depois de fechar o app,
  // já que o seletor e a câmera devolvem arquivos temporários (cache).
  async function getDurableUri(asset: ImagePicker.ImagePickerAsset, fromCamera: boolean) {
    try {
      // Foto nova: só precisa de permissão para gravar na galeria
      const permission = await MediaLibrary.requestPermissionsAsync(fromCamera, ['photo'])
      if (!permission.granted) return asset.uri

      if (fromCamera) {
        const created = await MediaLibrary.createAssetAsync(asset.uri)
        try {
          const info = await MediaLibrary.getAssetInfoAsync(created)
          return info.localUri ?? created.uri
        } catch {
          return created.uri
        }
      }

      if (asset.assetId) {
        const info = await MediaLibrary.getAssetInfoAsync(asset.assetId)
        return info.localUri ?? asset.uri
      }
    } catch (error) {
      console.log(error)
    }
    return asset.uri
  }

  async function pickFromCamera() {
    try {
      const permission = await ImagePicker.requestCameraPermissionsAsync()
      if (!permission.granted) {
        return Alert.alert("Permissão necessária", "Permita o acesso à câmera nas configurações para tirar a foto.")
      }

      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ['images'],
        quality: 0.8
      })
      if (result.canceled) return

      setImage(await getDurableUri(result.assets[0], true))
    } catch (error) {
      Alert.alert("Erro", "Falha ao abrir a câmera.")
      console.log(error)
    }
  }

  async function pickFromGallery() {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'],
        quality: 0.8
      })
      if (result.canceled) return

      setImage(await getDurableUri(result.assets[0], false))
    } catch (error) {
      Alert.alert("Erro", "Falha ao abrir a galeria.")
      console.log(error)
    }
  }

  function chooseImage() {
    Alert.alert(
      "Imagem do produto",
      "Deseja tirar uma foto ou escolher uma imagem da galeria?",
      [
        { text: "Tirar foto", onPress: pickFromCamera },
        { text: "Galeria", onPress: pickFromGallery },
        { text: "Cancelar", style: "cancel" }
      ]
    )
  }

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

    if (isEditing) {
      updateData()
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

  async function updateData() {
    try {
      await stockBoxDatabase.update(Number(params.id), {
        name: productName,
        description: description,
        quantity: Number(quantity),
        price: Number(value),
        imageUrl: image
      })
      Alert.alert("Sucesso", "Produto atualizado com sucesso.", [
        {
          text: "OK", onPress: () => router.back()
        }
      ])
    } catch (error) {
      Alert.alert("Erro", "Falha ao atualizar o produto.")
      console.log(error)
    }
  }

  return (
    <Scroll style={{ flex: 1 }} includeBottomInset={false}>

      <Header
        title={isEditing ? 'Editar Produto' : 'Novo Produto'}
      />

      <View style={{ flex: 1, paddingTop: 12 }}>
        <Banner
          background={image}
        />

        <ImageButton
          label='Imagem do produto'
          selected={image.trim().length > 0}
          onPress={chooseImage}
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

        <View style={{ marginTop: 24 }}>
          <Button
            title={isEditing ? 'Atualizar' : 'Salvar'}
            color={colors.orange[500]}
            textColor={colors.onyx}
            activeOpacity={0.8}
            style={{
              flex: 1
            }}
            onPress={() => userSave()}
          />
        </View>

      </View>

    </Scroll>
  )
}