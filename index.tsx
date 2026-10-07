import React from "react";
import { Text } from "react-native";

interface State {
  time: number;
  seconds: number;
  minutes: number;
}

const ThreeTimer = () => {
  const [state, setState] = React.useState<State>({
    time: 180,
    seconds: 0,
    minutes: 1,
  });

  return (
    <Text>{`${state.minutes}: ${
      state.seconds <= 10 ? `0${state.seconds}` : state.seconds
    }`}</Text>
  );
};

export default ThreeTimer;
