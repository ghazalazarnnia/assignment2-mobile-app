import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>Instagram</Text>

        <View style={styles.headerIcons}>
          <Ionicons name="heart-outline" size={28} color="black" />
          <Ionicons name="paper-plane-outline" size={28} color="black" />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Stories */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.stories}
        >
          <Story name="Kim" />
          <Story name="Khloé" />
          <Story name="Kylie" />
          <Story name="Kendall" />
          <Story name="Kris" />
        </ScrollView>

        <View style={styles.divider} />

        {/* POST 1 */}
        <Post
          caption="Beautiful day ✨"
          likes="2,481,932 likes"
          comments="View all 18,432 comments"
          postNumber="Post 1"
        />

        {/* POST 2 */}
        <Post
          caption="New memories 🤍"
          likes="1,927,405 likes"
          comments="View all 12,804 comments"
          postNumber="Post 2"
        />
      </ScrollView>
    </View>
  );
}

/* Story */
function Story({ name }: { name: string }) {
  return (
    <View style={styles.story}>
      <View style={styles.storyBorder}>
        <View style={styles.storyImage}>
          <Text style={styles.storyLetter}>K</Text>
        </View>
      </View>

      <Text style={styles.storyName}>{name}</Text>
    </View>
  );
}

/* Reusable Post */
function Post({
  caption,
  likes,
  comments,
  postNumber,
}: {
  caption: string;
  likes: string;
  comments: string;
  postNumber: string;
}) {
  return (
    <View style={styles.post}>
      {/* Post Header */}
      <View style={styles.postHeader}>
        <View style={styles.profileCircle}>
          <Text style={styles.profileLetter}>K</Text>
        </View>

        <View style={styles.postUser}>
          <View style={styles.usernameRow}>
            <Text style={styles.username}>kimkardashian</Text>

            <Ionicons
              name="checkmark-circle"
              size={16}
              color="#3897f0"
              style={styles.verified}
            />
          </View>

          <Text style={styles.location}>Kim Kardashian</Text>
        </View>

        <Ionicons
          name="ellipsis-horizontal"
          size={24}
          color="black"
        />
      </View>

      {/* Post Image */}
      <Pressable
        style={styles.postImage}
        onPress={() => router.push('/details')}
      >
        <Ionicons
          name="image-outline"
          size={80}
          color="#888"
        />

        <Text style={styles.photoText}>
          Kim Kardashian {postNumber}
        </Text>

        <Text style={styles.tapText}>
          Tap to view details
        </Text>
      </Pressable>

      {/* Buttons */}
      <View style={styles.actions}>
        <View style={styles.leftActions}>
          <Ionicons name="heart-outline" size={29} color="black" />
          <Ionicons name="chatbubble-outline" size={27} color="black" />
          <Ionicons name="paper-plane-outline" size={27} color="black" />
        </View>

        <Ionicons name="bookmark-outline" size={28} color="black" />
      </View>

      {/* Post Text */}
      <View style={styles.postText}>
        <Text style={styles.likes}>{likes}</Text>

        <Text style={styles.caption}>
          <Text style={styles.username}>
            kimkardashian{' '}
          </Text>

          {caption}
        </Text>

        <Text style={styles.comments}>
          {comments}
        </Text>

        <Text style={styles.time}>
          2 HOURS AGO
        </Text>
      </View>

      <View style={styles.postDivider} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    height: 64,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
  },

  logo: {
    fontSize: 28,
    fontWeight: 'bold',
  },

  headerIcons: {
    flexDirection: 'row',
    gap: 20,
  },

  stories: {
    paddingVertical: 15,
    paddingHorizontal: 10,
  },

  story: {
    alignItems: 'center',
    marginHorizontal: 8,
  },

  storyBorder: {
    width: 74,
    height: 74,
    borderRadius: 37,
    borderWidth: 3,
    borderColor: '#e1306c',
    justifyContent: 'center',
    alignItems: 'center',
  },

  storyImage: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#eeeeee',
    justifyContent: 'center',
    alignItems: 'center',
  },

  storyLetter: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#555',
  },

  storyName: {
    marginTop: 6,
    fontSize: 12,
  },

  divider: {
    height: 1,
    backgroundColor: '#eeeeee',
  },

  post: {
    backgroundColor: '#fff',
  },

  postHeader: {
    height: 70,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },

  profileCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#dddddd',
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileLetter: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  postUser: {
    flex: 1,
    marginLeft: 11,
  },

  usernameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  username: {
    fontWeight: 'bold',
    fontSize: 14,
  },

  verified: {
    marginLeft: 4,
  },

  location: {
    fontSize: 12,
    marginTop: 2,
  },

  postImage: {
    width: '100%',
    height: 450,
    backgroundColor: '#eeeeee',
    justifyContent: 'center',
    alignItems: 'center',
  },

  photoText: {
    color: '#777',
    fontSize: 16,
    marginTop: 10,
  },

  tapText: {
    color: '#999',
    fontSize: 12,
    marginTop: 5,
  },

  actions: {
    paddingHorizontal: 14,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  leftActions: {
    flexDirection: 'row',
    gap: 17,
  },

  postText: {
    paddingHorizontal: 14,
    paddingBottom: 20,
  },

  likes: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 7,
  },

  caption: {
    fontSize: 14,
  },

  comments: {
    color: '#777',
    marginTop: 7,
  },

  time: {
    color: '#999',
    fontSize: 10,
    marginTop: 8,
  },

  postDivider: {
    height: 6,
    backgroundColor: '#f5f5f5',
  },
});