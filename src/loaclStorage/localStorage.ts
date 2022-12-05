import {AppRootType} from '../reducer/store';

export const loadState = () => {
    // loadState tries to take a state from localStorage. It's important becouse users privacy mode
    // can not allow to use localStorage
    try {
        const serializedState = localStorage.getItem('state');
        // if it doesn't exist - return undefined => so reducer will load initial state
        if (serializedState === null) {
            return undefined;
        }
        // else return state from localStorage
        return JSON.parse(serializedState)
        //  if it doesn't exist - return undefined => so reducer will load initial state
    } catch (err) {
        return undefined;
    }
}


export const saveState = (state:AppRootType) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState)
    } catch (err) {
        // ignore
    }
}