import { View, Text, Dimensions } from "react-native";
import Animated, {  useSharedValue,  useAnimatedStyle, withTiming } from "react-native-reanimated";
import { GestureDetector, Gesture, Directions } from "react-native-gesture-handler";

import { style } from "./styles";

const START = 10;
const LIMIT = Dimensions.get('window').width - (style.box.height + START);

export function Fling() {

  const position = useSharedValue(START);

  const leftFlingGesture = Gesture.Fling().direction(Directions.LEFT)
    .onStart(() => {
      position.value = withTiming(START, { duration: 200 })
    })


  const rightFlingGesture = Gesture.Fling().direction(Directions.RIGHT)
    .onStart(() => {
      position.value = withTiming(LIMIT, { duration: 200 })
    })
    
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: position.value }]
  }));

  return (
    <View style={style.container}>
      <GestureDetector gesture={Gesture.Exclusive(rightFlingGesture, leftFlingGesture)}>
        <Animated.View style={[style.box, animatedStyle]}>
          <Text style={style.title}>Fling</Text>
        </Animated.View>
      </GestureDetector>
    </View>
  );
}
