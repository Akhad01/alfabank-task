import { Button } from "@mui/material";
import styled from "styled-components";

export const CardSection = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
`

export const CardButton = styled(Button)`
    margin-top: "20px"
`

export const CardSectionInner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin: 150px 0;
    padding-bottom: 150px;

    @media (max-width: 600px) {
        flex-direction: column;
        margin: 50px 0;
        padding-bottom: 50px;
    }
`

export const ProductCard = styled.div`
    padding: 15px;
    flex: 0 0 auto;
    width: 50%;

    @media (max-width: 600px) {
        width: 100%;
        display: flex;
        justify-content: center;
    }
`

export const CardSectionImage = styled.img`
    max-width: 100%;
    height: 600px;
    object-fit: scale-down;
    object-position: center center;

    @media (max-width: 600px) {
        height: 450px;
    }
`

export const CardDescription = styled.div`
    max-width: 35rem;
    padding: 12px;
`
export const ProductCategory = styled.h4`
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 8px;

    @media (max-width: 700px) {
        font-size: 20px;
    }
`

export const ProductTitle = styled.h1`
    font-size: 48px; 
    font-weight: 300;
    margin-bottom: 8px;

    @media (max-width: 900px) {
        font-size: 40px;
    }

    @media (max-width: 700px) {
        font-size: 36px;
    }

    @media (max-width: 400px) {
        font-size: 30px;
    }
`

export const ProductRating = styled.div`
    font-size: 20px; 
    margin-bottom: 16px;
    display: flex;
    align-items: center;


    svg {
        margin-left: 10px;
    }
`

export const ProductPrice = styled.h3`
    font-size: 40px; 
    font-weight: 300;
    margin: 20px 0;
`

export const ProductDescription = styled.p`
    font-size: 20px;
    font-weight: 300

    @media (max-width: 700px) {
        font-size: 18px;
    }
`
