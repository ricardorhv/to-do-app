import { Colors } from "@/src/constants/color";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function TaskForm() {
  const [isInputFocused, setIsInputFocused] = useState(false)

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
        />

        <TouchableOpacity style={styles.btnAddTask}>
          <AntDesign color={Colors['gray-100']}
          size={16} name="pluscircleo" />
        </TouchableOpacity>
      </View>
  )
}