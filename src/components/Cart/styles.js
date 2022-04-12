import styled from 'styled-components';
import {StyledLink} from '../StyledLink';

export const CartWrapper = styled(StyledLink).attrs(() => ({
    to: '/cart',
}))`
display: flex;
margin-left: auto;
color: black;
text-decoration: none;
padding-left: 16px;
>div:last-child {
    padding-left: 8px;
    margin: auto 0;
}
&:hover {
    text-decoration: underline;
}
`