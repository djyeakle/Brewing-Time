import { Text, Image, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HerbalTimer from "../components/HerbalTimer";

export default function HerbalTimerScreen({ route, navigation }: any) {
  const { strength, teaType, timerAmount, imageSource } = route.params;
  const [running, setRunning] = useState(false);
  const [finished, setFinished] = useState(false);

  const handleTimerFinish = () => {
    setRunning(false);
    setFinished(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        {strength} {teaType}!
      </Text>
      <Image source={imageSource} style={styles.image}></Image>
      <HerbalTimer
        time={timerAmount}
        running={running}
        onFinish={handleTimerFinish}
      />
      {!running && !finished && (
        <Pressable style={styles.button} onPress={() => setRunning(true)}>
          <Text style={styles.buttonText}>Start Timer</Text>
        </Pressable>
      )}
      {finished && (
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText2}>Home</Text>
        </Pressable>
      )}
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
    fontSize: 36,
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
    borderWidth: 7,
    marginBottom: 30,
    borderColor: "#9B4C34",
  },
  button: {
    alignSelf: "center",
    borderRadius: 10,
    width: 246,
    height: 120,
    backgroundColor: "#9B4C34",
  },
  buttonText: {
    color: "#f3e8de",
    fontSize: 43,
    fontFamily: "PixelifySans_400Regular",
    textAlign: "center",
    marginTop: 8,
  },
  buttonText2: {
    color: "#f3e8de",
    fontSize: 43,
    fontFamily: "PixelifySans_400Regular",
    textAlign: "center",
    marginTop: 35,
  },
});
