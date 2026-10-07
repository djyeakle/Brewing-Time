import { Text, View, Image, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HerbalTeaScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Herbal Tea!</Text>
      <Image
        style={styles.image}
        source={require("../assets/herbalteabag.png")}
      ></Image>
      <Text style={styles.subtitle}>
        How strong do you like your herbal tea?
      </Text>
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() =>
            navigation.navigate("Herbal Timer", {
              strength: "Regular",
              teaType: "Herbal Tea",
              timerAmount: 300,
              imageSource: require("../assets/regHerbalTeaCup.png"),
            })
          }
          style={styles.button1}
        >
          <Text style={styles.buttonText}>Regular</Text>
        </Pressable>
        <Pressable
          onPress={() =>
            navigation.navigate("Herbal Timer", {
              strength: "Medium",
              teaType: "Herbal Tea",
              timerAmount: 600,
              imageSource: require("../assets/medHerbalTeaCup.png"),
            })
          }
          style={styles.button2}
        >
          <Text style={styles.buttonText2}>Medium</Text>
        </Pressable>
        <Pressable
          onPress={() =>
            navigation.navigate("Herbal Timer", {
              strength: "Strong",
              teaType: "Herbal Tea",
              timerAmount: 900,
              imageSource: require("../assets/strongHerbalTeaCup.png"),
            })
          }
          style={styles.button3}
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
    color: "#9B4C34",
  },
  image: {
    height: 200,
    width: 200,
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 20,
    borderColor: "#9B4C34",
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
    gap: 10,
    justifyContent: "center",
    marginTop: 70,
  },
  button1: {
    alignSelf: "center",
    backgroundColor: "#EFCABB",
    borderRadius: 10,
    width: 130,
    height: 60,
  },
  button2: {
    alignSelf: "center",
    backgroundColor: "#C47955",
    borderRadius: 10,
    width: 130,
    height: 60,
  },
  button3: {
    alignSelf: "center",
    backgroundColor: "#9B4C34",
    borderRadius: 10,
    width: 130,
    height: 60,
  },
  buttonText: {
    color: "#9B4C34",
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
