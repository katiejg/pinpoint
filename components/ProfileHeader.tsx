
import React from 'react';
import { useFonts } from 'expo-font';
import { Link } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, Text, Pressable, Image, TextInput } from 'react-native';

import { View } from './Themed';

import Colors from '@/constants/Colors';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useColorScheme } from './useColorScheme';

const colorScheme = useColorScheme();

export default function ProfileHeader() {
      return (
            <View style={styles.header}>
            <View style={styles.pfpContainer}><Image source={require('../assets/profile.jpeg')} style={styles.pfp}/>
            </View>
            <View>
            <Text>Current Location</Text>
            <Text>Evanston, IL</Text>
            </View>
            <View style={styles.rightContainer}>
            <Link href="/notifs" asChild>
              <Pressable>
                {({ pressed }) => (
                  <MaterialCommunityIcons
                    name="bell"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].tint}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
            </View>
            </View>
            
      );
}

const styles = StyleSheet.create({
      header: {
            marginTop: 30,
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
      },
      pfpContainer: {
            alignSelf: 'flex-start',
      },
      pfp: {
            margin: 10,
            height: 50,
            width: 50,
            borderRadius: 100,
            borderWidth: 2,
            borderColor: Colors[colorScheme ?? 'light'].tint,
      },
      rightContainer: {
            alignSelf: 'flex-end',
      }
});

