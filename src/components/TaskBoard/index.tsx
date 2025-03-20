import { View } from "react-native";
import { TaskInfo } from "../TaskInfo";
import { styles } from "./styles";

export function TaskBoard() {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <TaskInfo 
          type="created"
          value={0}
        />
        <TaskInfo 
          type="done"
          value={0}
        />
      </View>
    </View>
  )
}