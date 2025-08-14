import React, { useEffect } from "react";
import { View, Text, Button, Image } from "react-native";
import {useState} from 'react'
import { styles } from "./style";
import Logo from "../../../assets/logo.png";
import { Divider } from "../Divider";
import { CAR_ASSETS_BASE_URL } from "../../constants/car";
import { BuyButton } from "../BuyButton";
import { CarModel } from "./props";
import { loadCarData } from "./actions";

export function CardView() {

  const [carData, setCarData] = useState<CarModel | null>(null);

  useEffect(() =>{
    (async () => {
      await loadCarData(1, setCarData)
    })();
  }, [])

  const renderLogoBox = () => (
    <View style={styles.LogoContainer}>
      <Image style={styles.ImageLogo} source={Logo} />
    </View>
  );

  const renderCarDetails = () => (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.carBrand}>Lamborghini</Text>
      <Text style={styles.carName}>MODEL</Text>
    </View>
  );

  const renderCarImage = () => (
    <Image
      style={styles.Image}
      source={{
        uri: `${CAR_ASSETS_BASE_URL}1.png`,
      }}
    />
  );

  const renderPriceControls = () => (
    <View style={styles.PriceLabelContainer}>
      <Button title="<" color={"#01A6B3"} onPress={() => {}} />
      <Text style={styles.PriceLabel}> Valor</Text>
      <Button title=">" color={"#01A6B3"} onPress={() => {}} />
    </View>
  );

  return (
    <View style={styles.Imagecontainer}>
      {renderLogoBox()}
      <Divider />
      {renderCarDetails()}
      {renderCarImage()}
      <Divider />
      <BuyButton />
      {renderPriceControls()}
    </View>
  );
}
