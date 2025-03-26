import { Inter_400Regular, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';

import { TaskBoard } from '@/src/components/TaskBoard';
import { TaskForm } from '@/src/components/TaskForm';
import { Task } from '@/src/interfaces/Task';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from "react";
import { Image, SafeAreaView } from "react-native";
import { styles } from './styles';

SplashScreen.preventAutoHideAsync()

export function Home() {
  const [ fontsLoaded ] = useFonts({
    'Inter-Regular': Inter_400Regular,
    'Inter-Bold': Inter_700Bold,
  })
  const [tasks, setTasks] = useState<Task[]>([])

  function handleCompletedTask(taskId: string) {
    const completedTask = tasks.find((task) => task.id === taskId)

    if (completedTask) {
      setTasks((prevState) => {
        if (completedTask.isCompleted) {
          return [
            {
              ...completedTask,
              isCompleted: !completedTask.isCompleted,
            },
            ...prevState.filter((task) => task.id !== taskId),
          ]
        }

        return [
          ...prevState.filter((task) => task.id !== taskId),
          {
            ...completedTask,
            isCompleted: !completedTask.isCompleted,
          }
        ]
      })
    }
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

  function handleDeleteTask(taskId: string) {
    setTasks((prevState) => prevState.filter((task) => task.id !== taskId))
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
    <SafeAreaView style={styles.homeContainer}>
      <SafeAreaView style={styles.heroContainer}>
        <Image style={styles.logo} source={require('@/src/assets/logo.png')} />
      </SafeAreaView>

      <TaskForm handleAddTask={handleAddTask} />
      <TaskBoard 
        tasks={tasks} 
        handleCompletedTask={handleCompletedTask}
        handleDeleteTask={handleDeleteTask}
      />
    </SafeAreaView>
  )
}