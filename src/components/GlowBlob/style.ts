import { StyleSheet } from 'react-native';

// Perfil de opacidade do brilho: do centro (inner) para a borda (outer).
// `tone` diz qual das duas cores a parada usa.
export const BLOB_STOPS = [
  { offset: 0,    opacity: 0.65,  tone: 'inner' },
  { offset: 0.15, opacity: 0.5,   tone: 'inner' },
  { offset: 0.3,  opacity: 0.34,  tone: 'inner' },
  { offset: 0.5,  opacity: 0.17,  tone: 'outer' },
  { offset: 0.7,  opacity: 0.06,  tone: 'outer' },
  { offset: 0.88, opacity: 0.015, tone: 'outer' },
  { offset: 1,    opacity: 0,     tone: 'outer' },
] as const;

export const styles = StyleSheet.create({
  blob: {
    position: 'absolute',
  },
});