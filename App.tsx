
import { ScrollView, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Fling } from './src/components/Fling';
import { LongPress } from './src/components/LongPress';
import { Pan } from './src/components/Pan';
import { Pinch } from './src/components/Pinch';
import { Rotation } from './src/components/Rotation';
import { Touches } from './src/components/Touches';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={style.scrollView}>
        <Touches/>

        <LongPress/>

        <Fling/>

        <Pan/>

        <Rotation/>

        <Pinch/>
      </ScrollView>
    </GestureHandlerRootView>
  );
}

const style = StyleSheet.create({
  scrollView: {
    marginVertical: 10
  },
});
