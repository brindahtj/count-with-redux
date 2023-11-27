import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SnapScreen() {
  return <View></View>;
}
// const style = StyleSheet.create({
//   img: {
//     width: "100%",
//     height: "100%",
//   },
//   map: {
//     flex: 1,
//   },
//   marker: {
//     backgroundColor: "#fecb2d",
//   },
//   container: {
//     flex: 1,
//     paddingTop: Platform.OS === "ios" ? 0 : constants.statusBarHeight,
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   modalView: {
//     backgroundColor: "white",
//     borderRadius: 20,
//     padding: 30,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   input: {
//     width: 150,
//     borderBottomColor: "#ec6e5b",
//     borderBottomWidth: 1,
//     fontSize: 16,
//   },
//   button: {
//     width: 150,
//     alignItems: "center",
//     marginTop: 20,
//     paddingTop: 8,
//     backgroundColor: "#ec6e5b",
//     borderRadius: 10,
//   },
//   textButton: {
//     color: "#ffffff",
//     height: 24,
//     fontWeight: "600",
//     fontSize: 15,
//   },
// });
