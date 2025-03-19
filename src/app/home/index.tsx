import { Colors } from "@/src/constants/color";
import { Inter_400Regular, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';
import { AntDesign } from "@expo/vector-icons";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from './styles';

SplashScreen.preventAutoHideAsync()

export function Home() {
  const [ fontsLoaded ] = useFonts({
    'Inter-Regular': Inter_400Regular,
    'Inter-Bold': Inter_700Bold,
  })
  const [isInputFocused, setIsInputFocused] = useState(false)

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

      <View style={styles.formContainer}>
        <TextInput 
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={Colors['gray-300']}
          style={[
            styles.taskInput,
            isInputFocused && styles.taskInputFocused
          ]}
          onBlur={() => setIsInputFocused(false)}
          onFocus={() => setIsInputFocused(true)}
        />

        <TouchableOpacity style={styles.btnAddTask}>
          <AntDesign color={Colors['gray-100']}
          size={16} name="pluscircleo" />
        </TouchableOpacity>
      </View>
    </View>
  )
}