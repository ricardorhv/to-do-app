import { Colors } from "@/src/constants/color";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: Colors['gray-600'],
    flex: 1
  },

  heroContainer: {
    paddingVertical: 70,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: Colors["gray-700"],
  },

  logo: {
    width: 110,
  },

  formContainer: {
    flexDirection: 'row',
    gap: 4,
    width: '100%',
    paddingHorizontal: 24,
    // marginTop: '-50%',
    transform: [{ translateY: '-50%' }],
  },

  taskInput: {
    padding: 16,
    borderRadius: 6,

    borderWidth: 1,
    borderColor: Colors["gray-700"],
    backgroundColor: Colors['gray-500'],
    color: Colors['gray-100'],

    fontSize: 16,
    fontFamily: 'Inter-Regular',


    flex: 1
  },

  taskInputFocused: {
    borderColor: Colors['purple-dark'],
    borderWidth: 1
  },

  btnAddTask: {
    padding: 18,
    borderRadius: 6,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: Colors['blue-dark']
  }
})