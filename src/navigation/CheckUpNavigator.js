
import * as React from "react";
import {StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import CheckUpListScreen from '../screens/CheckUpListScreen';
import  CheckUpFormScreen from '../screens/CheckUpFormScreen';
import RecommendationScreen from '../screens/RecommendationScreen';
import MapScreen from '../screens/MapScreen';
import HeaderButton from '../components/HeaderButton';
import {HeaderButtons,Item } from 'react-navigation-header-buttons';
import Colors from '../constants/Colors';





const Stack = createStackNavigator();

function CheckUpNavigator() {
  
  return (
    <NavigationContainer >
      <Stack.Navigator
       initialRouteName='CheckUpList'
       screenOptions={{
        
        headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
      
      }}
       >

<Stack.Screen 
       name="CheckUpList"
       component={CheckUpListScreen}
       options={({navigation})=>
        ({
        headerTitle: 'CheckUp List',
        headerRight:(props=>
      <HeaderButtons HeaderButtonComponent={HeaderButton} {...props}>
        <Item
          title="Add Place"
          iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
          onPress={() => {
              navigation.navigate('CheckUpForm');
          }}
        />
      </HeaderButtons>
    )

        })}
        />
        <Stack.Screen 
       name="Recommendation"
       component={RecommendationScreen}
      
        />
        

         <Stack.Screen 
       name="CheckUpForm"
       component={CheckUpFormScreen}
       options={{
          title: 'New CheckUp',
               
        }}
        />
        <Stack.Screen 
        name="Map"
        component={MapScreen}
        options={({navigation})=>
        ({

        headerRight: (props=>
      <TouchableOpacity style={styles.headerButton} {...props}
       onPress={
        ()=>props.navigation.params?.NewPlace.saveLocation 
      }>
        <Text style={styles.headerButtonText}>Save</Text>
      </TouchableOpacity>
    )

        })}

         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 
  headerButton: {
    marginHorizontal: 20
  },
  headerButtonText: {
    fontSize: 16,
    color: Platform.OS === 'android' ? 'white' : Colors.primary
  }
});

export default CheckUpNavigator

