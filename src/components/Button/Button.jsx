import { LoadMore } from "./Button.styled";

export const Button = ({ add }) => { 
    return (
        <LoadMore type="button" onClick={() => { add() }}>Load more</LoadMore>
    )
}