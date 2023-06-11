const TextBlock = ({title, title2, text, btn}) => {
    return (
        <div>
            <h1>{title}</h1>
            <h5>{title2}</h5>
            <p>{text}</p>
            {btn && <button>{btn}</button>}
        </div>
    )
};

export default TextBlock;