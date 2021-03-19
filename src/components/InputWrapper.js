import Input from "./Input"

const InputWrapper = (props) => {
    
    //let wrapperText = ``
    //let classList = ``
    console.log(props)
    return (
        <div className="inputWrapper" >
            <p className={`inputWrapper__description${props.hover || props.focus ? '--pseudoclass' : ''}`}>
                {props.hover ? '&:hover' : (props.focus ? '&:focus' : (
                    `<Input ${props.helperText ? `helperText="${props.helperText}"` : ''}
                    ${props.value ? `value="${props.value}"` : ''}
                    ${props.startIcon ? 'startIcon' : (props.endIcon ? 'endIcon': '')}
                    ${props.size ? `size="${props.size}"` : ''}
                    ${props.fullWidth ? 'fullWidth' : ''}
                    ${props.label ? `label="${props.label}'` : ''}
                    ${props.multiline ? `multiline${props.row ? ` row="${props.row}"` : ''}` : ''}
                    ${props.error ? 'error' : ''}
                    ${props.disabled ? 'disabled' : ''} />`
                ))}
            </p>
            <Input {...props} />
        </div>
    )
}

export default InputWrapper