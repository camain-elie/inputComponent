import './_input.scss'

const Input = ({value, helperText, label, multiline, row, disabled, error}) => {

    return (
    <p className="input">
        {value ? 'value ="' + value +'"' : ''} {row ? 'row' : ''} {error ? 'error inpuuuuuut' : 'no error'}
    </p>)
}

Input.defaultProps = {
    
}

export default Input