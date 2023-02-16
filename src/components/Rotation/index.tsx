import { View, Text } from "react-native";
import Animated, {  useSharedValue,  useAnimatedStyle } from "react-native-reanimated";
import { GestureDetector, Gesture } from "react-native-gesture-handler";

import { style } from "./styles";

export function Rotation() {

  const rotation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${(rotation.value / Math.PI) * 180}deg` }]
  }));

  const rotationGesture = Gesture.Rotation().onUpdate((event) => {
    rotation.value = event.rotation;
  })
  .onEnd(() => {
  })

  return (
    <View style={style.container}>
      <GestureDetector gesture={rotationGesture}>
        <Animated.View style={[style.box, animatedStyle]}>
          <Text style={style.title}>Rotation</Text>
        </Animated.View>
      </GestureDetector>
    </View>
  );
}
