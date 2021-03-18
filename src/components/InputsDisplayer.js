import InputWrapper from './InputWrapper'

const InputsDisplayer = () => {
    return (
        <div className="inputsDisplayer">

            <div className="inputsDisplayer__row">
                <InputWrapper />
                <InputWrapper hover />
                <InputWrapper focus />
            </div>

            <div className="inputsDisplayer__row">
                <InputWrapper error />
                <InputWrapper error hover />
                <InputWrapper error focus />
            </div>

            <div className="inputsDisplayer__row">
                <InputWrapper disabled />
            </div>

            <div className="inputsDisplayer__row">
                <InputWrapper helperText="Some interesting text" />
                <InputWrapper helperText="Some interesting text" error />
            </div>

            <div className="inputsDisplayer__row">
                <InputWrapper startIcon />
                <InputWrapper endIcon />
            </div>

            <div className="inputsDisplayer__row">
                <InputWrapper value="text" />
            </div>

            <div className="inputsDisplayer__row">
                <InputWrapper size="sm" />
                <InputWrapper size="md" />
                <InputWrapper size="lg" />
            </div>

            <div className="inputsDisplayer__row">
                <InputWrapper fullWidth />
            </div>

            <div className="inputsDisplayer__row">
                <InputWrapper fmultiline row="4" />
            </div>

        </div>
    )
}

export default InputsDisplayer