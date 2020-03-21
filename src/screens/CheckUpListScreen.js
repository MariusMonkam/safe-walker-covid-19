import React,{useEffect} from 'react';
import { View, Text, StyleSheet, Platform ,FlatList} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import PlaceItem from '../components/PlaceItem';
import *as symptomsActions from '../store/symptoms-actions'

const CheckUpListScreen = props => {
  const symptoms = useSelector(state =>state.symptoms.symptoms)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(symptomsActions.loadSymptoms());
  }, [dispatch]);

  return <FlatList 
         data={symptoms}
         keyExtractor={item=>item.id}
         renderItem={itemData=>(
          <PlaceItem
         
          pItems={itemData.item.pItems.itemDescription}
          address={null}
          onSelect={() => {
            props.navigation.navigate('Recommendation', {
              placePitems: itemData.item.pItems.itemDescription,
              placeId: itemData.item.id
            });
          }}
        />
         )}
         />
};



const styles = StyleSheet.create({});

export default CheckUpListScreen;
