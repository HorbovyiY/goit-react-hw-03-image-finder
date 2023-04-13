export const Button = ({add}) => { 
    return (
        <button type="button" onClick={() => { add() }}>Load more</button>
    )
}