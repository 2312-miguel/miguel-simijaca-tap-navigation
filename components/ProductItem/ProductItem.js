import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { styles } from './styles';

const ProductItem = ({ item, onSelected }) => {
    return (
        <TouchableOpacity onPress={() => onSelected(item)}>
            <View style={styles.breadItem}>
                <View>
                    <Text style={styles.title}>{item.name}</Text>
                </View>
                <View>
                    <Text style={styles.details}>$ {item.price}</Text>
                    <Text style={styles.details}>{item.weight}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ProductItem;