import React, { useEffect, useState } from "react";
import { Text, StyleSheet } from "react-native";
import { useAudioPlayer } from "expo-audio";

interface Props {
  time: number;
  running: boolean;
  onFinish: () => void;
}

const HerbalTimer: React.FC<Props> = ({ time, running, onFinish }) => {
  const [remainingTime, setRemainingTime] = useState(time);
  const audioSource = require("../assets/audio/mixkit-happy-bells-notification-937.mp3");
  const player = useAudioPlayer(audioSource);

  useEffect(() => {
    if (!running || remainingTime <= 0) {
      if (remainingTime <= 0) {
        player.play();
        onFinish();
      }
      return;
    }

    const timerId = setTimeout(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [remainingTime, running]);

  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return (
    <Text style={styles.timer}>
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </Text>
  );
};

const styles = StyleSheet.create({
  timer: {
    fontSize: 130,
    fontFamily: "PixelifySans_400Regular",
    textAlign: "center",
    color: "#9B4C34",
  },
});

export default HerbalTimer;
