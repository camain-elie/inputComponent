import './_input.scss'

/* /!\ Warning /!\ An input in a React component should always be controlled (onChange usually),
it is easier done with a Class component ! */
function Input({ value, helperText, placeHolderText, hover, focus, startIcon,
    endIcon, size, fullWidth, label, multiline, row, error, disabled }) {

    let classList = `input
        ${hover ? 'input--hover' : ''}
        ${focus ? 'input--focus' : ''}
        ${size === 'sm' ? 'input--sm' : (size === 'md' ? 'input--md' : (size === 'lg' ? 'input--lg' : ''))}
        ${fullWidth ? 'input--fullWidth' : ''}
        ${startIcon ? 'input--start-icon' : ''}
        ${endIcon ? 'input--end-icon' : ''}
        ${multiline ? 'input--multiline' : ''}
        ${disabled ? 'input--disabled' : ''}
        ${error ? 'input--error' : ''}
    `

    return (
        <div className={classList}>
            <label>{label}</label>
            {startIcon && <i className="material-icons startIcon">{startIcon}</i>}
            {multiline ? <textarea className="" placeholder={placeHolderText} value={value} rows={row} /> :
                <input className="" placeholder={placeHolderText} value={value} />}
            {endIcon && <i className="material-icons endIcon">{endIcon}</i>}

            {helperText && <p className="helperText">{helperText}</p>}
        </div>
    )
}

Input.defaultProps = {
    placeHolderText: 'Placeholder',
}

export default Input