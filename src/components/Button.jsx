import './Button.css'

// eslint-disable-next-line react/prop-types
function Button({ text, onClick}) {
    return (
        <button onClick={(e) => {
            e.preventDefault()
            if(onClick) {
                onClick(e)
            }
        }}>
            {text}
        </button>
    )
}

export default Button
