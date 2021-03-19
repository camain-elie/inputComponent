const Input = (value, helperText, label, multiline, row, disabled, error) => {
    console.log(error)
    return <p className="input">{value ? 'value ="' + value +'"' : ''} {row ? 'row' : ''} {error ? 'error inpuuuuuut' : 'no error'}</p>
}

export default Input