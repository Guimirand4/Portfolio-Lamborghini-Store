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

  const renderCarDetails = () => (
    <View style={{alignItems: "center"}}>
      <Text style={styles.carBrand}>Lamborghini</Text>
      <Text style={styles.carName}>MODEL</Text>
    </View>
  );

  return (
    <View style={styles.Imagecontainer}>
      {renderLogoBox()}
      <Divider />
      {renderCarDetails()}
    </View>
  );
}
