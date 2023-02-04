function Button({ displayText, handler }) {
    return <button onClick={handler}>{displayText}</button>
}

export default Button