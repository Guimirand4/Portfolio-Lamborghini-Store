import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  Imagecontainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: 8,
   
  },
  LogoContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  ImageLogo: {
    flex: 1,
    width: "65%",
    resizeMode: "contain",
  },
  carBrand: {
    color: "#fff",
    fontWeight: "400",
    fontSize: 18,
    fontStyle: "italic",
  },
  carName: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center"
  }
});
