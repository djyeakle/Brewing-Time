import { Text, View, Image, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function GreenTeaScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Green Tea!</Text>
      <Image
        style={styles.image}
        source={require("../assets/greenteabag.png")}
      ></Image>
      <Text style={styles.subtitle}>
        How strong do you like your green tea?
      </Text>
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() =>
            navigation.navigate("Green Timer", {
              strength: "Regular",
              teaType: "Green Tea",
              timerAmount: 120,
              imageSource: require("../assets/regGreenTeaCup.png"),
            })
          }
          style={styles.button1}
        >
          <Text style={styles.buttonText}>Regular</Text>
        </Pressable>
        <Pressable
          onPress={() =>
            navigation.navigate("Green Timer", {
              strength: "Strong",
              teaType: "Green Tea",
              timerAmount: 180,
              imageSource: require("../assets/strongGreenTeaCup.png"),
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
    color: "#254C52",
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
    color: "#254C52",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 60,
    justifyContent: "center",
    marginTop: 70,
  },
  button1: {
    alignSelf: "center",
    backgroundColor: "#818E6E",
    borderRadius: 10,
    width: 130,
    height: 60,
  },
  button2: {
    alignSelf: "center",
    backgroundColor: "#254C52",
    borderRadius: 10,
    width: 130,
    height: 60,
  },
  buttonText: {
    color: "#254C52",
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
