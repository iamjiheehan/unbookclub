import React from 'react';
import { useHistory } from 'react-router-dom';

function SignInButton() {
  const history = useHistory();

  const handleClick = () => {
    history.push('/signin');
  };

  return (
    <button onClick={handleClick}>Sign In</button>
  );
}
