import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { SharedElement } from "react-navigation-shared-element";

const useStyles = () =>
  StyleSheet.create({
    container: { flex: 1 },
    backButton: { color: "black" },
    button: {
      position: "absolute",
      padding: 20,
      paddingTop: 50
    },
    centerContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    nextButton: {
      width: 60,
      height: 60,
      backgroundColor: "lime",
      borderRadius: 60
    }
  });

const Questions = props => {
  const classes = useStyles();
  const { navigation, route } = props;

  const calculateBackgroundColor = () => {
    switch (route.params.index) {
      default:
        return "red";
      case 1:
        return "blue";
      case 2:
        return "lime";
      case 3:
        return "orange";
    }
  };

  const calculateNextColor = () => {
    switch (route.params.index) {
      default:
      case 0:
        return "blue";
      case 1:
        return "lime";
      case 2:
        return "orange";
      case 3:
        return "white";
    }
  };

  return (
    <View style={classes.container}>
      <SharedElement id={route.params.id}>
        <View
          style={{
            position: "absolute",
            backgroundColor: calculateBackgroundColor(),
            width: 2000,
            height: 2000,
            left: -1000,
            top: -1000
          }}
        />
      </SharedElement>

      <View style={classes.centerContainer}>
        <Text>{route.params.id}</Text>
        <Pressable onPress={() => navigation.navigate(route.params.nextId)}>
          <SharedElement id={route.params.nextId}>
            <View
              style={[
                classes.nextButton,
                {
                  backgroundColor: calculateNextColor()
                }
              ]}
            />
          </SharedElement>
        </Pressable>
      </View>
      <Pressable style={classes.button} onPress={() => navigation.goBack()}>
        <Text style={classes.backButton}>Back</Text>
      </Pressable>
    </View>
  );
};

export default Questions;
