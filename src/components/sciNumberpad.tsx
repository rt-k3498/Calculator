import {View,StyleSheet,Text,Pressable} from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import {sciUpdateExpression} from '../sciStore';
import {useState} from 'react';

export default function SciNumberPad () {
    const dispatch = useDispatch()
    const [pad_state,setPadState] = useState(false)

    const extra_pad = [['2nd','(',')','%','^'],
                       ['x²','!','sin','cos','tan'],
                       ['√','log','ln','π','e'],
                       ['sinh','cosh','tanh','ⁿ√','logₙ']]

    const nd_pad = [['2nd','(',')','%','^'],
                    ['x³','n!','sin⁻¹','cos⁻¹','tan⁻¹'],
                    ['√³','log₁₀','log₂','ln','π'],
                    ['e','sinh⁻¹','cosh⁻¹','tanh⁻¹','ⁿ√']]

    const number_pad = [['AC','Del','/'],
                        ['7','8','9','*'],
                        ['4','5','6','-'],
                        ['1','2','3','+'],
                        ['0','.','=']]

    function togglePad(){
        setPadState((prev) => !prev)
    }

    return(
        <View style={styles.entire_pad}>

            <View style={styles.extra_pad}> 
                {pad_state === false ?
                (extra_pad.map((keyRow, rowIndex) => { return(
                    <View key={rowIndex} style={styles.key_row}>
                        {keyRow.map((key, keyIndex) => {return(
                            key === '2nd' ? 
                            (<Pressable key={keyIndex} onPress={() => togglePad()} style={styles.keys_nd}>
                                <Text style={styles.key_style}>{key}</Text>
                            </Pressable>)
                            :
                            (<Pressable key={keyIndex} onPress={() => {dispatch(sciUpdateExpression(key))}} style={styles.keys}>
                                <Text style={styles.key_style}>{key}</Text>
                            </Pressable>)
                        )})}
                    </View>
                )}))
                :
                (nd_pad.map((keyRow, rowIndex) => { return(
                    <View key={rowIndex} style={styles.key_row}>
                        {keyRow.map((key, keyIndex) => {return(
                            key === '2nd' ? 
                            (<Pressable key={keyIndex} onPress={() => togglePad()} style={styles.keys_nd}>
                                <Text style={styles.key_style}>{key}</Text>
                            </Pressable>)
                            :
                            (<Pressable key={keyIndex} onPress={() => {dispatch(sciUpdateExpression(key))}} style={styles.keys}>
                                <Text style={styles.key_style}>{key}</Text>
                            </Pressable>)
                        )})}
                    </View>
                )}))
                }
            </View>

            <View style={styles.whole_pad}>
            {number_pad.map((keyRow,keyRowIndex)=> {return(
                <View key={keyRowIndex} style={styles.key_row}>
                    {keyRow.map((key,keyIndex)=> {return(
                        key === 'AC' || key === '=' || key === 'Del' ?
                        (<Pressable key={keyIndex} onPress={()=>{dispatch(sciUpdateExpression(key))}} style={styles.keys_AC}>
                            <Text style={styles.key_style}>{key}</Text>
                        </Pressable>)
                        :
                        key === '-' || key === '+' ?
                        (<Pressable key={keyIndex} onPress={()=>{dispatch(sciUpdateExpression(key))}} style={styles.keys_op}>
                            <Text style={styles.key_style}>{key}</Text>
                        </Pressable>)
                        :
                        key === '/' ?
                        (<Pressable key={keyIndex} onPress={()=>{dispatch(sciUpdateExpression(key))}} style={styles.keys_op}>
                            <Text style={styles.key_style}>{'÷'}</Text>
                        </Pressable>)
                        :
                        key === '*' ?
                        (<Pressable key={keyIndex} onPress={()=>{dispatch(sciUpdateExpression(key))}} style={styles.keys_op}>
                            <Text style={styles.key_style}>{'×'}</Text>
                        </Pressable>)
                        :
                        (<Pressable key={keyIndex} onPress={()=>{dispatch(sciUpdateExpression(key))}} style={styles.keys}>
                            <Text style={styles.key_style}>{key}</Text>
                        </Pressable>)

                    )})}
                </View>
            )})}
            
            </View> 
        </View>
    )
}
const styles = StyleSheet.create({
    entire_pad:{
        flex: 5,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    key_style:{
        margin: 'auto',
        fontSize: 14.5,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    keys:{
        flex: 1,
        padding: 10,
        margin: 5,
        borderRadius: 15,
        backgroundColor: 'lightgrey',
    },
    keys_nd:{
        flex: 1,
        padding: 10,
        margin: 5,
        borderRadius: 15,
        backgroundColor: 'red',
    },
    key_row:{
        width: '100%',
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    whole_pad:{
        width: '100%',
        padding: 10,
        paddingBottom: 25,
        paddingTop: 0,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',

    },
    extra_pad:{
        width: '100%',
        padding: 10,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
    },
    keys_AC:{
        flex: 1,
        padding: 10,
        margin: 5,
        borderRadius: 15,
        backgroundColor: 'orange',
    },
    keys_op:{
        flex: 1,
        padding: 10,
        margin: 5,
        borderRadius: 15,
        backgroundColor: 'lightblue',
    },
})