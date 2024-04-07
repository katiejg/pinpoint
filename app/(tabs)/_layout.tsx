import React from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import { useFonts } from 'expo-font';
import { Link, Tabs } from 'expo-router';
import { Text, Pressable, Image, StyleSheet } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Entypo>['name'];
  color: string;
}) {
  return <Entypo size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
    Lexend: require('../../assets/fonts/Lexend-Regular.ttf'),
  });
  
  const colorScheme = useColorScheme();
  
  const styles = StyleSheet.create({
    hSpace: {
      marginHorizontal: 20,
    },
    pfp: {
      borderRadius: 100,
      borderWidth: 2,
      borderColor: Colors[colorScheme ?? 'light'].tint,
      height: 50,
      width: 50,
    },
  });
  
  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      // Disable the static render of the header on web
      // to prevent a hydration error in React Navigation v6.
      headerShown: useClientOnlyValue(false, true),
    }}>
    <Tabs.Screen
    name="index"
    options={{
      title: 'Home',
      headerShown: false,
      tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
    }}
    />
    <Tabs.Screen
    name="posters"
    options={{
      title: 'Post',
      tabBarIcon: ({ color }) => <TabBarIcon name="circle-with-plus" color={color} />,
    }}
    />
    <Tabs.Screen
    name="likes"
    options={{
      title: 'Likes',
      tabBarIcon: ({ color }) => <TabBarIcon name="heart" color={color} />,
    }}
    />
    </Tabs>
  );
}


