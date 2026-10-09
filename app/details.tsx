
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

const COLORS = {
  background: "#090A0D",
  surface: "#24272C",
  border: "#26282E",
  text: "#F5F5F7",
  muted: "#85878E",
};

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.userRow}>
        <View style={styles.profile}>
          <Text style={styles.profileText}>S</Text>
        </View>

        <View>
          <Text style={styles.username}>sarah</Text>
          <Text style={styles.location}>Calgary, Alberta</Text>
        </View>
      </View>

      <View style={styles.image}>
        <Ionicons
          name="image-outline"
          size={80}
          color={COLORS.muted}
        />
        <Text style={styles.imageText}>Post Details</Text>
      </View>

      <View style={styles.actions}>
        <Ionicons
          name="heart-outline"
          size={28}
          color={COLORS.text}
        />
        <Ionicons
          name="chatbubble-outline"
          size={27}
          color={COLORS.text}
        />
        <Ionicons
          name="paper-plane-outline"
          size={27}
          color={COLORS.text}
        />
      </View>

      <View style={styles.textArea}>
        <Text style={styles.likes}>1,245 likes</Text>

        <Text style={styles.caption}>
          <Text style={styles.username}>sarah </Text>
          Beautiful day in Calgary!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  userRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },

  profile: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: COLORS.surface,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  profileText: {
    color: COLORS.text,
    fontWeight: "bold",
  },

  username: {
    color: COLORS.text,
    fontWeight: "bold",
  },

  location: {
    color: COLORS.muted,
    fontSize: 12,
  },

  image: {
    height: 450,
    backgroundColor: COLORS.surface,
    justifyContent: "center",
    alignItems: "center",
  },

  imageText: {
    color: COLORS.muted,
    marginTop: 10,
  },

  actions: {
    flexDirection: "row",
    gap: 16,
    padding: 15,
  },

  textArea: {
    paddingHorizontal: 15,
  },

  likes: {
    color: COLORS.text,
    fontWeight: "bold",
    marginBottom: 7,
  },

  caption: {
    color: COLORS.text,
  },
});
