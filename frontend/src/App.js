import React, { useEffect, useState } from 'react';

export default function App() {
  const [msg, setMsg] = useState('Loading...');

  useEffect(() => {
    fetch('/api')
      .then(r => r.json())
      .then(d => setMsg(d.message))
      .catch(() => setMsg('Failed to reach backend'));
  }, []);

  return (
    <div style={{fontFamily: 'sans-serif', padding: 24}}>
      <h1>React + Node + Nginx + Docker</h1>
      <p><strong>API response:</strong> {msg}</p>
      <p>Try visiting <code>/api</code> directly.</p>
    </div>
  );
}
