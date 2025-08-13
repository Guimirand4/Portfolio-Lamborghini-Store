import React from "react";
import { View } from "react-native";

import { styles } from "./style";

export function Divider() {
  return (
    <View style={styles.DividerContainer}>
      <View style={styles.Divider}></View>
    </View>
  );
}
