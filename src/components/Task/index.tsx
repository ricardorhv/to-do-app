import { Feather } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from "react-native";
import { Checkbox } from '../Checkbox';
import { styles } from "./styles";

export function Task() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Checkbox />

        <Text style={styles.description}>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
        </Text>
      </View>

      <TouchableOpacity>
        <Feather style={styles.removeIcon} name="trash-2" size={20}/>
      </TouchableOpacity>
    </View>
  )
}