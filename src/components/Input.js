import './_input.scss'

const Input = ({value, helperText, placeHolderText, hover, focus, startIcon, endIcon, size, fullWidth, label, multiline, row, error, disabled}) => {

    let classList = `input
        ${hover ? 'input--hover' : ''}
        ${focus ? 'input--focus' : ''}
        ${size === 'sm' ? 'input--sm' : (size === 'md' ? 'input--md' : (size === 'lg' ? 'input--lg' : ''))}
        ${fullWidth ? 'input--fullWidth' : ''}
        ${startIcon ? 'input--start-icon' : ''}
        ${disabled ? 'input--disabled' : ''}
        ${error ? 'input--error' : ''}
    `

    return (<p> let's start again !</p>
    )
}

Input.defaultProps = {

}

export default Input