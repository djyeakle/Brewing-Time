import {
  Text,
  View,
  Pressable,
  FlatList,
  Image,
  Alert,
  StyleSheet,
} from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MyTeapotScreen({ navigation }: any) {
  interface Teas {
    id: string;
    name: string;
    type: string;
  }

  const [teas, setTeas] = useState<Teas[]>([]);
  const [teaName, setTeaName] = useState("");
  const [teaType, setTeaType] = useState("");

  const addTea = (teaName: string, teaType: string) => {
    if (!teaName.trim() || !teaType.trim()) {
      Alert.alert(
        "Validation Error",
        "Please enter both a tea name and a tea type."
      );
      return;
    }

    const newTea = {
      id: Date.now().toString(),
      name: teaName,
      type: teaType,
    };

    setTeas([...teas, newTea]);
    setTeaName("");
    setTeaType("");
  };

  const deleteTea = (id: string) => {
    setTeas(teas.filter((tea) => tea.id !== id));
  };

  const saveTeas = async (teas: Teas[]) => {
    try {
      await AsyncStorage.setItem("teas", JSON.stringify(teas));
    } catch (error) {
      console.log("Error saving teas:", error);
    }
  };

  const loadTeas = async () => {
    try {
      const savedTeas = await AsyncStorage.getItem("teas");

      if (savedTeas !== null) {
        setTeas(JSON.parse(savedTeas));
      }
    } catch (error) {
      console.log("Error loading teas:", error);
    }
  };

  useEffect(() => {
    loadTeas();
  }, []);

  useEffect(() => {
    saveTeas(teas);
  }, [teas]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>My Teapot</Text>
      <View>
        <Pressable>
          <Text>Add to brew</Text>
        </Pressable>
        <Pressable>
          <Text>Remove from brew</Text>
        </Pressable>
      </View>
      <View>
        <FlatList
          data={teas}
          ListEmptyComponent={<Text>Start building your tea collection!</Text>}
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
});
