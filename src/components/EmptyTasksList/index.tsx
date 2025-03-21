import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export function EmptyTasksList() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('@/src/assets/clipboard-icon.png')}
        style={styles.icon}
      />

      <View style={styles.textsContainer}>
        <Text style={styles.title}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.description}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  )
}