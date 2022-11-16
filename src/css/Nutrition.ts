import styled from "styled-components";

export const NutritionTable = styled.table`
    border-collapse: collapse;
    width: 100%;

    thead {
        background-color: var(--theme-color);
        border: 1px solid #fff;
        border-top: 0;
        color: #fff;
    }

    th {
        padding: 15px;
        text-align: center;
    }

    td {
        padding: 10px;
        text-transform: capitalize;
        font-weight: bold;
    }

    tbody tr:nth-child(odd) {
        background-color: #f2ecee;
    }

    tbody tr:nth-child(2n) {
        background-color: #fff;
    }

    tbody td:last-child {
        text-align: center;
    }
`