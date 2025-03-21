import { Colors } from "@/src/constants/color";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  checkbox: {
    borderRadius: 100,
    borderWidth: 2,
    borderColor: Colors.blue,

    backgroundColor: 'transparent',

    width: 25,
    height: 25,

    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    borderColor: Colors['purple-dark'],
    backgroundColor: Colors['purple-dark'],
  }
})