import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

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
        <Ionicons name="image-outline" size={80} color="#888" />
        <Text style={styles.imageText}>Post Details</Text>
      </View>

      <View style={styles.actions}>
        <Ionicons name="heart-outline" size={28} />
        <Ionicons name="chatbubble-outline" size={27} />
        <Ionicons name="paper-plane-outline" size={27} />
      </View>

      <View style={styles.textArea}>
        <Text style={styles.likes}>1,245 likes</Text>

        <Text>
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
    backgroundColor: '#fff',
  },

  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },

  profile: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  profileText: {
    fontWeight: 'bold',
  },

  username: {
    fontWeight: 'bold',
  },

  location: {
    fontSize: 12,
  },

  image: {
    height: 450,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageText: {
    color: '#777',
    marginTop: 10,
  },

  actions: {
    flexDirection: 'row',
    gap: 16,
    padding: 15,
  },

  textArea: {
    paddingHorizontal: 15,
  },

  likes: {
    fontWeight: 'bold',
    marginBottom: 7,
  },
});