import styled from "styled-components";

export const ProductsGridWrapper = styled.section`
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 1fr;

    @media screen and (min-width: 384px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (min-width: 1024) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
`