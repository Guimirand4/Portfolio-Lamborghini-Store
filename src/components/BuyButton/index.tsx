import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./style";
import { AntDesign } from "@expo/vector-icons";

export function BuyButton() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <AntDesign name="shoppingcart" size={24} color="black" style={styles.Icon}/>
        <Text style={styles.TextButton}>Buy This</Text>
      </TouchableOpacity>
    </View>
  );
}
