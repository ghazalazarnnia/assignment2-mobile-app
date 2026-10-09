
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const COLORS = {
  background: "#090A0D",
  surface: "#24282E",
  divider: "#26282E",
  text: "#F5F5F7",
  muted: "#A6ADB8",
  inactive: "#9CA3AF",
  blue: "#7DA2FF",
};

type SettingRowProps = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  value?: string;
};

function SettingRow({ icon, title, value }: SettingRowProps) {
  return (
    <View style={styles.row}>
      <Ionicons
        name={icon}
        size={28}
        color={COLORS.text}
      />

      <Text style={styles.rowText}>{title}</Text>

      <View style={styles.rowRight}>
        {value && (
          <Text style={styles.rowValue}>{value}</Text>
        )}

        <Ionicons
          name="chevron-forward"
          size={24}
          color={COLORS.inactive}
        />
      </View>
    </View>
  );
}

export default function SettingsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={styles.header}>
          <Pressable
            onPress={() => router.back()}
            hitSlop={15}
          >
            <Ionicons
              name="chevron-back"
              size={32}
              color={COLORS.text}
            />
          </Pressable>

          <Text style={styles.headerTitle}>
            Settings and activity
          </Text>

          <View style={{ width: 32 }} />
        </View>

        {/* Search */}
        <View style={styles.searchContainer}>
          <Ionicons
            name="search"
            size={25}
            color={COLORS.inactive}
          />

          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor={COLORS.inactive}
          />
        </View>

        {/* Your Account */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>
              Your account
            </Text>

            <Text style={styles.metaText}>
              ∞ Meta
            </Text>
          </View>

          <View style={styles.accountRow}>
            <Ionicons
              name="person-circle-outline"
              size={36}
              color={COLORS.text}
            />

            <View style={styles.accountText}>
              <Text style={styles.accountTitle}>
                Accounts Center
              </Text>

              <Text style={styles.accountSubtitle}>
                Password, security, personal details, ad preferences
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={25}
              color={COLORS.inactive}
            />
          </View>

          <Text style={styles.description}>
            Manage your connected experiences and account settings
            across Meta technologies.{" "}
            <Text style={styles.learnMore}>
              Learn more
            </Text>
          </Text>
        </View>

        <View style={styles.divider} />

        {/* How you use Instagram */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            How you use Instagram
          </Text>

          <SettingRow
            icon="bookmark-outline"
            title="Saved"
          />

          <SettingRow
            icon="time-outline"
            title="Archive"
          />

          <SettingRow
            icon="pulse-outline"
            title="Your activity"
          />

          <SettingRow
            icon="notifications-outline"
            title="Notifications"
          />

          <SettingRow
            icon="time-outline"
            title="Time management"
          />

          <SettingRow
            icon="tablet-portrait-outline"
            title="Instagram for iPad"
          />
        </View>

        <View style={styles.divider} />

        {/* Who can see your content */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Who can see your content
          </Text>

          <SettingRow
            icon="lock-closed-outline"
            title="Account privacy"
            value="Public"
          />

          <SettingRow
            icon="star-outline"
            title="Close Friends"
            value="0"
          />

          <SettingRow
            icon="grid-outline"
            title="Crossposting"
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 18,
  },

  headerTitle: {
    color: COLORS.text,
    fontSize: 22,
    fontWeight: "700",
  },

  searchContainer: {
    marginHorizontal: 16,
    marginBottom: 25,
    height: 50,
    borderRadius: 14,
    backgroundColor: COLORS.surface,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
  },

  searchInput: {
    flex: 1,
    color: COLORS.text,
    fontSize: 20,
    marginLeft: 10,
  },

  section: {
    paddingHorizontal: 18,
    paddingVertical: 18,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  sectionTitle: {
    color: COLORS.muted,
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 18,
  },

  metaText: {
    color: COLORS.text,
    fontSize: 20,
  },

  accountRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  accountText: {
    flex: 1,
    marginLeft: 14,
  },

  accountTitle: {
    color: COLORS.text,
    fontSize: 21,
  },

  accountSubtitle: {
    color: COLORS.inactive,
    fontSize: 16,
    lineHeight: 22,
    marginTop: 2,
  },

  description: {
    color: COLORS.inactive,
    fontSize: 15,
    lineHeight: 21,
    marginTop: 24,
  },

  learnMore: {
    color: COLORS.blue,
  },

  divider: {
    height: 10,
    backgroundColor: COLORS.divider,
  },

  row: {
    minHeight: 68,
    flexDirection: "row",
    alignItems: "center",
  },

  rowText: {
    flex: 1,
    color: COLORS.text,
    fontSize: 19,
    marginLeft: 18,
  },

  rowRight: {
    flexDirection: "row",
    alignItems: "center",
  },

  rowValue: {
    color: COLORS.muted,
    fontSize: 17,
    marginRight: 8,
  },
});
