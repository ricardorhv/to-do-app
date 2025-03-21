import { Feather } from '@expo/vector-icons';
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function Checkbox() {
  const [isCompleted, setIsCompleted] = useState(false)

  return (
    <TouchableOpacity 
    style={[
      styles.checkbox,
      isCompleted && styles.checkboxChecked
    ]}
    onPress={() => setIsCompleted(prevState => !prevState)}
  >
    {
      isCompleted && <Feather color="#fff" size={12} name='check' />
    }
  </TouchableOpacity>
  )
}