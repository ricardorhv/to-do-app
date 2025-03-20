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

  
})