import {configureStore,createSlice} from '@reduxjs/toolkit';

//screen slice
const screenSlice = createSlice({
        name: 'screen',
        initialState: {
            expression: '',
            formula: '',
        },
        reducers: {
            sciUpdateExpression: (state,action) => {
                const math = require('mathjs');
                switch (action.payload){
                    case '^': {
                        state.expression += '**';
                        break;
                    }
                    case 'x²': {
                        state.expression += '**2';
                        break;
                    }
                    case '!': {
                        function factorial(n:number):number{
                            if (n === 0){
                                return 1;
                            }
                            return n * factorial(n-1);
                        }

                    }
                    case 'Del': {
                        state.expression = state.expression.slice(0,-1);
                        break;
                    }
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
export type SciRootState = ReturnType<typeof store.getState>;
export const {sciUpdateExpression} = screenSlice.actions;