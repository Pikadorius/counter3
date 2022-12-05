import {ErrorType} from '../App';

const initialState={
    minValue: 0,
    currentValue: 0,
    maxValue: 5,
    error: '' as ErrorType,
    isEditMode: false
}

type InitialStateType = typeof initialState
type ActionType = IncreaseACType | ResetACType | EditModeACType | SetMinValueACType | SetMaxValueACType

export const counterReducer = (state: InitialStateType = initialState, action: ActionType):InitialStateType => {
    switch(action.type) {
        case 'INCREASE': {
            const checkStartValue =  state.currentValue < state.maxValue
            return checkStartValue? {...state, currentValue: state.currentValue + 1, error: ''} : {...state, error: 'Incorrect value!'}
        }
        default: return state
    }
}

type IncreaseACType = ReturnType<typeof increaseAC>
export const increaseAC = () => {
    return {
        type: 'INCREASE'
    } as const
}

type ResetACType = ReturnType<typeof resetAC>
export const resetAC = () => {
    return {
        type: 'RESET'
    } as const
}

type EditModeACType = ReturnType<typeof ediTypetModeAC>
export const ediTypetModeAC = (isEditMode:boolean) => {
    return {
        type: 'EDIT_MODE',
        payload: isEditMode
    } as const
}

type SetMinValueACType = ReturnType<typeof setMinValueAC>
export const setMinValueAC = (minValue:number) => {
    return {
        type: 'SET_MIN_VALUE',
        payload: minValue
    } as const
}

type SetMaxValueACType = ReturnType<typeof setMaxValueAC>
export const setMaxValueAC = (maxValue:number) => {
    return {
        type: 'SET_MAX_VALUE',
        payload: maxValue
    } as const
}