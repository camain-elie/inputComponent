import './_input.scss'

const Input = ({value, helperText, placeholderText, hover, focus, startIcon, endIcon, size, fullWidth, label, multiline, row, error, disabled}) => {

    let classList = `input
        ${hover ? 'input--hover' : ''}
        ${focus ? 'input--focus' : ''}
        ${size === 'sm' ? 'input--sm' : (size === 'md' ? 'input--md' : (size === 'lg' ? 'input--lg' : ''))}
        ${fullWidth ? 'input--fullWidth' : ''}
        ${disabled ? 'input--disabled' : ''}
        ${error ? 'input--error' : ''}
    `

    return (<div className="inputBlock">
 
        <label>Label
            {multiline && <textarea></textarea> ?
            <textarea rows="4" cols="25" ></textarea> :
       <input className={classList} type={multiline ? 'textarea' : 'text'} cols="40" rows="4"/>
            }
       </label>
    </div>
    )
}

Input.defaultProps = {

}

export default Input