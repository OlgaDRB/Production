
// src/Login.js
import React, { useState } from 'react';
import axios from 'axios';
const Login = ({ setToken }) => {
const [isRegistering, setIsRegistering] = useState(false);
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [message, setMessage] = useState('');

const handleSubmit = async (e) => {
e.preventDefault();
const url = isRegistering
? 'http://localhost:8000/api/register/' // endpoint para registro
: 'http://localhost:8000/api/login/'; // endpoint para login
try {
    console.log('url: ' + url);
    console.log('username: ' + username);
    console.log('password: ' + password);
    

const response = await axios.post(url, {
username,
password
 });

console.log('isRegistering: '+isRegistering);
console.log('response.data.access' + response.data.access);

if (isRegistering) {
setMessage('Registro exitoso. Ahora puedes iniciar sesión.');
 } else {
setMessage('Inicio de sesión exitoso.');

console.log('response access: '+ response.data.access);
console.log('response: '+ response);
console.log('response status: '+ response.status);
console.log('response config: '+ response.config);


setToken(response.data.access);

 }
 } catch (error) {
setMessage('Hubo un error. Verifica tus datos.');
console.log(error.message);
 }
 };
return (
<div>
<h1 className="cecyflix-logo">CECYFLIX</h1>
<h2>{isRegistering ? 'Crear cuenta' : 'Iniciar sesión'}</h2>
<form onSubmit={handleSubmit}>
<input
type="text"
placeholder="Usuario"
value={username}
onChange={(e) => setUsername(e.target.value)}
/>
<input
type="password"
placeholder="Contraseña"
value={password}
onChange={(e) => setPassword(e.target.value)}
/>
<button type="submit">
{isRegistering ? 'Registrarse' : 'Ingresar'}
</button>
</form>
<p>{message}</p>
<p>
{isRegistering ? '¿Ya tienes cuenta?' : '¿No tienes cuenta?'}{' '}
<span
onClick={() => setIsRegistering(!isRegistering)}
style={{ color: '#e50914', cursor: 'pointer' }}
>
{isRegistering ? 'Inicia sesión' : 'Regístrate'}
</span>
</p>
</div>
 );
};
export default Login;