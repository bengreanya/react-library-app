import React from 'react';
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <div>
      <main>
        <h1>Catalog</h1>
        <p>
          Go To<Link to="/books">Catalog</Link>
        </p>
      </main>
    </div>
  );
}
