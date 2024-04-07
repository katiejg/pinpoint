import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Image, TextInput } from 'react-native';

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
        <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"/>

      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="white" />
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  searchBar: {
    marginTop: 30, 
    padding: 2, 
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
