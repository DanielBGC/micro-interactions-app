import { View, Pressable, Text } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming, interpolateColor } from "react-native-reanimated";
import { GestureDetector, Gesture } from 'react-native-gesture-handler';

import { style } from "./styles";

export function Touches() {

  const position    = useSharedValue(150);
  const activeColor = useSharedValue(0);

  const colors = ['#8527E5', '#BF5A07', '#CCFFAA'];

  const animatedStyle = useAnimatedStyle(() => ({
    width: position.value,
    height: position.value,
    backgroundColor: interpolateColor(activeColor.value, [0, 1, 2], colors)
  }));

  function onPress() {
    activeColor.value = withTiming(activeColor.value >= colors.length - 1 ? 0 : activeColor.value += 1);
  }

  function onPressOut() {
    position.value = withSpring(150);
  }

  const doubleTapGesture = Gesture.Tap().numberOfTaps(2).onStart(() => {
    position.value = withSpring(300);
  })


  return (
    <View style={style.container}>
      <GestureDetector gesture={doubleTapGesture}>
        <Pressable onPress={onPress} onPressOut={onPressOut}>
          <Animated.View style={[style.box, animatedStyle]}>
            <Text style={style.title}>Touch</Text>
          </Animated.View>
        </Pressable>
      </GestureDetector>
    </View>
  );
}
