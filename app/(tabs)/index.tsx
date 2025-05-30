import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import MinutesSlider from '@/components/MinutesSlider';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { useState } from 'react';

export default function HomeScreen() {
  const [minutes, setMinutes] = useState(1);

  const handledDurationChange = (value: number) => {
    setMinutes(value);
    console.log(`Pomodoro duration changed to ${value} minutes`);
  };
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Pomodoro Timer</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <MinutesSlider
          min={1}
          max={60}
          step={1}
          value={minutes}
          onValueChange={handledDurationChange}
          label="Pomodoro Duration"
          style={{ width: '80%', cursor: 'pointer' }}
        />
        <ThemedText type="defaultSemiBold">{`${minutes} minutes`}</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
