import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ContactList = () => {
  const contacts = [
    {
      uid: 1,
      name: 'Anirudh Jwata',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/1',
    },
    {
      uid: 2,
      name: 'Ravi Kumar',
      status: 'Leading AI Innovations',
      imageUrl: 'https://avatars.githubusercontent.com/u/2',
    },
    {
      uid: 3,
      name: 'Neha Sharma',
      status: 'Exploring Quantum Computing',
      imageUrl: 'https://avatars.githubusercontent.com/u/3',
    },
    {
      uid: 4,
      name: 'Priya Mehta',
      status: 'Developing AR Experiences',
      imageUrl: 'https://avatars.githubusercontent.com/u/4',
    },
    {
      uid: 5,
      name: 'Rahul Verma',
      status: 'Blockchain Enthusiast',
      imageUrl: 'https://avatars.githubusercontent.com/u/5',
    },
    {
      uid: 6,
      name: 'Sneha Patel',
      status: 'Cybersecurity Expert',
      imageUrl: 'https://avatars.githubusercontent.com/u/6',
    },
    {
      uid: 7,
      name: 'Amit Singh',
      status: 'IoT Developer',
      imageUrl: 'https://avatars.githubusercontent.com/u/7',
    },
    {
      uid: 8,
      name: 'Vikas Reddy',
      status: 'Big Data Analyst',
      imageUrl: 'https://avatars.githubusercontent.com/u/8',
    },
    {
      uid: 9,
      name: 'Sunita Agarwal',
      status: 'Cloud Architect',
      imageUrl: 'https://avatars.githubusercontent.com/u/9',
    },
    {
      uid: 10,
      name: 'Karan Gupta',
      status: 'Mobile App Developer',
      imageUrl: 'https://avatars.githubusercontent.com/u/10',
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(contact => (
          <View key={contact.uid} style={styles.card}>
            <Image
              style={styles.cardImage}
              source={{
                uri: contact.imageUrl,
              }}
            />
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>{contact.name}</Text>
              <Text style={styles.cardStatus}>{contact.status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 4,
    marginTop: 8,
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    backgroundColor: '#F1EAFF',
    borderRadius: 8,
    padding: 4,
  },
  cardBody: {},
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#183D3D',
  },
  cardStatus: {
    color: '#5C5470',
    fontSize: 12,
  },
  cardImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 14,
  },
});
