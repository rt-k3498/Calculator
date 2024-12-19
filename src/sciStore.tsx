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
                switch (action.payload){
                    case '^': {
                        state.formula += '**';
                        state.expression += '^';
                        break;
                    }
                    case 'x²': {
                        state.formula += '**2';
                        state.expression += '^2';
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
                    case 'sin': {
                        state.formula += '(x => math.round(math.sin(x), 14))';
                        state.expression += 'sin';
                        break;
                    }
                    case 'cos': {
                        state.formula += '(x => math.round(math.cos(x), 14))';
                        state.expression += 'cos';
                        break;
                    }
                    case 'tan': {
                        state.formula += '(x => math.round(math.tan(x), 14))';
                        state.expression += 'tan';
                        break;
                    }
                    case '√': {
                        state.formula += 'math.sqrt';
                        state.expression += '√';
                        break;
                    }
                    case 'log': {
                        state.formula += 'Math.log10';
                        state.expression += 'log';
                        break;
                    }
                    case 'π': {
                        state.formula += 'Math.PI';
                        state.expression += 'π';
                        break;
                    }
                    case 'e': {
                        state.formula += 'math.e';
                        state.expression += 'e';
                        break;
                    }
                    case 'ln': {
                        state.formula += 'Math.log';
                        state.expression += 'ln';
                        break;
                    }
                    case 'sinh': {
                        state.formula += '(x => math.round(math.sinh(x),14))';
                        state.expression += 'sinh';
                        break;
                    }
                    case 'cosh': {
                        state.formula += '(x => math.round(math.cosh(x),14))';
                        state.expression += 'cosh';
                        break;
                    }
                    case 'tanh': {
                        state.formula += '(x => math.round(math.tanh(x),14))';
                        state.expression += 'tanh';
                        break;
                    }
                    case 'ⁿ√': {
                        state.formula += 'math.nthRoot';
                        state.expression += 'ⁿ√';
                        break;
                    }
                    case 'logₙ': {
                        state.formula += '((x,y)=>(math.log(x)/math.log(y)))';
                        state.expression += 'logₙ';
                        break;
                    }
                    case 'x³': {
                        state.formula += '**3';
                        state.expression += '^3';
                        break;
                    }
                    case 'n!': {

                        break;
                    }
                    case 'sin⁻¹': {
                        state.formula += '(x => math.round(math.asin(x), 14))';
                        state.expression += 'sin⁻¹';
                        break;
                    }
                    case 'cos⁻¹': {
                        state.formula += '(x => math.round(math.acos(x), 14))';
                        state.expression += 'cos⁻¹';
                        break;
                    }
                    case 'tan⁻¹': {
                        state.formula += '(x => math.round(math.atan(x), 14))';
                        state.expression += 'tan⁻¹';
                        break;
                    }
                    case 'sinh⁻¹': {
                        state.formula += '(x => math.round(math.asinh(x), 14))';
                        state.expression += 'sinh⁻¹';
                        break;
                    }
                    case 'cosh⁻¹': {
                        state.formula += '(x => math.round(math.acosh(x), 14))';
                        state.expression += 'cosh⁻¹';
                        break;
                    }
                    case 'tanh⁻¹': {
                        state.formula += '(x => math.round(math.atanh(x), 14))';
                        state.expression += 'tanh⁻¹';
                        break;
                    }
                    case 'log₂': {
                        state.formula += '(math.log2)';
                        state.expression += 'log₂';
                        break;
                    }
                    case '√³': {
                        state.formula += 'math.cbrt';
                        state.expression += '√³';
                        break;
                    }
                    case 'Del': {
                        state.expression = state.expression.slice(0,-1);
                        state.formula=state.formula.slice(0,-1)
                        break;
                    }
                    case 'AC': { 
                        state.expression = '';
                        state.formula = '';
                        break;
                    }
                    case '=': {
                        try {
                            const math = require('mathjs');
                            var expression = state.formula;
                            const func = new Function('math', `return ${expression}`);
                            state.expression = `${func(math)}`;
                            state.formula = state.expression;
                        }
                        catch(e){
                            state.expression = 'ERROR - INVALID EXPRESSION';
                        }
                        break;
                    }
                    case '*': {
                        state.formula += '*';
                        state.expression += 'x';
                        break;
                    }
                    default: {
                        state.formula += action.payload;
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