import { View, Text } from "react-native";
import Animated, {  useSharedValue,  useAnimatedStyle } from "react-native-reanimated";
import { GestureDetector, Gesture } from "react-native-gesture-handler";

import { style } from "./styles";

export function Pan() {

  const position = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: position.value }]
  }));

  const panGesture = Gesture.Pan()
    .minPointers(1)
    .onUpdate((event) => {
      position.value = event.translationX;
    })

  return (
    <View style={style.container}>
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[style.box, animatedStyle]}>
          <Text style={style.title}>Pan</Text>
        </Animated.View>
      </GestureDetector>
    </View>
  );
}
