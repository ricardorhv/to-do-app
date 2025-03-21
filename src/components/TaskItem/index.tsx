import { Task } from '@/src/interfaces/Task';
import { Feather } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from "react-native";
import { Checkbox } from '../Checkbox';
import { styles } from "./styles";

interface TaskItemProps {
  handleCompletedTask: (taskId: string) => void;
  task: Task;
}

export function TaskItem({ 
  task: { id, description, isCompleted }, 
  handleCompletedTask
 }: TaskItemProps) {

  function onToggleComplete() {
    handleCompletedTask(id)
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Checkbox 
          isCompleted={isCompleted} 
          onCheck={onToggleComplete} 
        />

        <Text style={[
          styles.description,
          isCompleted && styles.descriptionWithStrikeThrough
        ]}>
          {description}
        </Text>
      </View>

      <TouchableOpacity>
        <Feather style={styles.removeIcon} name="trash-2" size={20}/>
      </TouchableOpacity>
    </View>
  )
}