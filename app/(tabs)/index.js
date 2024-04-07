import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Image } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/profile.jpeg')} style={[styles.image, styles.hSpace]}/>
        <Text style={[styles.bodyText, styles.hSpace]}>Current Location{"\n"}Evanston, IL</Text>
        <Ionicons name="notifications" size={24} color="white" style={[styles.hSpace]}/>
      </View>


      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex:1,
    flexDirection: 'row',
    paddingTop:50,
  },
  hSpace: {
    marginHorizontal: 80,
  },
  bodyText: {
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image: {
    height: 100,
    width: 100,
  },

});
