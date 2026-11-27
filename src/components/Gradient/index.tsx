import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import GlowBlob from '@/components/GlowBlob';
import { BLOBS, styles } from './styles';

type HeaderGradientProps = {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

export default function Gradient({ style, children }: HeaderGradientProps) {
  return (
    <View style={style}>
      {/* Glow animado: atrás do conteúdo, não captura toques */}
      <View pointerEvents="none" style={styles.glow}>
        {BLOBS.map((blob) => (
          <GlowBlob
            key={blob.id}
            {...blob}
            scale={[blob.scale[0], blob.scale[1]]}
            opacity={[blob.opacity[0], blob.opacity[1]]}
          />
        ))}
      </View>

      {children}
    </View>
  );
}