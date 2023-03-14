import { useState, useEffect, useContext } from 'react';
import TokenContext from './context/TokenContext';

export default function Form() { 
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState('');
  const [token, setToken] = useContext(TokenContext)

  useEffect(() => {
    if (showForm) {
      sendMessage(message);
    }
  }, [showForm, message]);

  function handleSubmit(e) {
    e.preventDefault();
    setShowForm(true);
  }

  if (showForm) {
    return (
      <>
        <h1>Thanks for using our services!</h1>
        <button onClick={() => {
          setMessage('');
          setShowForm(true);
        }}>
          {token.token}
        </button>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button type="submit" disabled={message === ''}>
        Send
      </button>
    </form>
  );
}

function sendMessage(message) {
  console.log('Sending message: ' + message);
}
