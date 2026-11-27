import React, { useEffect } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Animated, {
  cancelAnimation,
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Defs, RadialGradient, Rect, Stop } from 'react-native-svg';
import { BLOB_STOPS, styles } from './style';

type GlowBlobProps = {
  id: string; // id único do gradiente
  size: number;
  inner: string; // cor do centro
  outer: string; // cor da borda
  position: Pick<ViewStyle, 'top' | 'left' | 'right' | 'bottom'>;
  duration?: number; // duração de meio ciclo (ms)
  delay?: number;
  driftX?: number; // quanto desliza no eixo X (px, para cada lado)
  driftY?: number;
  scale?: [number, number];
  opacity?: [number, number]; // pulsa entre esses valores => "troca" de cor
  style?: StyleProp<ViewStyle>;
};

export default function GlowBlob({
  id,
  size,
  inner,
  outer,
  position,
  duration = 8000,
  delay = 0,
  driftX = 50,
  driftY = 30,
  scale = [0.9, 1.15],
  opacity = [0.6, 1],
  style,
}: GlowBlobProps) {
  const x = useSharedValue(0);
  const y = useSharedValue(0);
  const pulse = useSharedValue(0);

  useEffect(() => {
    const easing = Easing.inOut(Easing.sin);
    const loop = (ms: number) =>
      withDelay(delay, withRepeat(withTiming(1, { duration: ms, easing }), -1, true));

    // durações diferentes em cada eixo => movimento orgânico, sem repetir padrão
    x.value = loop(duration);
    y.value = loop(duration * 1.35);
    pulse.value = loop(duration * 1.2);

    return () => {
      cancelAnimation(x);
      cancelAnimation(y);
      cancelAnimation(pulse);
    };
  }, [delay, duration, x, y, pulse]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(pulse.value, [0, 1], opacity),
    transform: [
      { translateX: interpolate(x.value, [0, 1], [-driftX, driftX]) },
      { translateY: interpolate(y.value, [0, 1], [-driftY, driftY]) },
      { scale: interpolate(pulse.value, [0, 1], scale) },
    ],
  }));

  return (
    <Animated.View
      pointerEvents="none"
      renderToHardwareTextureAndroid
      style={[styles.blob, { width: size, height: size }, position, animatedStyle, style]}
    >
      <Svg width={size} height={size}>
        <Defs>
          <RadialGradient id={id} cx="0.5" cy="0.5" r="0.5" gradientUnits="objectBoundingBox">
            {BLOB_STOPS.map((s: (typeof BLOB_STOPS)[number]) => (
              <Stop
                key={s.offset}
                offset={s.offset}
                stopColor={s.tone === 'inner' ? inner : outer}
                stopOpacity={s.opacity}
              />
            ))}
          </RadialGradient>
        </Defs>
        <Rect width="100%" height="100%" fill={`url(#${id})`} />
      </Svg>
    </Animated.View>
  );
}