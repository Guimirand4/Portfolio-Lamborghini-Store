import React from "react";
import { View, Text, Button, Image } from "react-native";
import { styles } from "./style";
import Logo from "../../../assets/logo.png";
import { Divider } from "../Divider";

export function CardView() {
  const renderLogoBox = () => (
    <View style={styles.LogoContainer}>
      <Image style={styles.ImageLogo} source={Logo} />
    </View>
  );
  return (
    <View style={styles.Imagecontainer}>
      {renderLogoBox()}
      <Divider />
    </View>
  );
}
