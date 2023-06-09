import {CartIcon} from './cart-icon';
import {useLocalStorage} from '../hooks/useLocalStorage';
import {styled} from 'styled-components';
import {useRouter} from 'next/navigation';

const CartCount = styled.span`
height: 17px;
width: 17px;
border-radius: 100%;
padding: 0 5px;
font-size: 10px;

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
    const router = useRouter() 
    const { value } = useLocalStorage('cart-items', []);
    
    const handleNavigateToCart = () => {
        router.push('/cart')
    }

    return (
        <Container onClick={handleNavigateToCart}>
            <CartIcon />
        {value.length > 0 && <CartCount>{value.length}</CartCount>}
        </Container>
    )
}