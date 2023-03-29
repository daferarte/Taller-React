import React from 'react';
import './style.css';

const Saludo = () => {
  return <p>hola</p>;
};

export default function App() {
  return (
    <div>
      <h1>
        {' '}
        <Saludo />
      </h1>
    </div>
  );
}
