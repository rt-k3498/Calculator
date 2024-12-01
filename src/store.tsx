import {configureStore,createSlice} from '@reduxjs/toolkit';

//screen slice
const screenSlice = createSlice({
        name: 'screen',
        initialState: {
            expression: '',
        },
        reducers: {
            updateExpression: (state,action) => {
                switch (action.payload){
                    case 'AC': { 
                        state.expression = '';
                        break;
                    }
                    case '=': {
                        try {
                            var expression = state.expression;
                            const func = new Function(`return ${expression}`);
                            state.expression = `${func()}`;
                        }
                        catch(e){
                            state.expression = 'ERROR - INVALID EXPRESSION';
                        }
                        break;
                    }
                    default: {
                        state.expression += action.payload;
                        break;
                    }

                }
            }
            

        }
    })


const store = configureStore({
    reducer: {
        screen: screenSlice.reducer,
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export const {updateExpression} = screenSlice.actions;