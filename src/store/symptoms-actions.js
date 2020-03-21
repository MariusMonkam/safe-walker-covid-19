

import { insertSymptom, fetchSymptoms } from '../helpers/db';

export const ADD_SYMPTOM = 'ADD_SYMPTOM';
export const SET_SYMPTOMS = 'SET_SYMPTOMS';

export const addSymptom = (pItems) => {
  return async dispatch => {
  

    try {
   
      const dbResult = await insertSymptom(
        pItems,
        'Dummy address',
        15.6,
        12.3
      );
      console.log(dbResult);
      dispatch({ type: ADD_SYMPTOM, symptomData: { id: dbResult.insertId, pItems:pItems } });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export const loadSymptoms = () => {
    return async dispatch => {
        try {
            const dbResult = await fetchSymptoms();
            console.log(dbResult);
            dispatch({ type: SET_SYMPTOMS, places: dbResult.rows._array });
        } catch (err) {
            throw err;
        }
    };
};