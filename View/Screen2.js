import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { SharedElement } from "react-navigation-shared-element";

const useStyles = props =>
  StyleSheet.create({
    container: { flex: 1, alignItems: "center", justifyContent: "center" },
    button: {
      width: 60,
      height: 60,
      backgroundColor: "red",
      borderRadius: 60
    }
  });

const Screen2 = props => {
  const classes = useStyles(props);
  const { navigation } = props;

  return (
    <View style={classes.container}>
      <Text>Go to Question 1</Text>
      <Pressable onPress={() => navigation.navigate("question-screen1")}>
        <SharedElement id={"question-screen1"}>
          <View style={classes.button} />
        </SharedElement>
      </Pressable>
    </View>
  );
};

export default Screen2;
