import React from "react";
import './login.scss';


export default function Login({handleLogin, setUsername, setPassword, username, password })  {
 

  return (
    <div className="logIn">
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Usuario" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
};


