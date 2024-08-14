
import "../styles/components/Button.css";

interface ButtonContent{
    text: string,
    style:string,
    call: ()=>any
};


const Button = (props: ButtonContent) : JSX.Element =>{
    return(
        <button onClick={props.call} className={props.style}>{props.text}</button>
    );
}

export default Button;