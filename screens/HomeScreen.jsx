import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEmail } from "../reducers/user";

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const handleEmail = () => {
    dispatch(addEmail(email));
    navigation.navigate("TabNavigator", { screen: "Gallery" });
  };
  validate = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      console.log("Email is Not Correct");
      this.setState({ email: text });
      return false;
    } else {
      this.setState({ email: text });
      console.log("Email is Correct");
    }

    // onChangeText={(text) => this.validate(text)
  };

  return (
    <View style={style.container}>
      <Image
        style={style.img_background}
        source={require("../assets/background.jpg")}
      />
      <Image style={style.img} source={require("../assets/camera.png")} />
      <View style={style.card}>
        <Text style={style.text}>Snap pics</Text>
        <TextInput
          onChangeText={(value) => setEmail(value)}
          placeholder="Email"
          value={email}
          style={style.input}
        />
        <TouchableOpacity style={style.button} onPress={() => handleEmail()}>
          <Text style={style.text}>Go to Gallery</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F2F1",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "90%",
    height: "30%",
    backgroundColor: "white",
    borderRadius: 10,
  },
  img: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: -15,
  },
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: "green",
    borderRadius: 10,
    width: 300,
  },
  input: {
    margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    borderRadius: 15,
    width: 300,
  },
  text: {
    color: "white",
  },
  font: {
    fontFamily: "Pacifico_400Regular",
    fontSize: 35,
  },
  img_background: {
    position: "absolute",
    opacity: 0.3,
    width: "100%",
    height: "100%",
    zIndex: -10,
  },
});
