import {CartIcon} from './cart-icon';
import {useLocalStorage} from '../hooks/useLocalStorage';
import {styled} from 'styled-components';

const CartCount = styled.span`
height: 17px;
width: 17px;

background-color: var(--delete-color);
color: white;

position: absolute;
right: -10px;
top: 50%;
`

const Container = styled.div`
    position: relative;
`

export function CartControl() {
    const { value } = useLocalStorage('cart-items') 

    return (
        <div>
            <CartIcon />
            {value.lenght && <CartCount>{value.lenght}</CartCount>}
        </div>
    )
}