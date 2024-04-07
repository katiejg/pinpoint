import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

// let customFonts = () => {
//   'Lexend': require('../../assets/fonts/Lexend-ExtraBold.ttf');
// };

import { StyleSheet, Image, TextInput } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  // const [loaded] = useFonts(customFonts);
  return (
    <View style={[styles.container, styles.main]}>
      <View style={styles.header}>
        <Image source={require('../../assets/profile.jpeg')} style={[styles.image, styles.hSpace, { borderRadius: '100%' }]}/>
        <Text style={[styles.bodyText, styles.hSpace, {fontFamily: 'Lexend'}]}>Current Location{"\n"}Evanston, IL</Text>
        <Ionicons name="notifications" size={24} color="black" style={[styles.hSpace]}/>
      </View>
      
        <TextInput style={styles.input} placeholder="Search by" />
        <Text style={styles.bodyText}>Happening now...{"\n"}in Evanston!</Text>
        <Image source={require('../../assets/poster.png')} style={[styles.card, { borderRadius: '30%' }]}/>

      <View style={styles.footer}>
        <Entypo name="home" size={24} color="black" />
        <Ionicons name="add-circle" size={24} color="black" />
        <Fontisto name="heart" size={24} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex:4,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex:1,
    flexDirection: 'row',
    paddingTop:10,
    backgroundColor: '#FFFFFF',
  },
  hSpace: {
    marginHorizontal: 20,
  },
  bodyText: {
    fontFamily: 'Lexend',
    textAlign: 'center',
    color: 'black',
    marginBottom: 30,
    marginTop: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    borderColor: "gray",
    width: "75%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    color: "black",
  },
  image: {
    height: 60,
    width: 60,
  },
  card: {
    height: "50%",
    width: "80%",
    marginBottom: 30,
  },
  footer: {
    flex:1,
    flexDirection: 'row',
    backgroundColor: 'white',
  },

});
