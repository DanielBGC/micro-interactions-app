import { View, Text } from "react-native";
import Animated, {  useSharedValue,  useAnimatedStyle } from "react-native-reanimated";
import { GestureDetector, Gesture } from "react-native-gesture-handler";

import { style } from "./styles";

export function Pinch() {

  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }]
  }));

  const pinchGesture = Gesture.Pinch()
    .onUpdate((event) => {
      scale.value = event.scale;
    })

  const doubleTapGesture = Gesture.Tap().numberOfTaps(3).onStart(() => {
    scale.value = 1;
  })

  const composed = Gesture.Simultaneous(pinchGesture, doubleTapGesture) //Here

  return (
    <View style={style.container}>
      <GestureDetector gesture={composed}>
        <Animated.View style={[style.box, animatedStyle]}>
          <Text style={style.title}>Pinch</Text>
        </Animated.View>
      </GestureDetector>
    </View>
  );
}
