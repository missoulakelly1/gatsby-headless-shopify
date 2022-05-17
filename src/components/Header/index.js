import React from "react";
import { HeaderWrapper } from './styles';
import { Cart } from '../Cart';
import { Search } from "../Search";
import { Link } from "gatsby";
import { Logo } from "../Logo";
import { Navigation } from "../Navigation";

export function Header() {
    return (
        <HeaderWrapper>
            <div>
                <Link to="/">
                    <Logo />
                </Link>
            </div>
            
                <Navigation />
            
            <Search />
            <Cart />
            </HeaderWrapper>
    )
}