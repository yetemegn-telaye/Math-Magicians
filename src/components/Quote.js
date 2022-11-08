import React from 'react';
import Header from './Header';
import '../styles/quote.css';

const Quote = () => (
  <>
    <Header />
    <div className="quote-body">
      <h4>
        Mathematics is not about numbers, equations, computations, or algorithms:
        it is about understanding. -William Paul Thurston
      </h4>
    </div>
  </>
);

export default Quote;
