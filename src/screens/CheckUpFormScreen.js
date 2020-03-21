import React, { useState,useCallback } from "react";
import {
  ScrollView,
  View,
  Button,
  Text,
  TextInput,
  CheckBox,
  StyleSheet,
  Picker

} from "react-native";
import LocationPicker from '../components/LocationPicker'

import PickerCheckBox from 'react-native-picker-checkbox'
import {useDispatch} from 'react-redux';
import Colors from "../constants/Colors";
import * as symptomsActions from '../store/symptoms-actions'

const CheckUpFormScreen = props => {
const [pItems,setPitems] = useState([])
const [selectedLocation, setSelectedLocation] = useState();

const dispatch = useDispatch();

  const items = [
    {
      itemKey: 1,
       itemDescription: "Fever"
  },
  {
      itemKey: 2,
       itemDescription: "Cough"
  },
  {
      itemKey: 3,
       itemDescription: "Shortness of breath"
  },
  {
      itemKey: 4,
       itemDescription: "Have you recently traveled to an area with known local spread of COVID-19?"
  },
  {
    itemKey: 5,
     itemDescription: "Have you come into close contact (within 6 feet) with someone who has a laboratory confirmed COVID – 19 diagnosis in the past 14 days?"
},
{
  itemKey: 6,
   itemDescription: "None of these"
},

    
  ]
  const locationPickedHandler = useCallback(location => {
    setSelectedLocation(location);
  }, []);

handleConfirm = (pItems)=>{
  console.log('pItems=>',pItems)
  setPitems(pItems)
}
const saveSymptomHandler = ()=>{
dispatch(symptomsActions.addSymptom(pItems,selectedLocation));
props.navigation.goBack()
console.log(dispatch(symptomsActions.addSymptom(pItems)))
}
  return (
    <ScrollView>
      <View style ={styles.form}>
        <Text style={styles.label}>Covid-19 Checkup</Text>
       
        <PickerCheckBox
         data={items}
         headerComponent={<Text style={{fontSize:25}}>items</Text>}
         OnConfirm={(pItems=>handleConfirm(pItems))}
         confirmButtonTitle='ok'
         DescriptionField='itemDescription'
         KeyField='itemKey'
         arrowColor={Colors.primary}
         arrowColorSize={15}
         placeholderSelectedItems ='$count selected symptom(s)'
         placeholder ='Pick your current  Symptoms'
        />
         <LocationPicker
          navigation={props.navigation}
          onLocationPicked={locationPickedHandler}
        />
        
        
       
        <Button title="Save " 
        color={Colors.primary}
        onPress={saveSymptomHandler}>

        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 30
  },
  label: {
    fontSize: 18,
    marginBottom: 15
  },
  textInput: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2
  },
  checkbox:{

  }
});

export default CheckUpFormScreen;
