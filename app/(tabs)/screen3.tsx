import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

const filters = ["All", "People you follow", "Comments", "Follows"] as const;
type ActivityFilter = (typeof filters)[number];

const notifications = [
  {
    name: "tineey.ng, _simi.sharon_ and 107 others",
    action: "liked your comment: ‘Wyd’ if thunder no...",
    time: "6m",
    initial: "T",
    color: "#8b6554",
    thumbnail: "POST",
    thumbnailColor: "#6e4c3d",
    type: "Comments",
    followed: true,
  },
  {
    name: "_o.re_",
    action: "liked ayolowkeychill_'s reel that you reposted.",
    time: "17m",
    initial: "O",
    color: "#526a81",
    thumbnail: "REEL",
    thumbnailColor: "#445767",
    type: "Likes",
    followed: true,
  },
  {
    name: "otedhq",
    action: "liked only1_asa's reel that you reposted.",
    time: "36m",
    initial: "O",
    color: "#525458",
    thumbnail: "REEL",
    thumbnailColor: "#5e5b55",
    type: "Likes",
    followed: false,
  },
  {
    name: "dhinailyy_, teez.us and 130 others",
    action: "liked your comment: @aminathree what if he sees this post?!",
    time: "2h",
    initial: "D",
    color: "#75526d",
    thumbnail: "POST",
    thumbnailColor: "#56445f",
    type: "Comments",
    followed: true,
  },
  {
    name: "wly.ayo",
    action: "just shared a note",
    time: "4h",
    initial: "W",
    color: "#426c5d",
    thumbnail: "",
    thumbnailColor: "#090a0d",
    type: "Follows",
    followed: true,
  },
  {
    name: "oceanies2 and sheluzvhjim",
    action: "liked yabaleftonline's post that you reposted.",
    time: "4h",
    initial: "O",
    color: "#384f75",
    thumbnail: "POST",
    thumbnailColor: "#405c76",
    type: "Likes",
    followed: false,
  },
  {
    name: "mr_stylist0, official.flowkid and others",
    action: "liked ojcjusticeinitiative's reel that you reposted.",
    time: "4h",
    initial: "M",
    color: "#6e5745",
    thumbnail: "REEL",
    thumbnailColor: "#685748",
    type: "Likes",
    followed: true,
  },
  {
    name: "thevcallme.oma and noblesam",
    action: "liked your post",
    time: "5h",
    initial: "T",
    color: "#75757b",
    thumbnail: "POST",
    thumbnailColor: "#555a64",
    type: "Likes",
    followed: true,
  },
];

type ActivityItem = (typeof notifications)[number];

function Avatar({
  initial,
  color,
  size,
}: {
  initial: string;
  color: string;
  size: number;
}) {
  return (
    <View
      style={[
        styles.avatar,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: color,
        },
      ]}
    >
      <Text style={[styles.avatarInitial, { fontSize: size * 0.36 }]}>
        {initial}
      </Text>
    </View>
  );
}

function NotificationRow({ item }: { item: ActivityItem }) {
  return (
    <View style={styles.notification}>
      <Avatar initial={item.initial} color={item.color} size={46} />
      <View style={styles.notificationCopy}>
        <Text style={styles.notificationText}>
          <Text style={styles.bold}>{item.name} </Text>
          {item.action} <Text style={styles.muted}>{item.time}</Text>
        </Text>
        {item.type === "Comments" && (
          <Text style={styles.messageLink}>Message</Text>
        )}
      </View>
      {item.thumbnail ? (
        <View
          style={[styles.thumbnail, { backgroundColor: item.thumbnailColor }]}
        >
          <Text style={styles.thumbnailText}>{item.thumbnail}</Text>
        </View>
      ) : (
        <Pressable style={styles.replyButton} accessibilityRole="button">
          <Text style={styles.replyText}>Reply</Text>
        </Pressable>
      )}
    </View>
  );
}

