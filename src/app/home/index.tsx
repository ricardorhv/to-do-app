import { Inter_400Regular, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';

import { TaskBoard } from '@/src/components/TaskBoard';
import { TaskForm } from '@/src/components/TaskForm';
import { Task } from '@/src/interfaces/Task';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { styles } from './styles';

SplashScreen.preventAutoHideAsync()

export function Home() {
  const [ fontsLoaded ] = useFonts({
    'Inter-Regular': Inter_400Regular,
    'Inter-Bold': Inter_700Bold,
  })
  const [tasks, setTasks] = useState<Task[]>([])

  function handleCompletedTask(taskId: string) {
    setTasks((prevState) => {
      return prevState.map((task) => {
        if (task.id === taskId) return {
          ...task,
          isCompleted: !task.isCompleted,
        } 

        return task;
      })
    })
  }

  function handleAddTask(description: string) {
    const newTask = {
      id: Math.random().toString(36).substring(2, 9),
      description,
      createdAt: new Date(),
      isCompleted: false,
    }

    setTasks((prevState) => [newTask, ...prevState])
  }
  

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

      <TaskForm handleAddTask={handleAddTask} />
      <TaskBoard tasks={tasks} handleCompletedTask={handleCompletedTask} />
    </View>
  )
}