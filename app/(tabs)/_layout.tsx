
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        sceneStyle: {
          backgroundColor: "#090A0D",
        },
        tabBarActiveTintColor: "#F5F5F7",
        tabBarInactiveTintColor: "#85878E",
        tabBarStyle: {
          backgroundColor: "#090A0D",
          borderTopColor: "#26282E",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="home-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="screen2"
        options={{
          title: "Messages",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="paper-plane"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="screen3"
        options={{
          title: "Activity",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="heart-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="screen4"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="person-outline"
              size={size}
              color={color}
            />
          ),
          tabBarStyle: {
            display: "none",
          },
        }}
      />
    </Tabs>
  );
}
