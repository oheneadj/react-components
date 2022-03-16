export const Myself = (props) => {
    return (
       <div>
           <p>My name is <b>{props.name}</b> . I am  years <b>{props.age}</b> old and I am a <b>{props.gender}</b>. </p>
       </div>
    );
}