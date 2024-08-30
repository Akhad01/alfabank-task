import styled from "styled-components";
import Card from "@mui/joy/Card";

export const CardWrapper = styled(Card)`
    max-width: 320px;
    resize: horizontal;
    cursor: pointer;
    width: 100%;
`

export const ImageContainer = styled.div`
    height: 320px;
    overflow: hidden; 
    place-content: center; 
    display: grid;
`

export const Image = styled.img`
    width: 100%; 
    max-height: 320px
`