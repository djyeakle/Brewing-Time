import { PixelifySans_400Regular } from "@expo-google-fonts/pixelify-sans";
import { useFonts } from "expo-font";
import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen({ navigation }: any) {
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
      <Text style={styles.title}>Welcome to Brewing Time!</Text>
      <Text style={styles.subtitle}>Login:</Text>
      <View style={styles.loginSection}>
        <View style={styles.inputSection}>
          <Text style={styles.inputLabel}>Username:</Text>
          <TextInput style={styles.input} placeholder=""></TextInput>
        </View>
        <View style={styles.inputSection}>
          <Text style={styles.inputLabel}>Password:</Text>
          <TextInput style={styles.input} placeholder=""></TextInput>
        </View>
      </View>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Go!</Text>
      </Pressable>
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
  subtitle: {
    fontSize: 36,
    fontFamily: "PixelifySans_400Regular",
    textAlign: "center",
    color: "#4C2744",
    marginTop: 40,
  },
  loginSection: {
    alignSelf: "center",
    marginTop: 40,
  },
  inputSection: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  inputLabel: {
    fontSize: 28,
    fontFamily: "PixelifySans_400Regular",
    marginTop: 20,
  },
  input: {
    borderBottomWidth: 2,
    width: "50%",
    marginBottom: 5,
  },
  button: {
    alignSelf: "center",
    backgroundColor: "#254C52",
    borderRadius: 10,
    width: 246,
    height: 120,
    marginTop: 100,
  },
  buttonText: {
    color: "#F3E8DE",
    fontSize: 43,
    fontFamily: "PixelifySans_400Regular",
    textAlign: "center",
    marginTop: "15%",
  },
});
