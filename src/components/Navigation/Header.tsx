// import React from 'react';
// import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
// import {Icon} from 'react-native-vector-icons/Icon';
// import {NavigationProp, DrawerActions} from '@react-navigation/native';

// interface HeaderProps {
//   navigation: NavigationProp<any>;
// }

// const Header: React.FC<HeaderProps> = ({navigation}) => {
//   return (
//     <View style={styles.header}>
//       <TouchableOpacity
//         onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
//         style={styles.iconButton}>
//         <Icon name="bars" size={24} color="#000" />
//       </TouchableOpacity>
//       <Image
//         source={require('../../assets/images/logo.png')}
//         style={styles.headerImage}
//       />
//       <TouchableOpacity
//         onPress={() => console.log('Notifications Clicked')}
//         style={styles.iconButton}>
//         <Icon name="bell" size={24} color="#000" />
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '100%',
//     paddingVertical: 20,
//   },

//   iconButton: {
//     padding: 10,
//   },

//   headerImage: {
//     width: 50,
//     height: 50,
//     objectFit: 'cover',
//   },
// });

// export default Header;
