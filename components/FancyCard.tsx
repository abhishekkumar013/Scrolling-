import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function FancyCard() {
  function openWebsite(websitelink: string) {
    Linking.openURL(websitelink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <TouchableOpacity
            onPress={() => openWebsite('https://www.hawa-mahal.com/')}>
            <Image
              source={{
                uri: 'https://media.istockphoto.com/id/510978989/photo/hawa-mahal-palace-in-jaipur-rajasthan.jpg?s=612x612&w=0&k=20&c=-2ijZ9kpofMH1jJhaxFF1hJ5oqjdXfOtIu0BlwXwdls=',
              }}
              style={styles.cardImage}
            />
          </TouchableOpacity>

          <View style={styles.cardBody}>
            {/* <Text style={styles.cardTitle}>Hawa Mahal</Text>
            <Text style={styles.cardLebel}>Pink City, Jaipur</Text> */}
            <View style={styles.TitleRow}>
              <Text style={styles.cardTitle}>Hawa Mahal</Text>
              <Text style={styles.cardLebel}>Pink City, Jaipur</Text>
            </View>
            <Text style={styles.cardDescription}>
              Hawa Mahal in Jaipur, India, is a magnificent 1799-built palace
              with 953 lattice windows, exemplifying Rajput architecture and
              providing royal women discreet views of street life.
            </Text>
            <Text style={styles.cardFooter}>12 mins away</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#F8F8F8',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 26,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  TitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardTitle: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLebel: {
    color: '#FF0080',
    fontSize: 14,
    marginBottom: 6,
    alignSelf: 'flex-end',
  },
  cardDescription: {
    color: '#0C134F',
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 12,
    marginTop: 6,
    flexShrink: 1,
  },
  cardFooter: {
    color: '#FF5F00',
    fontWeight: '600',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hovered: {
    cursor: 'pointer',
  },
});
