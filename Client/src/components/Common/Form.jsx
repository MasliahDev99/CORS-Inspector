import React from 'react'
import PropTypes from 'prop-types' // libreria para validar tipos de datos enviados al formulario
import  Button  from '../UI/Button'
import  Input  from '../UI/Input'

function Form({ url, setUrl, handleSubmit }) {
    return (
        <form className="w-full max-w-3xl mb-8" onSubmit={handleSubmit}>
            <div className="flex flex-row gap-2">
                <Input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://foo_ejemplo.com"
                />
                <Button type="submit">Analizar</Button>
            </div>
        </form>
    )
}

Form.propTypes = { 
    url: PropTypes.string.isRequired,
    setUrl: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default Form;
