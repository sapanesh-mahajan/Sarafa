import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

const PreviousOrder = ({navigation}) => {
  const data = [
    {
      id: 1,
      title: 'RG/833/234',
      order: 'Order Confirmed',
      status: 'Processing',
      done: 'Completed',
      image: 'https://m.media-amazon.com/images/I/71tg+iUHJ9L._AC_UY1100_.jpg',
    },
    {
      id: 2,
      title: 'Sit amet, consectetuer',
      order: '2018-08-12 12:00 pm',
      image: 'https://bootdey.com/image/400x200/7B68EE/000000',
    },
    {
      id: 3,
      title: 'Dipiscing elit. Aenean ',
      order: '2017-08-05 12:21 pm',
      image: 'https://bootdey.com/image/400x200/000080/000000',
    },
    {
      id: 4,
      title: 'Commodo ligula eget dolor.',
      order: '2015-08-12 12:00 pm',
      image: 'https://bootdey.com/image/400x200/48D1CC/000000',
    },
    {
      id: 5,
      title: 'Aenean massa. Cum sociis',
      order: '2013-06-12 12:11 pm',
      image: 'https://bootdey.com/image/400x200/9370DB/000000',
    },
  ];

  const [posts, setPosts] = useState(data);

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header_container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/3114/3114883.png',
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.headerText}>Previous Orders</Text>
      </View>
      <FlatList
        style={styles.list}
        data={posts}
        keyExtractor={item => {
          return item.id;
        }}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
        renderItem={post => {
          const item = post.item;
          return (
            <View style={styles.card}>
              <Image style={styles.cardImage} source={{uri: item.image}} />
              <View style={styles.cardHeader}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.orderContainer}>
                  <Text style={styles.order}>{item.order}</Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default PreviousOrder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 20,
  },
  list: {
    paddingHorizontal: 17,
    backgroundColor: '#E6E6E6',
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor: 'white',
    flexDirection: 'row',
    // alignContent: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
  },
  cardHeader: {
    paddingVertical: 7,
    paddingHorizontal: 16,
  },
  cardImage: {
    // flex: 1,
    height: 100,
    width: 100,
    // width: null,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
  },
  /******** card components **************/
  title: {
    fontSize: 18,
    flex: 1,
    fontWeight: 'bold',
    color: '#000',
  },
  order: {
    fontSize: 13,
    marginTop: 5,
    fontWeight: 'bold',
    color: '#000',
    // color: '#808080',
  },
  //   iconData: {
  //     width: 15,
  //     height: 15,
  //     marginTop: 5,
  //     marginRight: 5,
  //   },
  orderContainer: {
    flexDirection: 'row',
    marginBottom: 40,
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  // header
  header_container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 10,
  },
  headerText: {
    fontSize: 24,
    color: '#000000',
    fontWeight: 'bold',
    // marginBottom: 5,
  },
});
