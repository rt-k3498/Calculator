import {ScrollView,StyleSheet,Text,Dimensions} from 'react-native';
import { useSelector,useDispatch } from 'react-redux';
import { SciRootState } from 'src/sciStore';
//const {width} = Dimensions.get('window');


export default function SciScreen() {
    const expression = useSelector((state:SciRootState) => state.screen.expression);
    return (
        <ScrollView horizontal={true} style={styles.container}>
            <Text style={styles.screen_text}>{expression}</Text>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        padding: 8,
        borderRadius: 15,
        backgroundColor: 'black',
        width: '90%',
    },
    screen_text: {
        color: 'white',
        textAlign: 'right',
        fontSize:40,
        height: '100%',
        textAlignVertical: 'top',
        margin: 'auto',
    },
})