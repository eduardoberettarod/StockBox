import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import Gradient from "@/components/Gradient";
import { styles } from "./style";

type Props = {
  title: string;
  value: string;
  measure: string;
  icon?: {
    iconName: keyof typeof Feather.glyphMap;
    iconColor: string
  }
  backgroundColor: string,
  borderColor: string,
  useGradient?: boolean,
  borderColorCard: string
};

export default function StatCard({
  title,
  value,
  icon,
  backgroundColor,
  borderColor,
  measure,
  useGradient = false,
  borderColorCard,
}: Props) {
  return (
    <View style={[
      styles.container,
      useGradient && { overflow: "hidden" },
      { borderColor: borderColorCard }
    ]}
    >
      {useGradient && (
        <Gradient style={StyleSheet.absoluteFill} />
      )}
      <View style={[styles.icon, { backgroundColor: backgroundColor, borderColor: borderColor }]}>
        <Feather name={icon?.iconName} size={18} color={icon?.iconColor} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            gap: 6,
            alignItems: 'baseline',
          }}
        >
          <Text style={styles.value} numberOfLines={1} adjustsFontSizeToFit>
            {value}
          </Text>
          <Text style={styles.measure}>{measure}</Text>
        </View>

      </View>
    </View>
  );
}
