import { Text, View, Image, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BlackTeaScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Black Tea!</Text>
      <Image
        style={styles.image}
        source={require("../assets/blackteabag.png")}
      ></Image>
      <Text style={styles.subtitle}>
        How strong do you like your black tea?
      </Text>
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() =>
            navigation.navigate("Black Timer", {
              strength: "Regular",
              teaType: "Black Tea",
              timerAmount: 180,
              imageSource: require("../assets/regBlackTeaCup.png"),
            })
          }
          style={styles.button1}
        >
          <Text style={styles.buttonText}>Regular</Text>
        </Pressable>
        <Pressable
          onPress={() =>
            navigation.navigate("Black Timer", {
              strength: "Strong",
              teaType: "Black Tea",
              timerAmount: 300,
              imageSource: require("../assets/strongBlackTeaCup.png"),
            })
          }
          style={styles.button2}
        >
          <Text style={styles.buttonText2}>Strong</Text>
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
    color: "#4C2744",
  },
  image: {
    height: 200,
    width: 200,
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 20,
    borderColor: "#4C2744",
    borderWidth: 7,
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 30,
    fontFamily: "PixelifySans_400Regular",
    textAlign: "center",
    color: "#4C2744",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 60,
    justifyContent: "center",
    marginTop: 70,
  },
  button1: {
    alignSelf: "center",
    backgroundColor: "#C0A2B9",
    borderRadius: 10,
    width: 130,
    height: 60,
  },
  button2: {
    alignSelf: "center",
    backgroundColor: "#4C2744",
    borderRadius: 10,
    width: 130,
    height: 60,
  },
  buttonText: {
    color: "#4C2744",
    fontSize: 32,
    fontFamily: "PixelifySans_400Regular",
    textAlign: "center",
    marginTop: 8,
  },
  buttonText2: {
    color: "#F3E8DE",
    fontSize: 32,
    fontFamily: "PixelifySans_400Regular",
    textAlign: "center",
    marginTop: 8,
  },
});
