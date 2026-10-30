import { PixelifySans_400Regular } from "@expo-google-fonts/pixelify-sans";
import { useFonts } from "expo-font";
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Image,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen({ navigation }: any) {
  const [fontsLoaded] = useFonts({
    PixelifySans_400Regular,
  });
  if (!fontsLoaded) {
    return (
      <View>
        <ActivityIndicator size="large" color="0000ff" />
        <Text>Loading fonts...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Hello, "Name"!</Text>
      <Image
        style={styles.image}
        source={require("../assets/teaBags.png")}
      ></Image>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button1}
          onPress={() => navigation.navigate("My Teapot")}
        >
          <Text style={styles.buttonText}>My</Text>
          <Text style={styles.buttonText2}>Teapot</Text>
        </Pressable>
        <Pressable
          style={styles.button2}
          onPress={() => navigation.navigate("Brew Now")}
        >
          <Text style={styles.buttonText}>Brew</Text>
          <Text style={styles.buttonText2}>Now</Text>
        </Pressable>
      </View>
      <Text style={styles.teaPun}>It's a brew-tiful day!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3e8de",
    height: "100%",
    padding: 30,
  },
  title: {
    fontSize: 48,
    fontFamily: "PixelifySans_400Regular",
    textAlign: "center",
    color: "#9B4C34",
  },
  image: {
    height: 200,
    width: 200,
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 20,
    borderColor: "#254C52",
    borderWidth: 7,
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: "column",
    gap: 25,
  },
  button1: {
    alignSelf: "center",
    backgroundColor: "#4C2744",
    borderRadius: 10,
    width: 246,
    height: 120,
  },
  button2: {
    alignSelf: "center",
    backgroundColor: "#254C52",
    borderRadius: 10,
    width: 246,
    height: 120,
  },
  buttonText: {
    color: "#F3E8DE",
    fontSize: 43,
    fontFamily: "PixelifySans_400Regular",
    textAlign: "center",
    marginTop: 8,
  },
  buttonText2: {
    color: "#F3E8DE",
    fontSize: 43,
    fontFamily: "PixelifySans_400Regular",
    textAlign: "center",
  },
  teaPun: {
    fontSize: 32,
    fontFamily: "PixelifySans_400Regular",
    textAlign: "center",
    color: "#9B4C34",
    marginTop: 40,
  },
});
