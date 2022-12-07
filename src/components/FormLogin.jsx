import {useState} from 'react';
import { Link } from "react-router-dom";

const MIN = 2;
const MAX = 50;
const MINP = 6;
const MAXP = 18;
const GROUP = `[a-zñáéíóúüA-ZÁÉÍÓÚÜÑ]{${MIN},${MAX}}`;
const GROUP1 = `[a-zñáéíóúüA-ZÁÉÍÓÚÜÑ0-9]{${MINP},${MAXP}}`;
const VALIDATION = new RegExp(`^(${GROUP})( ${GROUP})*$`);
const VALIDATION1 = new RegExp(`^(${GROUP1})( ${GROUP1})*$`);

const FormLogin = () => {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');
    const [value1, setValue1] = useState('');
    const [error1, setError1] = useState('');

    const changeHandler = (event) => setValue(event.target.value);
    const changeHandler1 = (event) => setValue1(event.target.value);
    const submitHandler = (event) => {
        const isValid = VALIDATION.test(value);
        const isValid1 = VALIDATION1.test(value1);
        event.preventDefault();
        if (!isValid) setError('No válido'), setError1('')
        else if (!isValid1) setError1('No válido'), setError('')
        else setError(''), setError1(''), console.log(JSON.stringify(value+value1));
    };
    return (
        <form onSubmit={submitHandler}>
            <h2>Gestion de paquetes - Login</h2>
            <h4>
                <Link to="/register">Registrarse</Link>
            </h4>
            <label htmlFor="name">Usuario &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="text" name="name" value={value} onChange={changeHandler} required/>
            {Boolean(error) && <p>{error}</p>}
            <br />
            <label htmlFor="pass">Contraseña &nbsp;&nbsp;&nbsp;</label>
            <input type="text" name="pass" value={value1} onChange={changeHandler1} required/>
            {Boolean(error1) && <p>{error1}</p>}
            <br />
            <input type="submit" value="Login"></input>
        </form>
    );
};

export default FormLogin