import './_input.scss'

const Input = ({value, helperText, placeHolderText, hover, focus, startIcon, endIcon, size, fullWidth, label, multiline, row, error, disabled}) => {

    let classList = `input
        ${hover ? 'input--hover' : ''}
        ${focus ? 'input--focus' : ''}
        ${size === 'sm' ? 'input--sm' : (size === 'md' ? 'input--md' : (size === 'lg' ? 'input--lg' : ''))}
        ${fullWidth ? 'input--fullWidth' : ''}
        ${startIcon ? 'input--start-icon' : ''}
        ${endIcon ? 'input--end-icon' : ''}
        ${disabled ? 'input--disabled' : ''}
        ${error ? 'input--error' : ''}
    `

    return (
        <div className={classList}>
            <label >{label}</label>
                {startIcon && <i className="material-icons startIcon">{startIcon}</i>}
                <input className="" placeholder={placeHolderText} />
                {endIcon && <i className="material-icons endIcon">{endIcon}</i>}
            
            {helperText && <p className="helperText">{helperText}</p>}
        </div>
    )
}

Input.defaultProps = {
    placeHolderText: 'Placeholder',
}

export default Input