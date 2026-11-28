import { StyleSheet, View } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur'
import { usePathname, useRouter } from 'expo-router'
import { styles } from './style';
import TabBarIcon from '../TabBarIcon';
import RegisterButton from '../RegisterButton';

const tabs = [
  { name: 'view-dashboard-outline', route: '/' },
  { name: 'package-variant-closed', route: '/products' },
] as const

// Barra de navegação inferior com blur, que destaca a aba da rota atual e se esconde nas telas de tela cheia (Register, About e detalhes do histórico).
export default function TabBar() {
  const pathname = usePathname()
  const router = useRouter()

  const isRegisterPage = pathname === '/add'

  if (isRegisterPage) {
    return null
  }

  const isFullScreenPage =
    pathname === '/add' ||
    pathname.startsWith('/in-progress/') ||
    (pathname.startsWith('/screen/History/') && pathname !== '/screen/History')

  if (isFullScreenPage) {
    return null
  }

  const activeTab = tabs.find((tab) => tab.route === pathname)?.name ?? 'house'

  return (
    <View pointerEvents="box-none" style={StyleSheet.absoluteFill}>
      <View style={styles.container}>
        <BlurView style={styles.blur} tint={'dark'} intensity={100}>
          {tabs.map((tab) => (
            <TabBarIcon
              key={tab.name}
              name={tab.name}
              size={24}
              active={activeTab === tab.name}
              onPress={() => router.push(tab.route)}
            />
          ))}
        </BlurView>
      </View>

      <RegisterButton />
    </View>
  )
}