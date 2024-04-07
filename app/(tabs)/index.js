import { StyleSheet, Image, TextInput } from 'react-native';
import ProfileHeader from '@/components/ProfileHeader'

import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {

  return (
    <View style={[styles.container, styles.main]}>
      <ProfileHeader></ProfileHeader>
      <View style={styles.header}>
        <Text style={[styles.bodyText, styles.hSpace]}>Current Location{"\n"}Evanston, IL</Text>
      </View>
        <TextInput style={styles.input} placeholder="Search Posters" />
        <Text style={styles.subtitle}>Happening now...{"\n"}in Evanston!</Text>
        <Image source={require('../../assets/poster.png')} style={[styles.card, { borderRadius: '30%' }]}/>
      <View style={styles.footer}>
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
    // alignItems: 'center',
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
  subtitle: {
    marginTop: 10,
    padding: 8,
    marginBottom: 8,
    fontSize: 24,
    textAlign: 'left',
  },
  bodyText: {
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
    alignSelf: 'center',
    borderColor: "gray",
    width: "90%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    color: "black",
  },
  card: {
    alignSelf: 'center',
    height: "60%",
    width: "80%",
    marginBottom: 30,
  },
  footer: {
    flex:1,
    flexDirection: 'row',
    backgroundColor: 'white',
  },

});
