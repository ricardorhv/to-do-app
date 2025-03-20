import { Colors } from "@/src/constants/color";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    marginTop: 20,

    paddingVertical: 48,

    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    
    borderTopWidth: 1,
    borderTopColor: Colors['gray-400'],
  },

  icon: {
    width: 56,
    height: 56
  },

  textsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    color: Colors['gray-300'],
    textAlign: 'center',
    lineHeight: 14
  },
  description: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors['gray-300'],
    textAlign: 'center',
    lineHeight: 14
  }
})