import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <nav>
      <h1>Math Magicians</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/calculator"> Calculator </Link>
        <Link to="/quote">Quote</Link>
      </div>
    </nav>
    <main>
      <h3>Welcome to our page!</h3>
      <p>
        mathematics, the science of structure,
        order, and relation that has evolved from
        elemental practices of counting, measuring,
        and describing the shapes of objects. It deals
        with logical reasoning and quantitative calculation,
        and its development has involved an increasing degree
        of idealization and abstraction of its subject matter.
      </p>
      <p>
        Since the 17th century, mathematics has been an indispensable
        adjunct to the physical sciences and technology, and in more
        recent times it has assumed a similar role in the quantitative
        aspects of the life sciences.
      </p>
    </main>
  </>
);

export default Home;
