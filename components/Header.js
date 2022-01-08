import React from "react";
import { StyleSheet, View, Platform } from "react-native";
import colors from "../constants/colors";
import TitleText from "./TitleText";

const Header = ({ title }) => {
  return (
    <View
      // style={
      //   Platform.OS === "android"
      //     ? { ...styles.headerBase, ...styles.headerAndroid }
      //     : { ...styles.headerBase, ...styles.headerIOS }
      // }
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        }),
      }}
    >
      <TitleText style={styles.headerTitle}>{title}</TitleText>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  headerIOS: {
    backgroundColor: "white",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  headerAndroid: {
    backgroundColor: colors.primary,
  },
  headerTitle: {
    color: Platform.OS === "ios" ? colors.primary : "white",
  },
});
