import { Task } from "@/src/interfaces/Task";
import { FlatList, View } from "react-native";
import { EmptyTasksList } from "../EmptyTasksList";
import { TaskInfo } from "../TaskInfo";
import { TaskItem } from "../TaskItem";
import { styles } from "./styles";

interface TaskBoardProps {
  tasks: Task[];
  handleCompletedTask: (taskId: string) => void;
}

export function TaskBoard({ tasks, handleCompletedTask }: TaskBoardProps) {
  const isTasksEmpty = tasks.length === 0
  const completedTasks = tasks.reduce((acc, task) => {
    if (task.isCompleted) return acc + 1
    return acc
  }, 0)
  const createdTasks = tasks.length

  return (
    <View style={styles.container}>
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

      {
        isTasksEmpty && <EmptyTasksList />
      }

      <FlatList 
        data={tasks} 
        style={styles.tasksContainer}
        keyExtractor={({id}) => id}
        renderItem={
          ({ item }) => (
            <TaskItem
              task={item}
              handleCompletedTask={handleCompletedTask}
            />
          )
        }
      />
    </View>
  )
}