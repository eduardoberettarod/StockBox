import { StyleSheet } from "react-native";
import { colors } from "@/theme/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    padding: 18,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 12,
    gap: 8,
    shadowColor: colors.white,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    elevation: 4,
  },
  text: {
    fontSize: 14,
    fontWeight: 700,
  }
});