import { View, Text, ScrollView } from 'react-native'

//components
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import { styles } from './style'
import Input from '@/components/Input'

export default function Add() {


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

        <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
          <Input
            label='Nome do Produto'
            placeholder='Título do produto'
          />
          <Input
            label='Nome do Produto'
            placeholder='Título do produto'
          />
        </View>

      </ScrollView>

    </View>
  )
}