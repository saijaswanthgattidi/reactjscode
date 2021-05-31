import react from 'react';

function Child1(props){
    return(
    
    <div>
        <button onClick={props.childIncAge}>INCREMENT AGE</button>
        <h1>{props.childName}</h1>
        <p>{props.childAge}</p>
    </div>
    )
}


export default Child1;