import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface CheckboxProps {
  onCheck: () => void;
  isCompleted: boolean;
}

export function Checkbox({ onCheck, isCompleted }: CheckboxProps) {
  return (
    <TouchableOpacity 
    style={[
      styles.checkbox,
      isCompleted && styles.checkboxChecked
    ]}
    onPress={onCheck}
  >
    {
      isCompleted && <Feather color="#fff" size={12} name='check' />
    }
  </TouchableOpacity>
  )
}