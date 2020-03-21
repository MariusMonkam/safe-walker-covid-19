import { ADD_SYMPTOM,SET_SYMPTOMS} from "./symptoms-actions";
import Symptom from "../models/symptom";
const initialState = {
  symptoms: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SYMPTOMS:
      return {
        symptoms:action.symptoms.map(pl=>new Symptom(pl.id.toString(),pl.pItems))
      }
    case ADD_SYMPTOM:
      const newSymptom = new Symptom(new Date().toString(),
       action.symptomData.id.toString(),
       action.symptomData.pItems
       
       );
      return {
      symptoms: state.symptoms.concat(newSymptom)
      };
    default:
      return state;
  }s

  
};
