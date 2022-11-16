import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    max-width: 900px;
    padding: 0 20px;

    .product-details-layout {
        grid-gap: 40px;
        display: grid;
        grid-template-columns: auto 1fr;
        padding-top: 40px;
    }
    
    .product-details-image {
        background-color: #fff;
        border-radius: 20px;
        padding: 10px;
    }

    h2 {
        display: block;
        margin-block-start: 0.83em;
        margin-block-end: 0.83em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }

    .tabs {
        border-bottom: 1px solid #d9cfd3;
        margin: 0 0 40px;
        & ul {
            list-style-type: none;
            margin: 0;
            padding: 0 0 10px;
        }
        & li {
            display: inline-block;
        }

        & .active {
            border-bottom: 7px solid #2b8379;
        }
        & a {
            color: black;
            font-weight: bold;
            padding-bottom: 10px;
            padding-left: 15px;
            padding-right: 15px;
            text-decoration: none;
        }
    }
`