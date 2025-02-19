import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Linking,
  Switch,
  ScrollView
} from 'react-native';

export default function App() {
  
  const [isDark, setIsDark] = useState(false);
  const toggleSwitch = () => setIsDark((prev) => !prev);

  const theme = {
    background: isDark ? '#121212' : '#f3f4f6',
    text: isDark ? '#FFFFFF' : '#121212',
    card: isDark ? '#1E1E1E' : '#F8F8F8',
    accent: isDark ? '#BB86FC' : '#6200EE',
  };

  const DATA = [
    { id: '1', title: "Otaku's Soul" },
    { id: '2', title: "Clockwork and Its Broken Time" },
    { id: '3', title: 'Todo App' },
    { id: '4', title: 'Library Systems' },
    { id: '5', title: 'Hotel Systems' },
    { id: '6', title: 'Sunyatta' },
    { id: '7', title: 'Chaos Fruit Catcher' },
    { id: '8', title: 'Flap in Bird' },
  ];

  type ItemProps = { title: string };

  const Item = ({ title }: ItemProps) => (
    <View style={[styles.item, { backgroundColor: theme.card }]}>
      <Text style={[styles.itemTitle, { color: theme.accent }]}>{title}</Text>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        <View style={styles.profileContainer}>
          <Image 
            source={require('./assets/Miguel_Profile.png')}
            style={styles.image}
          />
          <Text style={[styles.title, { color: theme.text }]}>Miguel Q. Malisa</Text>
          <Text style={[styles.subtitle, { color: theme.text }]}>
            Computer Science Student & Developer
          </Text>
          <Text style={[styles.text, { color: theme.text }]}>
            A Computer Science student that has experience coding with C++, C#, JavaScript, 
            Python, and PHP. Several games were made within Construct and Unity. Has a penchant 
            for writing with one of their biggest works being "Otaku's Soul" with a long list of 
            480 Chapters, currently on hiatus. Strives to have tasks done on time, works well 
            with others, but never forgets the gacha games that let him live.
          </Text>

          {/* Clickable Links */}
          <Text style={[styles.linkTitle, { color: theme.accent }]}>GitHub:</Text>
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com/Giiiiiiin')}>
            <Text style={[styles.link, { color: theme.accent }]}>https://github.com/Giiiiiiin</Text>
          </TouchableOpacity>

          <Text style={[styles.linkTitle, { color: theme.accent }]}>Pixiv:</Text>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.pixiv.net/en/users/68216857')}>
            <Text style={[styles.link, { color: theme.accent }]}>
              https://www.pixiv.net/en/users/68216857
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={[styles.title, { color: theme.text }]}>My Projects</Text>
        <View style={styles.listContainer}>
          <FlatList
            data={DATA}
            renderItem={({ item }) => <Item title={item.title} />}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.listContent}
          />
        </View>
      </ScrollView>

      {/* Theme Toggle */}
      <View style={styles.toggleContainer}>
        <Text style={{ color: theme.text }}>Light </Text>
        <Switch
          value={isDark}
          onValueChange={toggleSwitch}
          trackColor={{ false: '#81b0ff', true: '#767577' }}
          thumbColor={isDark ? '#f4f3f4' : '#f5dd4b'}
        />
        <Text style={{ color: theme.text }}> Dark</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 40,
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  listContainer: {
    width: '100%',
    alignItems: 'center',
  },
  listContent: {
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    paddingTop: 50,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 5,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 8,
    maxWidth: 400,
  },
  linkTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  link: {
    fontSize: 16,
    fontStyle: 'italic',
    marginTop: 5,
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 65,
    marginBottom: 15,
    borderWidth: 3,
  },
  item: {
    padding: 18,
    marginVertical: 8,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    width: 350,
    alignItems: 'center',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
});

