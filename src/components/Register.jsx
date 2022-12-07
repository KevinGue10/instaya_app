import {useState} from 'react';
import validator from 'validator';

const MIN = 2;
const MAX = 50;
const MINP = 6;
const MAXP = 18;
const GROUP = `[a-zñáéíóúüA-ZÁÉÍÓÚÜÑ]{${MIN},${MAX}}`;
const GROUPU = `[a-zñáéíóúüA-ZÁÉÍÓÚÜÑ0-9]{${MIN},${MAX}}`;
const GROUPP = `[a-zñáéíóúüA-ZÁÉÍÓÚÜÑ0-9]{${MINP},${MAXP}}`;
const VALIDATION = new RegExp(`^(${GROUP})( ${GROUP})*$`);
const VALIDATIONU = new RegExp(`^(${GROUPU})( ${GROUPU})*$`);
const VALIDATIONP = new RegExp(`^(${GROUPP})( ${GROUPP})*$`);

const Register = () => {
    const [value, setValue] = useState('');
    const [valueU, setValueU] = useState('');
    const [valueP, setValueP] = useState('');
    const [valueC, setValueC] = useState('');
    const [error, setError] = useState('');
    const [errorU, setErrorU] = useState('');
    const [errorP, setErrorP] = useState('');
    const [errorC, setErrorC] = useState('');
    

    const changeHandler = (event) => setValue(event.target.value);
    const changeHandlerU = (event) => setValueU(event.target.value);
    const changeHandlerP = (event) => setValueP(event.target.value);
    const changeHandlerC = (event) => setValueC(event.target.value);
    const submitHandler = (event) => {
        const isValid = VALIDATION.test(value);
        const isValidU = VALIDATIONU.test(valueU);
        const isValidP = VALIDATIONP.test(valueP);
        const isValidC = validator.isEmail(valueC);        
        event.preventDefault();
        if (!isValid) setError('No válido')
        else if (!isValidU) setErrorU('No válido'), setError(''), setErrorP(''), setErrorC('')
        else if (!isValidP) setErrorP('No válido'), setError(''), setErrorU(''), setErrorC('')
        else if (!isValidC) setErrorC('No es un correo'), setError(''), setErrorU(''), setErrorP('')
        else setError(''), setErrorU(''), setErrorP(''), setErrorC(''), console.log(JSON.stringify(value+valueU+valueP+valueC)), <redirect to="/"/>

    };
    return (
        <form onSubmit={submitHandler}>
            <h2>Gestion de paquetes - Registro Usuarios</h2>
            <label htmlFor="name">Nombres &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="text" name="name" value={value} onChange={changeHandler} required/>
            {Boolean(error) && <p>{error}</p>}
            <br />
            <label htmlFor="usuar">Usuario &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="text" name="usuar" value={valueU} onChange={changeHandlerU} required/>
            {Boolean(errorU) && <p>{errorU}</p>}
            <br />
            <label htmlFor="pass">Contraseña &nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="password" name="pass" value={valueP} onChange={changeHandlerP} required/>
            {Boolean(errorP) && <p>{errorP}</p>}
            <br />
            <label htmlFor="correo">Correo &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="text" name="correo" value={valueC} onChange={changeHandlerC} required/>
            {Boolean(errorC) && <p>{errorC}</p>}
            <br />
            <input type="submit" value="Crear"></input>            
        </form>
    );
};

export default Register