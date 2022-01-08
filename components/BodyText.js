import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BodyText = (props) => <Text style={{...styles.body,...props.styles}}>{props.children}</Text>;

export default BodyText;

const styles = StyleSheet.create({
  body: {
    fontFamily: "open-sans",
  },
});
