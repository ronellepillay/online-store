import styled from 'styled-components';

// Header wrapper component
export const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background: #333;
    color: #fff;
`;

// Product wrapper component
export const ProductWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ccc;
    margin: 20px;
    padding: 20px;
`;

// Landing page wrapper component
export const LandingPageWrapper = styled.div`
    text-align: center;
    padding: 20px;
`;

// Add to cart button component
export const AddToCartButton = styled.button`
    background-color: silver;
    color: #333;
    border: none;
    padding: 10px 16px;
    margin-top: 10px;
    cursor: pointer;

    &:hover {
        background-color: #ddd;
    }
`;
