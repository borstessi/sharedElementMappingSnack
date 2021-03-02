import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import Screen2 from "./View/Screen2";
import Question from "./View/Question";

const Stack = createSharedElementStackNavigator();
const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress
  }
});

const questions = [
  {
    id: "question-screen1",
    initial: true,
    nextId: "question-screen2",
    index: 0,
    question: "Are you a programmer?"
  },
  {
    id: "question-screen2",
    initial: false,
    nextId: "question-screen3",
    index: 1,
    question: "Do you like GitHub?"
  },
  {
    id: "question-screen3",
    initial: false,
    nextId: "question-screen4",
    index: 2,
    question: "Do you like sheep?"
  },
  {
    id: "question-screen4",
    initial: false,
    nextId: "Home",
    index: 3,
    question: "Do you like potatoes?"
  }
];

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode={"none"}>
        <Stack.Screen
          name="Home"
          component={Screen2}
          sharedElementsConfig={(route, otherRoute, showing) => {
            return [
              {
                id: "question-screen1",
                animation: "fade-in",
                resize: "clip"
              }
            ];
          }}
          options={{
            gestureEnabled: false,
            transitionSpec: {
              open: { animation: "timing", config: { duration: 300 } },
              close: { animation: "timing", config: { duration: 300 } }
            },
            cardStyleInterpolator: forFade
          }}
        />
        {questions.map(item => {
          console.log(item.id);
          return (
            <Stack.Screen
              key={item.id}
              name={item.id}
              component={Question}
              initialParams={{
                id: item.id,
                nextId: item.nextId,
                initial: item.initial,
                index: item.index,
                question: item.question
              }}
              sharedElementsConfig={(route, otherRoute, showing) => {
                return [
                  {
                    id: item.id,
                    animation: "fade-in",
                    resize: "clip"
                  }
                ];
              }}
              options={{
                gestureEnabled: false,
                transitionSpec: {
                  open: { animation: "timing", config: { duration: 300 } },
                  close: { animation: "timing", config: { duration: 300 } }
                },
                cardStyleInterpolator: forFade
              }}
            />
          );
        })}
        {/*<Stack.Screen*/}
        {/*  name={"question-screen1"}*/}
        {/*  component={Question}*/}
        {/*  initialParams={{*/}
        {/*    id: "question-screen1",*/}
        {/*    nextId: "question-screen2",*/}
        {/*    initial: true,*/}
        {/*    index: 0,*/}
        {/*    question: "Are you a programmer?"*/}
        {/*  }}*/}
        {/*  sharedElementsConfig={(route, otherRoute, showing) => {*/}
        {/*    return [*/}
        {/*      {*/}
        {/*        id: "question-screen1",*/}
        {/*        animation: "fade-in",*/}
        {/*        resize: "clip"*/}
        {/*      }*/}
        {/*    ];*/}
        {/*  }}*/}
        {/*  options={{*/}
        {/*    gestureEnabled: false,*/}
        {/*    transitionSpec: {*/}
        {/*      open: { animation: "timing", config: { duration: 300 } },*/}
        {/*      close: { animation: "timing", config: { duration: 300 } }*/}
        {/*    },*/}
        {/*    cardStyleInterpolator: forFade*/}
        {/*  }}*/}
        {/*/>*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
