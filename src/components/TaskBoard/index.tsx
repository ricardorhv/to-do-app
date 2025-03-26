import { Task } from "@/src/interfaces/Task";
import { FlatList, SafeAreaView, View } from "react-native";
import { EmptyTasksList } from "../EmptyTasksList";
import { TaskInfo } from "../TaskInfo";
import { TaskItem } from "../TaskItem";
import { styles } from "./styles";

interface TaskBoardProps {
  tasks: Task[];
  handleCompletedTask: (taskId: string) => void;
  handleDeleteTask: (taskId: string) => void;
}

export function TaskBoard({ tasks, handleCompletedTask, handleDeleteTask }: TaskBoardProps) {
  const completedTasks = tasks.reduce((acc, task) => {
    if (task.isCompleted) return acc + 1
    return acc
  }, 0)
  const createdTasks = tasks.length

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.infoContainer}>
        <TaskInfo 
          type="created"
          value={createdTasks}
        />
        <TaskInfo 
          type="done"
          value={completedTasks}
        />
      </View>

      <FlatList 
        data={tasks} 
        style={styles.tasksContainer}
        keyExtractor={({id}) => id}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<EmptyTasksList />}
        renderItem={
          ({ item }) => (
            <TaskItem
              task={item}
              handleCompletedTask={handleCompletedTask}
              handleDeleteTask={handleDeleteTask}
            />
          )
        }
        contentContainerStyle={styles.contentContainer}
      />
    </SafeAreaView>
  )
}