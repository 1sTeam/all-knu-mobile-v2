import { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';

const useAnimation = (minValue: number, maxValue: number, delay?: number) => {
  const animation = useRef<Animated.Value>(
    new Animated.Value(minValue),
  ).current;
  const [controller, setController] = useState<boolean>(true);
  const startAnimation = () => setController(true);
  const endAnimation = () => setController(false);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: controller ? maxValue : minValue,
      useNativeDriver: true,
      delay,
    }).start();
  }, [controller, animation, minValue, maxValue, delay]);

  return { animation, startAnimation, endAnimation };
};

export default useAnimation;
