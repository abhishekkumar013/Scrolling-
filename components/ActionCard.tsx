import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websitelink: string) {
    Linking.openURL(websitelink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.elevatedCard]}>
          <View style={styles.headingContainer}>
            <Text style={styles.headerText}>
              What's new in javascript 21 - ES12
            </Text>
          </View>
          <Image
            source={{
              uri: 'https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-260nw-1029506242.jpg',
            }}
            style={styles.cardImage}
          />
          <View style={styles.bodyConatiner}>
            <Text style={styles.bodyyText} numberOfLines={3}>
              Just like every year, Javascript brings in new features. This year
              javascript is bringing 4 new features, which are almost in
              production rollout. I won't be wasting much more time and directly
              jump to code with easy to understand examples.'
            </Text>
          </View>
          <View style={styles.footerConatiner}>
            <TouchableOpacity
              onPress={() =>
                openWebsite(
                  'https://www.jackfranklin.co.uk/blog/working-with-react-and-the-web-platform/',
                )
              }>
              <Text style={styles.socialLinks}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                openWebsite('https://github.com/abhishekkumar013')
              }>
              <Text style={styles.socialLinks}>Follow Me</Text>
            </TouchableOpacity>
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
    borderRadius: 8,
    marginVertical: 12,
    marginHorizontal: 16,
    elevation: 10,
  },
  elevatedCard: {
    backgroundColor: '#F8F8F8',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  cardImage: {
    height: 190,
  },
  bodyConatiner: {
    padding: 10,
  },
  bodyyText: {
    color: '#35155D',
  },
  footerConatiner: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  socialLinks: {
    fontSize: 16,
    color: '#fff',
    backgroundColor: '#005B41',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderTopLeftRadius: 6,
    borderBottomRightRadius: 8,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
