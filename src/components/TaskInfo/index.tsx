import { Text, View } from "react-native";
import { styles } from "./styles";

interface TaskInfoProps {
  type: 'created' | 'done';
  value: number;
}

export function TaskInfo({ type, value }: TaskInfoProps) {
  const isTypeCreated = type === 'created'

  return (
    <View style={styles.container}>
      <Text 
        style={[
          styles.text, !isTypeCreated && styles.typeDone
        ]}
      >
        {
          isTypeCreated ? 'Criadas' : 'Concluídas'
        }
      </Text>

      <View style={styles.valueContainer}>
        <Text style={styles.value}>
          {value}
        </Text>
      </View>
    </View>
  )
}