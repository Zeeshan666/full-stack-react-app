import { createStore,combineReducers,applyMiddleware} from "redux"
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './form';

import thunk from 'redux-thunk';
import logger from 'redux-logger'; 
import {Dishes} from './Dishes'
 import {Promotions} from './Promotions'
 import {Leaders} from './Leader'
 import {Comments} from './Coments'
export const ConfigureStore = () => {
    const store = createStore(
       combineReducers({
        dishes: Dishes,
        comments: Comments,
        promotions: Promotions,
        leaders: Leaders,
        ...createForms({
            feedback: InitialFeedback
        })
       }),
       applyMiddleware(thunk,logger)
    );

    return store;
}