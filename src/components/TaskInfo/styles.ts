import { Colors } from "@/src/constants/color";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  text: {
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    color: Colors.blue
  },
  valueContainer: {
    paddingHorizontal: 8,
    paddingVertical: 2,

    backgroundColor: Colors['gray-400'],
    borderRadius: 100,

    justifyContent: 'center',
    alignItems: 'center'
  },
  value: {
    fontFamily: 'Inter-Bold',
    color: Colors['gray-200'],
    fontSize: 12
  },
  typeDone: {
    color: Colors.purple
  }
})