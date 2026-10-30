import {
  Text,
  View,
  Pressable,
  FlatList,
  Image,
  Alert,
  StyleSheet,
  TextInput,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";

type Tea = {
  id: string;
  name: string;
  type: string;
  amount: string;
};

const teaTypeData = [
  { label: "Black Tea", value: "1" },
  { label: "Herbal Tea", value: "2" },
  { label: "Green Tea", value: "3" },
];

const STORAGE_KEY = "brewingTime_teas";

export default function MyTeapotScreen({ navigation }: any) {
  const [teas, setTeas] = useState<Tea[]>([]);
  const [teaName, setTeaName] = useState("");
  const [teaType, setTeaType] = useState("");
  const [teaAmount, setTeaAmount] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [value, setValue] = useState(null);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const loadTeas = async () => {
      try {
        const saved = await AsyncStorage.getItem(STORAGE_KEY);
        if (saved !== null) setTeas(JSON.parse(saved));
      } catch (error) {
        Alert.alert("Error", "Unable to load saved teas.");
      } finally {
        setLoaded(true);
      }
    };
    loadTeas();
  }, []);

  useEffect(() => {
    if (!loaded) return;
    const saveTeas = async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(teas));
      } catch (error) {
        Alert.alert("Error", "Unable to save teas.");
      }
    };
    saveTeas();
  }, [teas, loaded]);

  const addTea = () => {
    const name = teaName.trim();
    const type = teaType.trim();
    const amount = teaAmount.trim();
    if (!name || !type || !amount) {
      Alert.alert("Please fill out all information.");
      return;
    }

    const newTea: Tea = {
      id: `${Date.now()}-${Math.random()}`,
      name,
      type,
      amount,
    };

    setTeas((current) => [...current, newTea]);
    setTeaName("");
    setTeaType("");
    setTeaAmount("");
  };

  const deleteTea = (id: string) => {
    setTeas((current) => current.filter((tea) => tea.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Teapot</Text>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.button1}
          onPress={() => setFormVisible((prev) => !prev)}
        >
          <Text style={styles.buttonText}>
            {formVisible ? "Close Form" : "Add to brew"}
          </Text>
        </Pressable>
        <Pressable style={styles.button2}>
          <Text style={styles.buttonText}>Other button?</Text>
        </Pressable>
      </View>
      <View style={formVisible ? styles.visible : styles.hidden}>
        <TextInput
          style={styles.input}
          placeholder="Tea Name"
          value={teaName}
          onChangeText={setTeaName}
        />
        <Dropdown
          data={teaTypeData}
          labelField="label"
          valueField="value"
          placeholder="Select tea type"
          value={value}
          onChange={(item) => {
            setValue(item.value);
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Tea Amount (in bags)"
          value={teaAmount}
          onChangeText={setTeaAmount}
        />
        <Pressable style={styles.button3} onPress={() => addTea()}>
          <Text style={styles.buttonText}>Add</Text>
        </Pressable>
      </View>
      <View style={formVisible ? styles.hidden : styles.flatlist}>
        <FlatList
          data={teas}
          ListEmptyComponent={
            <Text style={styles.emptyList}>
              Start building your tea collection!
            </Text>
          }
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View>
              <Text>{item.name}</Text>
              <Pressable>
                <Text>Brew</Text>
              </Pressable>
              <Pressable>
                <Image></Image>
              </Pressable>
              <Pressable>
                <Image></Image>
              </Pressable>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  hidden: {
    display: "none",
  },
  visible: {
    display: "flex",
    backgroundColor: "#fff",
    marginTop: 10,
    borderRadius: 15,
    padding: 10,
  },
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
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
  buttonText: {
    color: "#F3E8DE",
    fontSize: 24,
    fontFamily: "PixelifySans_400Regular",
    textAlign: "center",
  },
  input: {
    fontFamily: "PixelifySans_400Regular",
    fontSize: 20,
    marginBottom: 20,
  },
  button3: {
    alignSelf: "center",
    backgroundColor: "#C47955",
    borderRadius: 10,
    width: 120,
    height: 60,
  },
  flatlist: {
    alignSelf: "center",
    backgroundColor: "#fff",
    marginTop: "15%",
    width: "90%",
    height: "70%",
    borderRadius: 15,
  },
  emptyList: {
    textAlign: "center",
    color: "#4C2744",
    fontFamily: "PixelifySans_400Regular",
    fontSize: 32,
    marginTop: 15,
  },
});
