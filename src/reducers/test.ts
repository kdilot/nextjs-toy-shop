import { createAction, ActionType, createReducer } from 'typesafe-actions'
import produce from 'immer'

//  Actions Type
export const TEST = 'test/TEST'
export const TEST_LOADING = 'test/TEST_LOADING'
export const TEST_FAIL = 'test/TEST_FAIL'
export const TEST_SUCCESS = 'test/TEST_SUCCESS'

//  Actions
export const test = createAction(TEST)()
export const testLoading = createAction(TEST_LOADING)()
export const testFail = createAction(TEST_FAIL)()
export const testSuccess = createAction(TEST_SUCCESS)()

const actions = {
    test,
    testLoading,
    testFail,
    testSuccess,
}

type Actions = ActionType<typeof actions>

interface State {
    loading: boolean
    error: string
    text:string|number
}

// Default State
const initialState: State = {
    loading: false,
    error: '',
    text:'',
}

const Reducer = createReducer<State, Actions>(initialState, {
    [TEST_LOADING]: (state, action: any) =>
        produce(state, (draft) => {
            const { error, text } = initialState
            draft.loading = true
            draft.error = error
            draft.text = text
        }),
    [TEST_FAIL]: (state, action: any) =>
        produce(state, (draft) => {
            const { error } = action.payload
            draft.loading = false
            draft.error = error
        }),
    [TEST_SUCCESS]: (state, action: any) =>
        produce(state, (draft) => {
            const { text } = action.payload
            draft.loading = false
            draft.text = text
        }),
})

export default Reducer
