import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import CartItem from '../components/CartItem';
import { CART } from '../data/cart';
import { confirmCart } from '../store/actions/cart.action';

const CartScreen = () => {
  const dispatch = useDispatch();

  const handlerDeleteItem = (id) => {};
  
  const handlerConfirmCart = () => {
    dispatch(confirmCart(CART, 2300));
  };

  const renderItem = (data) => (
    <CartItem item={data.item} onDelete={handlerDeleteItem} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={CART}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirm} onPress={handlerConfirmCart}>
          <Text>Confirmar</Text>
          <View style={styles.total}>
            <Text style={styles.text}>Total</Text>
            <Text style={styles.text}>$1600</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#fff',
    paddingBottom: 120,
  },
  list: {
    flex: 1,
  },
  footer: {
    padding: 12,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
  },
  confirm: {
    backgroundColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  total: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 18,
    padding: 8,
  },
});

export default CartScreen;
