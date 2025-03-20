import { Inter_400Regular, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';

import { TaskBoard } from '@/src/components/TaskBoard';
import { TaskForm } from '@/src/components/TaskForm';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";
import { Image, View } from "react-native";
import { styles } from './styles';

SplashScreen.preventAutoHideAsync()

export function Home() {
  const [ fontsLoaded ] = useFonts({
    'Inter-Regular': Inter_400Regular,
    'Inter-Bold': Inter_700Bold,
  })

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={styles.homeContainer}>
      <View style={styles.heroContainer}>
        <Image style={styles.logo} source={require('@/src/assets/logo.png')} />
      </View>

      <TaskForm />
      <TaskBoard />
    </View>
  )
}