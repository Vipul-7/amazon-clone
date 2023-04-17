import React from 'react'
import CartItems from './CartItems'
import styles from './index.module.scss';
import CheckoutDetail from './CheckoutDetail';

const CartPageComponents = () => {
  return (
    <div className={styles.main}>
        <CartItems/>
        <div>
            <CheckoutDetail/>
        </div>
    </div>
  )
}

export default CartPageComponents