export default function ActivityScreen() {
  const [activeFilter, setActiveFilter] = useState<ActivityFilter>("All");
  const visibleNotifications = notifications.filter((item) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "People you follow") return item.followed;
    if (activeFilter === "Follows") return item.type === "Follows";
    return item.type === activeFilter;
  });

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.topBar}>
        <Text style={styles.title}>tgm.rlk</Text>
        <View style={styles.titleDot} />
      </View>
      <FlatList
        data={visibleNotifications}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        renderItem={({ item }) => <NotificationRow item={item} />}
        ListHeaderComponent={
          <View>
            <FlatList
              horizontal
              data={filters}
              keyExtractor={(item) => item}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.filters}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() => setActiveFilter(item)}
                  style={[
                    styles.filterChip,
                    activeFilter === item && styles.activeFilterChip,
                  ]}
                  accessibilityRole="button"
                  accessibilityState={{ selected: activeFilter === item }}
                >
                  <Text
                    style={[
                      styles.filterText,
                      activeFilter === item && styles.activeFilterText,
                    ]}
                  >
                    {item}
                  </Text>
                </Pressable>
              )}
            />
            <Pressable style={styles.requestRow} accessibilityRole="button">
              <Avatar initial="F" color="#565d67" size={46} />
              <View style={styles.requestCopy}>
                <Text style={styles.bold}>Follow requests</Text>
                <Text style={styles.secondary}>danielgrace07 + 73 others</Text>
              </View>
              <View style={styles.blueDot} />
              <Ionicons name="chevron-forward" size={18} color="#d1d2d6" />
            </Pressable>
            <Text style={styles.sectionTitle}>Featured</Text>
            <View style={styles.featuredRow}>
              <Avatar initial="T" color="#80665a" size={46} />
              <Text style={styles.featuredText}>
                <Text style={styles.bold}>teeeey.ng_, _simi.sharon_ </Text>
                and 107 others liked your comment: “Wyd” if thunder no...{" "}
                <Text style={styles.muted}>6m</Text>
              </Text>
              <View style={[styles.thumbnail, styles.featuredThumbnail]}>
                <Text style={styles.thumbnailText}>POST</Text>
              </View>
            </View>
            <Text style={[styles.sectionTitle, styles.todayTitle]}>Today</Text>
          </View>
        }
        ListEmptyComponent={
          <Text style={styles.emptyText}>No activity in this filter yet.</Text>
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#090a0d" },
  topBar: {
    height: 58,
    paddingHorizontal: 18,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  title: { color: "#f5f5f7", fontSize: 20, fontWeight: "800" },
  titleDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#ed4956",
  },
  filters: { paddingHorizontal: 12, paddingTop: 4, paddingBottom: 14, gap: 7 },
  filterChip: {
    minHeight: 30,
    paddingHorizontal: 14,
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: "#23252b",
  },
  activeFilterChip: { backgroundColor: "#f4f4f5" },
  filterText: { color: "#e4e5e8", fontSize: 11, fontWeight: "700" },
  activeFilterText: { color: "#111216" },
  requestRow: {
    minHeight: 72,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  avatar: { alignItems: "center", justifyContent: "center" },
  avatarInitial: { color: "#f6f6f7", fontWeight: "700" },
  requestCopy: { flex: 1 },
  bold: { color: "#f4f4f6", fontWeight: "700" },
  secondary: { marginTop: 3, color: "#a0a2aa", fontSize: 12 },
  blueDot: { width: 7, height: 7, borderRadius: 4, backgroundColor: "#6578ff" },
  sectionTitle: {
    marginHorizontal: 14,
    marginTop: 8,
    marginBottom: 8,
    color: "#f4f4f6",
    fontSize: 15,
    fontWeight: "700",
  },
  featuredRow: {
    minHeight: 68,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  featuredText: { flex: 1, color: "#e4e5e8", fontSize: 12, lineHeight: 16 },
  thumbnail: {
    width: 40,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  featuredThumbnail: { backgroundColor: "#6e4c3d" },
  thumbnailText: { color: "#e7e7e9", fontSize: 8, fontWeight: "700" },
  todayTitle: { marginTop: 10, marginBottom: 4 },
  notification: {
    minHeight: 73,
    paddingHorizontal: 14,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  notificationCopy: { flex: 1, minWidth: 0 },
  notificationText: { color: "#e4e5e8", fontSize: 12, lineHeight: 16 },
  muted: { color: "#999ba3" },
  messageLink: { marginTop: 5, color: "#9b9da5", fontSize: 11 },
  replyButton: {
    minWidth: 60,
    minHeight: 34,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: "#292b31",
  },
  replyText: { color: "#f3f3f5", fontSize: 12, fontWeight: "700" },
  emptyText: { padding: 20, color: "#9b9da5", fontSize: 13 },
  listContent: { paddingBottom: 16 },
});
