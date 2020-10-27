import { combineReducers} from 'redux';
import authreducer from './authentication';

export default combineReducers({
    authentication:authreducer
});