import {View,StyleSheet,Text,Pressable} from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import {updateExpression} from '../store';

export default function NumberPad () {
    const dispatch = useDispatch()
    const number_pad = [['AC','Del','/'],
                        ['7','8','9','*'],
                        ['4','5','6','-'],
                        ['1','2','3','+'],
                        ['0','.','=']]
    return(
        <View style={styles.whole_pad}>
            {number_pad.map((keyRow,keyRowIndex)=> {return(
                <View key={keyRowIndex} style={styles.key_row}>
                    {keyRow.map((key,keyIndex)=> {return(
                        key === 'AC' || key === '=' || key === 'Del' ?
                        (<Pressable key={keyIndex} onPress={()=>{dispatch(updateExpression(key))}} style={styles.keys_AC}>
                            <Text style={styles.key_style}>{key}</Text>
                        </Pressable>)
                        :
                        key === '-' || key === '+' ?
                        (<Pressable key={keyIndex} onPress={()=>{dispatch(updateExpression(key))}} style={styles.keys_op}>
                            <Text style={styles.key_style}>{key}</Text>
                        </Pressable>)
                        :
                        key === '/' ?
                        (<Pressable key={keyIndex} onPress={()=>{dispatch(updateExpression(key))}} style={styles.keys_op}>
                            <Text style={styles.key_style}>{'÷'}</Text>
                        </Pressable>)
                        :
                        key === '*' ?
                        (<Pressable key={keyIndex} onPress={()=>{dispatch(updateExpression(key))}} style={styles.keys_op}>
                            <Text style={styles.key_style}>{'×'}</Text>
                        </Pressable>)
                        :
                        (<Pressable key={keyIndex} onPress={()=>{dispatch(updateExpression(key))}} style={styles.keys}>
                            <Text style={styles.key_style}>{key}</Text>
                        </Pressable>)

                    )})}
                </View>
            )})}
            
        </View>
    )
}
const styles = StyleSheet.create({
    key_style:{
        margin: 'auto',
        fontSize: 24,
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
    key_row:{
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    whole_pad:{
        width: '100%',
        padding: 20,
        flex: 5,
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