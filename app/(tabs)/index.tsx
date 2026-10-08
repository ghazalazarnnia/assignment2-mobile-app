
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  useWindowDimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const stories = [
  {
    id: "1",
    name: "Kim",
    image: require("../../assets/images/kim.jpg"),
  },
  {
    id: "2",
    name: "Khloé",
    image: require("../../assets/images/khloe.jpg"),
  },
  {
    id: "3",
    name: "Kylie",
    image: require("../../assets/images/kylie.jpg"),
  },
  {
    id: "4",
    name: "Kendall",
    image: require("../../assets/images/kendall.jpg"),
  },
  {
    id: "5",
    name: "Kourtney",
    image: require("../../assets/images/kourtney.jpg"),
  },
];

export default function HomeScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();

  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.mainScroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={true}
        nestedScrollEnabled={true}
        keyboardShouldPersistTaps="handled"
        bounces={true}
      >
        {/* Instagram Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>Instagram</Text>

          <View style={styles.headerIcons}>
            <TouchableOpacity
              onPress={() => router.push("/(tabs)/screen3")}
            >
              <Ionicons
                name="heart-outline"
                size={29}
                color="#000"
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push("/(tabs)/screen2")}
            >
              <Ionicons
                name="paper-plane-outline"
                size={29}
                color="#000"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Stories */}
        <View style={styles.storiesSection}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.storiesContainer}
          >
            {stories.map((story) => (
              <TouchableOpacity
                key={story.id}
                style={styles.storyItem}
                onPress={() =>
                  Alert.alert(
                    story.name,
                    `${story.name}'s story`
                  )
                }
              >
                <View style={styles.storyRing}>
                  <Image
                    source={story.image}
                    style={styles.storyImage}
                    resizeMode="cover"
                  />
                </View>

                <Text style={styles.storyName}>
                  {story.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* One Post */}
        <View style={styles.postContainer}>
          <View style={styles.postHeader}>
            <Image
              source={require("../../assets/images/kim.jpg")}
              style={styles.profileImage}
            />

            <View style={styles.userInfo}>
              <View style={styles.usernameRow}>
                <Text style={styles.username}>
                  kimkardashian
                </Text>

                <Ionicons
                  name="checkmark-circle"
                  size={19}
                  color="#3897f0"
                />
              </View>

              <Text style={styles.fullName}>
                Kim Kardashian
              </Text>
            </View>

            <TouchableOpacity
              onPress={() =>
                Alert.alert("Post Options", "Options opened")
              }
            >
              <Ionicons
                name="ellipsis-horizontal"
                size={28}
                color="#000"
              />
            </TouchableOpacity>
          </View>

          {/* Post Image */}
          <TouchableOpacity
            activeOpacity={0.95}
            onPress={() => router.push("/details")}
          >
            <Image
              source={require("../../assets/images/post1.jpg")}
              style={{
                width: "100%",
                height: Math.min(width * 1.1, 650),
                backgroundColor: "#f1f1f1",
              }}
              resizeMode="cover"
            />
          </TouchableOpacity>

          {/* Actions */}
          <View style={styles.postActions}>
            <View style={styles.leftActions}>
              <TouchableOpacity
                onPress={() => setLiked(!liked)}
              >
                <Ionicons
                  name={liked ? "heart" : "heart-outline"}
                  size={30}
                  color={liked ? "#ff3040" : "#000"}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  Alert.alert("Comments", "Comments opened")
                }
              >
                <Ionicons
                  name="chatbubble-outline"
                  size={29}
                  color="#000"
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => router.push("/(tabs)/screen2")}
              >
                <Ionicons
                  name="paper-plane-outline"
                  size={29}
                  color="#000"
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => setSaved(!saved)}
            >
              <Ionicons
                name={saved ? "bookmark" : "bookmark-outline"}
                size={29}
                color="#000"
              />
            </TouchableOpacity>
          </View>

          {/* Likes */}
          <Text style={styles.likes}>
            {(125000 + (liked ? 1 : 0)).toLocaleString()} likes
          </Text>

          {/* Caption */}
          <View style={styles.captionContainer}>
            <Text style={styles.caption}>
              <Text style={styles.captionUsername}>
                kimkardashian{" "}
              </Text>
              A beautiful day 🤍
            </Text>
          </View>

          <TouchableOpacity
            onPress={() =>
              Alert.alert("Comments", "View comments")
            }
          >
            <Text style={styles.commentsText}>
              View all comments
            </Text>
          </TouchableOpacity>

          <Text style={styles.postTime}>
            2 HOURS AGO
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 0,
    backgroundColor: "#fff",
  },

  mainScroll: {
    flex: 1,
    minHeight: 0,
  },

  scrollContent: {
    flexGrow: 1,
    paddingBottom: 80,
  },

  header: {
    minHeight: 85,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  logo: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#000",
  },

  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
  },

  storiesSection: {
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingVertical: 20,
  },

  storiesContainer: {
    paddingHorizontal: 15,
    gap: 16,
  },

  storyItem: {
    width: 85,
    alignItems: "center",
  },

  storyRing: {
    width: 83,
    height: 83,
    borderRadius: 42,
    borderWidth: 3,
    borderColor: "#e93075",
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },

  storyImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },

  storyName: {
    marginTop: 7,
    fontSize: 13,
    color: "#111",
    textAlign: "center",
  },

  postContainer: {
    backgroundColor: "#fff",
    paddingBottom: 30,
  },

  postHeader: {
    minHeight: 70,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },

  profileImage: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 12,
  },

  userInfo: {
    flex: 1,
  },

  usernameRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  username: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
  },

  fullName: {
    fontSize: 13,
    color: "#333",
    marginTop: 3,
  },

  postActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 13,
  },

  leftActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
  },

  likes: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
    marginTop: 12,
    marginHorizontal: 15,
  },

  captionContainer: {
    marginTop: 8,
    marginHorizontal: 15,
  },

  caption: {
    fontSize: 14,
    color: "#111",
    lineHeight: 21,
  },

  captionUsername: {
    fontWeight: "bold",
  },

  commentsText: {
    marginTop: 9,
    marginHorizontal: 15,
    color: "#888",
    fontSize: 14,
  },

  postTime: {
    marginTop: 12,
    marginHorizontal: 15,
    fontSize: 11,
    color: "#999",
  },
});
