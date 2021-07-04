import React from 'react';
import { ReactComponent as ShoppingIcon } from '../assests/shopping-bag.svg';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../cart/cart.selectors';
import { toggleCartHidden } from '../cart/cart.actions';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className= 'item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);