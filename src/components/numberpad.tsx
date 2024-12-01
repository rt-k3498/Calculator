import {View,StyleSheet,Text,Pressable} from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import {updateExpression} from '../store';

export default function NumberPad () {
    const dispatch = useDispatch()
    const number_pad = [['AC','/'],
                        ['7','8','9','*'],
                        ['4','5','6','-'],
                        ['1','2','3','+'],
                        ['0','.','=']]
    return(
        <View style={styles.whole_pad}>
            {number_pad.map((keyRow)=> {return(
                <View style={styles.key_row}>
                    {keyRow.map((key)=> {return(
                        <Pressable onPress={()=>{dispatch(updateExpression(key))}} style={styles.keys}>
                            <Text style={styles.key_style}>{key}</Text>
                        </Pressable>
                    )})}
                </View>
            )})}
            
        </View>
    )
}
const styles = StyleSheet.create({
    key_style:{
        margin: 'auto',
        fontSize: 20,
        textAlign: 'center',
    },
    keys:{
        flex: 1,
        padding: 10,
        margin: 5,
        borderRadius: 15,
        backgroundColor: 'grey',
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
        flex: 30,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'lightGrey',

    },
})