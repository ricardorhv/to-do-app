import { Inter_400Regular, Inter_700Bold, useFonts } from '@expo-google-fonts/inter';

import { TaskBoard } from '@/src/components/TaskBoard';
import { TaskForm } from '@/src/components/TaskForm';
import { Task } from '@/src/interfaces/Task';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from "react";
import { Image, SafeAreaView } from "react-native";
import { styles } from './styles';

SplashScreen.preventAutoHideAsync()

const data = [
  { id: 'teste1', description: "Testando o sistema", createdAt: new Date(), isCompleted: false },
  { id: 'teste2', description: "Revisando código", createdAt: new Date(), isCompleted: true },
  { id: 'teste3', description: "Criando relatório", createdAt: new Date(), isCompleted: false },
  { id: 'teste4', description: "Atualizando dados", createdAt: new Date(), isCompleted: true },
  { id: 'teste5', description: "Planejando tarefa", createdAt: new Date(), isCompleted: false },
  { id: 'teste6', description: "Teste de integração", createdAt: new Date(), isCompleted: true },
  { id: 'teste7', description: "Corrigindo erro", createdAt: new Date(), isCompleted: false },
  { id: 'teste8', description: "Reunião agendada", createdAt: new Date(), isCompleted: true },
  { id: 'teste9', description: "Desenvolvendo feature", createdAt: new Date(), isCompleted: false },
  { id: 'teste10', description: "Documentando projeto", createdAt: new Date(), isCompleted: true },
  { id: 'teste11', description: "Analisando requisitos", createdAt: new Date(), isCompleted: false },
  { id: 'teste12', description: "Implementando API", createdAt: new Date(), isCompleted: true },
  { id: 'teste13', description: "Teste de performance", createdAt: new Date(), isCompleted: false },
  { id: 'teste14', description: "Configurando servidor", createdAt: new Date(), isCompleted: true },
  { id: 'teste15', description: "Revisão de segurança", createdAt: new Date(), isCompleted: false },
  { id: 'teste16', description: "Deploy de aplicação", createdAt: new Date(), isCompleted: true },
  { id: 'teste17', description: "Treinamento de equipe", createdAt: new Date(), isCompleted: false },
  { id: 'teste18', description: "Monitorando sistema", createdAt: new Date(), isCompleted: true },
  { id: 'teste19', description: "Backup de dados", createdAt: new Date(), isCompleted: false },
  { id: 'teste20', description: "Finalizando projeto", createdAt: new Date(), isCompleted: true }
];

export function Home() {
  const [ fontsLoaded ] = useFonts({
    'Inter-Regular': Inter_400Regular,
    'Inter-Bold': Inter_700Bold,
  })
  const [tasks, setTasks] = useState<Task[]>(data)

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