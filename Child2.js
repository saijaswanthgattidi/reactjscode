import react from 'react';

function Child2(props){
    return(
    <div>
        <button onClick={props.childIncAge}>INC AGE</button>
        <h1>{props.childName}</h1>
        <p>{props.childAge}</p>
    </div>
    )
}


export default Child2;