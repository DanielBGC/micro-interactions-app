import { View, Text } from "react-native";
import Animated, {  useSharedValue,  useAnimatedStyle,  withTiming,} from "react-native-reanimated";
import { GestureDetector, Gesture } from "react-native-gesture-handler";

import { style } from "./styles";

export function LongPress() {
  const size = useSharedValue(150);

  const animatedStyle = useAnimatedStyle(() => ({
    width: size.value,
    height: size.value,
  }));

  // let increaseInterval: any;

  // function onPressOut() {
  //   clearInterval(increaseInterval);

  //   position.value = withSpring(100);
  // }

  // function onLongPress() {
  //   increaseInterval = setInterval(() => {
  //     position.value += 1;
  //   })
  // }

  const longPressGesture = Gesture.LongPress()
    .onStart(() => {
      size.value = withTiming(300, { duration: 600 });
    })
    .onEnd((event, success) => {
      if (success) {
        console.log(`Duração: ${event.duration} ms.`);
        size.value = withTiming(150, { duration: 200 });
      }
    });

  return (
    <View style={style.container}>
      <GestureDetector gesture={longPressGesture}>
        <Animated.View style={[style.box, animatedStyle]}>
          <Text style={style.title}>LongPress</Text>
        </Animated.View>
      </GestureDetector>
    </View>
  );
}
