import { Colors } from "@/src/constants/color";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface TaskFormProps {
  handleAddTask: (description: string) => void;
}

export function TaskForm({ handleAddTask }: TaskFormProps) {
  const [isInputFocused, setIsInputFocused] = useState(false)
  const [description, setDescription] = useState('')

  function handleChangedDescription(text: string) {
    setDescription(text)
  }

  function onAddTask() {
    if (description.trim() === '') return

    handleAddTask(description)
    setDescription('')
  }

  return (
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
        onChangeText={handleChangedDescription}
        value={description}
      />

      <TouchableOpacity onPress={onAddTask} style={styles.btnAddTask}>
        <AntDesign color={Colors['gray-100']}
        size={16} name="pluscircleo" />
      </TouchableOpacity>
    </View>
  )
}