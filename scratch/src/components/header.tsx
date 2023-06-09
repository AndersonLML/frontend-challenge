'use client';

import { styled } from 'styled-components';
import { Saira_Stencil_One } from 'next/font/google';
import { PrimaryInputSearchIcon } from './primary-input';
import { CartIcon } from './cart-icon';
import { CartControl } from './cart-control';

const sairaStencil  = Saira_Stencil_One({ 
    weight: ['400'],
    subsets: ['latin' ] 
})

interface HeaderProps {

}

const TagHeader = styled.header`
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 160px;
    color: var(--logo-color);

    >div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
    }
    `

const Logo = styled.a`
    font-size: 40px;
    font-weight: 400;
    line-height: 150%;
`

export function Header(props: HeaderProps){
    return (
        <TagHeader>
            <Logo className={sairaStencil.className}>Caputeeno</Logo>   
            <div>
                <PrimaryInputSearchIcon placeholder="Procurando por algo específico?"/>
            </div>
            <CartControl />
        </TagHeader>
    )
}