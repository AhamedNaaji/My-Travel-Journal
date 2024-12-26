


export default function Joke(props) {

    return (
        <>
        {props.question ? <h3>Question: {props.question}</h3> : null}
        <h3>Punchline: {props.punchline}</h3>   
        <hr />
        </>
        
    )
}