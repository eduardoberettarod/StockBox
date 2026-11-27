import { StyleSheet } from 'react-native';
import { colors } from '@/theme/colors';

const primaryColor = colors.orange[900];
const secondaryColor = colors.orange[800];
const tertiaryColor = colors.orange[700];
const highlightColor = colors.orange[600];
const quaternaryColor = colors.brown[900];

// Três "ondas" de luz em camadas, cada uma com ritmo próprio.
// Ao se sobrepor e pulsar em tempos diferentes, as cores vão se misturando.
export const BLOBS = [
  {
    id: 'glowA',
    size: 720,
    inner: secondaryColor,
    outer: primaryColor,
    position: { top: -330, left: -300 },
    duration: 16000,
    delay: 0,
    driftX: 70,
    driftY: 40,
    scale: [0.97, 1.1],
    opacity: [0.65, 0.9],
  },
  {
    id: 'glowB',
    size: 600,
    inner: highlightColor,
    outer: secondaryColor,
    position: { top: -260, right: -280 },
    duration: 21000,
    delay: 3000,
    driftX: 60,
    driftY: 50,
    scale: [0.9, 1.12],
    opacity: [0.4, 0.65],
  },
  {
    id: 'glowC',
    size: 460,
    inner: quaternaryColor,
    outer: tertiaryColor,
    position: { top: -120, left: 40 },
    duration: 26000,
    delay: 6000,
    driftX: 90,
    driftY: 30,
    scale: [0.9, 1.08],
    opacity: [0.05, 0.2],
  },
] as const;

export const styles = StyleSheet.create({
  glow: {
    ...StyleSheet.absoluteFillObject,
  },
});