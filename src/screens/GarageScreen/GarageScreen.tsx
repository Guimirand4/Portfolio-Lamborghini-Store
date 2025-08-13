import React from "react";
import { View } from "react-native";

import { styles } from "./Style";
import { CardView } from "../../components/CardView";

export default function GarageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.cameraBox}>
        <View style={styles.TriangleCorner}></View>
        <View style={[styles.TriangleCorner, styles.topRight]}></View>
        <View style={[styles.TriangleCorner, styles.bottomLeft]}></View>
        <View style={[styles.TriangleCorner, styles.bottomRight]}></View>
        <CardView />
      </View>
    </View>
  );
}
