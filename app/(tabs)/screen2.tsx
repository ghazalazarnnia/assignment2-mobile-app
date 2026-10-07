import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

const stories = [
  {
    name: "Your note",
    initial: "+",
    color: "#303944",
    note: "Today's vibe...",
  },
  {
    name: "Des?",
    initial: "D",
    color: "#777c85",
    note: "Hide yall houses, I got another car",
  },
  {
    name: "Ace",
    initial: "A",
    color: "#8b7865",
    note: "Omg, I hate cheese with everything",
  },
  { name: "Niger", initial: "N", color: "#b34c36", note: "ghana nah" },
  {
    name: "Maya",
    initial: "M",
    color: "#52728d",
    note: "At the library",
  },
];

const conversations = [
  {
    name: "Shiti",
    preview: "Tomi sent a post by torontoplu... ",
    time: "2h",
    initial: "S",
    color: "#334463",
    unread: true,
  },
  {
    name: "Ted",
    preview: "Seen 1h ago",
    time: "",
    initial: "T",
    color: "#52728d",
    unread: false,
  },
  {
    name: "Tomi",
    preview: "Reacted to your message",
    time: "3h",
    initial: "T",
    color: "#35383e",
    unread: false,
  },
  {
    name: "morewaoluwa",
    preview: "Sent 18h ago",
    time: "",
    initial: "M",
    color: "#813f70",
    unread: false,
  },
  {
    name: "Oma",
    preview: "Sent 19h ago",
    time: "",
    initial: "O",
    color: "#79543b",
    unread: false,
  },
  {
    name: "fola",
    preview: "Sent 20h ago",
    time: "",
    initial: "F",
    color: "#676b73",
    unread: false,
  },
  {
    name: "Destiny",
    preview: "Liked a message",
    time: "22h",
    initial: "D",
    color: "#54644e",
    unread: false,
  },
  {
    name: "Mani",
    preview: "Seen 1d ago",
    time: "",
    initial: "M",
    color: "#4d6176",
    unread: false,
  },
];

type AvatarProps = {
  initial: string;
  color: string;
  size: number;
};

function Avatar({ initial, color, size }: AvatarProps) {
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
      <Text style={[styles.avatarInitial, { fontSize: size * 0.38 }]}>
        {initial}
      </Text>
    </View>
  );
}

function ConversationRow({ item }: { item: (typeof conversations)[number] }) {
  return (
    <Pressable style={styles.conversation} accessibilityRole="button">
      <Avatar initial={item.initial} color={item.color} size={54} />
      {item.unread && <View style={styles.unreadDot} />}
      <View style={styles.conversationCopy}>
        <Text style={styles.name}>{item.name}</Text>
        <Text numberOfLines={1} style={styles.preview}>
          {item.preview}
          {item.time ? ` · ${item.time}` : ""}
        </Text>
      </View>
      <Ionicons name="camera-outline" size={23} color="#a2a5ac" />
    </Pressable>
  );
}

function InboxHeader() {
  return (
    <View>
      <Pressable style={styles.search} accessibilityRole="button">
        <Ionicons name="search-outline" size={18} color="#a6a8ad" />
        <Text style={styles.searchText}>Search or ask Meta AI</Text>
      </Pressable>

      <FlatList
        horizontal
        data={stories}
        keyExtractor={(item) => item.name}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.stories}
        renderItem={({ item, index }) => (
          <View style={styles.story}>
            {index > 0 && (
              <Text numberOfLines={2} style={styles.noteBubble}>
                {item.note}
              </Text>
            )}
            <View
              style={[styles.storyRing, index > 0 && styles.activeStoryRing]}
            >
              <Avatar initial={item.initial} color={item.color} size={58} />
            </View>
            <Text numberOfLines={1} style={styles.storyName}>
              {item.name}
            </Text>
          </View>
        )}
      />

      <View style={styles.sectionHeading}>
        <Text style={styles.sectionTitle}>Messages</Text>
        <Pressable accessibilityRole="button">
          <Text style={styles.requests}>Requests</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default function MessagesScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.topBar}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>tgm.rlk</Text>
          <View style={styles.titleDot} />
          <Ionicons name="chevron-down" size={16} color="#a6a8ad" />
        </View>
        <Pressable accessibilityLabel="New message" accessibilityRole="button">
          <Ionicons name="create-outline" size={25} color="#f5f5f7" />
        </Pressable>
      </View>
      <FlatList
        data={conversations}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <ConversationRow item={item} />}
        ListHeaderComponent={InboxHeader}
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
    justifyContent: "space-between",
  },
  titleRow: { flexDirection: "row", alignItems: "center", gap: 5 },
  title: { color: "#f5f5f7", fontSize: 21, fontWeight: "800" },
  titleDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#ed4956",
  },
  search: {
    height: 40,
    marginHorizontal: 12,
    marginTop: 3,
    marginBottom: 8,
    paddingHorizontal: 12,
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 22,
    backgroundColor: "#222429",
  },
  searchText: { color: "#a6a8ad", fontSize: 14 },
  stories: { paddingHorizontal: 8, paddingTop: 5, paddingBottom: 13, gap: 14 },
  story: { width: 78, alignItems: "center", paddingTop: 21 },
  noteBubble: {
    position: "absolute",
    zIndex: 1,
    top: 0,
    width: 69,
    height: 43,
    overflow: "hidden",
    paddingHorizontal: 6,
    paddingVertical: 5,
    borderRadius: 11,
    backgroundColor: "#303239",
    color: "#f2f2f4",
    fontSize: 9,
    textAlign: "center",
  },
  storyRing: {
    width: 68,
    height: 68,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 34,
    borderWidth: 1,
    borderColor: "#44464d",
  },
  activeStoryRing: { borderWidth: 2, borderColor: "#d84a92" },
  avatar: { alignItems: "center", justifyContent: "center" },
  avatarInitial: { color: "#f6f6f7", fontWeight: "700" },
  storyName: {
    width: 74,
    marginTop: 5,
    color: "#e8e8eb",
    fontSize: 11,
    textAlign: "center",
  },
  sectionHeading: {
    height: 43,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionTitle: { color: "#f5f5f7", fontSize: 16, fontWeight: "700" },
  requests: { color: "#a7a8ae", fontSize: 13, fontWeight: "600" },
  listContent: { paddingBottom: 14 },
  conversation: {
    minHeight: 76,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  unreadDot: {
    position: "absolute",
    left: 12,
    bottom: 13,
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#090a0d",
    backgroundColor: "#3697f5",
  },
  conversationCopy: { flex: 1, minWidth: 0, marginLeft: 12, marginRight: 10 },
  name: { color: "#f5f5f7", fontSize: 14, fontWeight: "600" },
  preview: { marginTop: 3, color: "#9b9da5", fontSize: 12 },
});
