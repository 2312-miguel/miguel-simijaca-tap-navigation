import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native'
import { BREADS } from '../../data/Breads';
import { styles } from './styles';

function ProductDetailScreen() {
    const route = useRoute();
    const product = BREADS.find(item => item.id === route.params.breadID)

    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <Text style={styles.title}>{product.name}</Text>
                <Text>{product.description}</Text>
                <Text>$ {product.price}</Text>
                <Text>{product.weight}</Text>
            </View>
        </View>
    )
}

export default ProductDetailScreen