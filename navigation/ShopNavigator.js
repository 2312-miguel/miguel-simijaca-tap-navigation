import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from '../screens/CategoriesScreen/CategoriesScreen';
import ProductsScreen from '../screens/ProductsScreen/ProductsScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen/ProductDetailScreen';
import { Platform, StatusBar, StyleSheet } from 'react-native';
import { COLORS } from '../constants/Colors';

const Stack = createNativeStackNavigator();

function ShopNavigator() {
    return (
        <NavigationContainer>
            <StatusBar
                backgroundColor="black"
            />

            <Stack.Navigator
                initialRouteName="Categories"
                screenOptions={{
                    headerStyle: styles.header,
                    headerTitleStyle: styles.headerTitle,
                    headerTintColor: Platform.OS === 'ios' ? COLORS.primary : '#7E6B8F'
                }}
            >
                <Stack.Screen
                    name="ProductDetail"
                    component={ProductDetailScreen}
                    options={({ route }) => ({
                        title: route.params.name,
                    })}
                />
                <Stack.Screen
                    name="Categories"
                    component={CategoriesScreen}
                    options={{
                        headerTintColor: COLORS.accent,
                        title: 'Panaderia'
                    }}
                />
                <Stack.Screen
                    name="Products"
                    component={ProductsScreen}
                    options={({ route }) => ({
                        title: route.params.name,
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: Platform.OS === 'ios' ? 'white' : COLORS.primary,
    },
    headerTitle: {
        fontWeight: 'bold',
    }
})

export default ShopNavigator;