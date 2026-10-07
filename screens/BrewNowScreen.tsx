import { Text, View, Pressable, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BrewNowScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Brew Now!</Text>
      <Image
        style={styles.image}
        source={require("../assets/teaBags.png")}
      ></Image>
      <Text style={styles.subtitle}>What kind of tea are you making?</Text>
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() => navigation.navigate("Black Tea")}
          style={styles.button1}
        >
          <Text style={styles.buttonText}>Black</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Green Tea")}
          style={styles.button2}
        >
          <Text style={styles.buttonText}>Green</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Herbal Tea")}
          style={styles.button3}
        >
          <Text style={styles.buttonText}>Herbal</Text>
        </Pressable>
      </View>
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
  subtitle: {
    fontSize: 30,
    fontFamily: "PixelifySans_400Regular",
    textAlign: "center",
    color: "#9B4C34",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 15,
    justifyContent: "center",
    marginTop: 70,
  },
  button1: {
    alignSelf: "center",
    backgroundColor: "#4C2744",
    borderRadius: 10,
    width: 120,
    height: 60,
  },
  button2: {
    alignSelf: "center",
    backgroundColor: "#254C52",
    borderRadius: 10,
    width: 120,
    height: 60,
  },
  button3: {
    alignSelf: "center",
    backgroundColor: "#C47955",
    borderRadius: 10,
    width: 120,
    height: 60,
  },
  buttonText: {
    color: "#F3E8DE",
    fontSize: 32,
    fontFamily: "PixelifySans_400Regular",
    textAlign: "center",
    marginTop: 8,
  },
});
