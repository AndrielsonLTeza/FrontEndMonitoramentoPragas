import React, { useEffect, useState } from 'react';
import { Auth, Hub } from 'aws-amplify';

function App() {
  const [user, setUser] = useState(null);

  const checkUser = async () => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      setUser(currentUser);
    } catch {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();
    Hub.listen('auth', () => {
      checkUser();
    });
  }, []);

  const handleLogin = () => {
    Auth.federatedSignIn();
  };

  const handleLogout = () => {
    Auth.signOut();
  };

  return (
    <div>
      <h1>AWS Cognito Login</h1>
      {user ? (
        <div>
          <p>Olá, {user.username}</p>
          <button onClick={handleLogout}>Sair</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Entrar</button>
      )}
    </div>
  );
}

export default App;
