
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const COLORS = {
  background: "#090A0D",
  surface: "#090A0D",
  border: "#26282E",
  text: "#F5F5F7",
  muted: "#85878E",
  pink: "#E1306C",
  blue: "#3897F0",
};

const stories = [
  { name: "Kim", image: require("../../assets/images/kim.jpg") },
  { name: "Khloé", image: require("../../assets/images/khloe.jpg") },
  { name: "Kylie", image: require("../../assets/images/kylie.jpg") },
  { name: "Kendall", image: require("../../assets/images/kendall.jpg") },
  { name: "Kourtney", image: require("../../assets/images/kourtney.jpg") },
];

export default function HomeScreen() {
  const { width } = useWindowDimensions();

  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Instagram Header */}
        <View style={styles.header}>
          <Text style={styles.logo}>Instagram</Text>

          <View style={styles.headerIcons}>
            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => router.push("/screen3")}
              activeOpacity={0.7}
            >
              <Ionicons
                name="heart-outline"
                size={29}
                color={COLORS.text}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.iconButton}
              onPress={() => router.push("/screen2")}
              activeOpacity={0.7}
            >
              <Ionicons
                name="paper-plane-outline"
                size={29}
                color={COLORS.text}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Stories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.storiesScroll}
          contentContainerStyle={styles.storiesContainer}
        >
          {stories.map((story) => (
            <View key={story.name} style={styles.story}>
              <View style={styles.storyBorder}>
                <Image
                  source={story.image}
                  style={styles.storyImage}
                />
              </View>

              <Text style={styles.storyName}>
                {story.name}
              </Text>
            </View>
          ))}
        </ScrollView>

        {/* Post Header */}
        <View style={styles.postHeader}>
          <Image
            source={require("../../assets/images/kim.jpg")}
            style={styles.profileImage}
          />

          <View style={styles.postUserInfo}>
            <View style={styles.usernameRow}>
              <Text style={styles.username}>
                kimkardashian
              </Text>

              <Ionicons
                name="checkmark-circle"
                size={17}
                color={COLORS.blue}
              />
            </View>

            <Text style={styles.fullName}>
              Kim Kardashian
            </Text>
          </View>

          <TouchableOpacity>
            <Ionicons
              name="ellipsis-horizontal"
              size={25}
              color={COLORS.text}
            />
          </TouchableOpacity>
        </View>

        {/* One Post */}
        <Image
          source={require("../../assets/images/post1.jpg")}
          style={[
            styles.postImage,
            { width, height: width },
          ]}
          resizeMode="cover"
        />

        {/* Post Actions */}
        <View style={styles.postActions}>
          <View style={styles.actionLeft}>
            {/* Like */}
            <TouchableOpacity
              onPress={() => setLiked((previous) => !previous)}
            >
              <Ionicons
                name={liked ? "heart" : "heart-outline"}
                size={29}
                color={liked ? "#FF3040" : COLORS.text}
              />
            </TouchableOpacity>

            {/* Comment */}
            <TouchableOpacity>
              <Ionicons
                name="chatbubble-outline"
                size={28}
                color={COLORS.text}
              />
            </TouchableOpacity>

            {/* Messages */}
            <TouchableOpacity
              onPress={() => router.push("/screen2")}
            >
              <Ionicons
                name="paper-plane-outline"
                size={28}
                color={COLORS.text}
              />
            </TouchableOpacity>
          </View>

          {/* Save */}
          <TouchableOpacity
            onPress={() => setSaved((previous) => !previous)}
          >
            <Ionicons
              name={saved ? "bookmark" : "bookmark-outline"}
              size={29}
              color={COLORS.text}
            />
          </TouchableOpacity>
        </View>

        {/* Post Information */}
        <View style={styles.postInfo}>
          <Text style={styles.likes}>
            {liked ? "1,248,933" : "1,248,932"} likes
          </Text>

          <Text style={styles.caption}>
            <Text style={styles.username}>
              kimkardashian{" "}
            </Text>
            🖤
          </Text>

          <Text style={styles.comments}>
            View all comments
          </Text>

          <Text style={styles.time}>
            2 days ago
          </Text>
        </View>

        {/* Remaining Space */}
        <View style={styles.bottomSpace} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  scroll: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  scrollContent: {
    flexGrow: 1,
    backgroundColor: COLORS.background,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 22,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    backgroundColor: COLORS.background,
  },

  logo: {
    fontSize: 30,
    fontWeight: "bold",
    color: COLORS.text,
  },

  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
  },

  iconButton: {
    padding: 2,
  },

  storiesScroll: {
    flexGrow: 0,
    backgroundColor: COLORS.background,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },

  storiesContainer: {
    paddingHorizontal: 16,
    paddingVertical: 22,
    gap: 20,
  },

  story: {
    width: 76,
    alignItems: "center",
  },

  storyBorder: {
    width: 76,
    height: 76,
    borderRadius: 38,
    borderWidth: 3,
    borderColor: COLORS.pink,
    padding: 3,
    justifyContent: "center",
    alignItems: "center",
  },

  storyImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },

  storyName: {
    color: COLORS.text,
    fontSize: 12,
    textAlign: "center",
    marginTop: 7,
  },

  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: COLORS.background,
  },

  profileImage: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 12,
  },

  postUserInfo: {
    flex: 1,
  },

  usernameRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  username: {
    fontSize: 14,
    fontWeight: "bold",
    color: COLORS.text,
  },

  fullName: {
    fontSize: 12,
    color: COLORS.muted,
    marginTop: 3,
  },

  postImage: {
    backgroundColor: COLORS.surface,
  },

  postActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 14,
    paddingBottom: 4,
    backgroundColor: COLORS.background,
  },

  actionLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },

  postInfo: {
    paddingHorizontal: 15,
    paddingTop: 12,
    gap: 9,
    backgroundColor: COLORS.background,
  },

  likes: {
    fontSize: 14,
    fontWeight: "bold",
    color: COLORS.text,
  },

  caption: {
    fontSize: 14,
    color: COLORS.text,
  },

  comments: {
    fontSize: 13,
    color: COLORS.muted,
  },

  time: {
    fontSize: 11,
    color: COLORS.muted,
    marginTop: 4,
  },

  bottomSpace: {
    flexGrow: 1,
    minHeight: 20,
    backgroundColor: COLORS.background,
  },
});
