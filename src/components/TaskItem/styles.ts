import { Colors } from "@/src/constants/color";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 12,
    marginBottom: 8,

    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,

    backgroundColor: Colors['gray-500'],
    borderWidth: 1,
    borderColor: Colors['gray-400'],
    borderRadius: 8,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1
  },
  description: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors['gray-100'],
    flexShrink: 1
  },
  descriptionWithStrikeThrough: {
    textDecorationLine: 'line-through',
    color: Colors['gray-300']
  },
  removeIcon: {
    color: Colors['gray-300']
  },
})