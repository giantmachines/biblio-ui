import * as React from 'react';
import { baseClass } from './_home-page.scss';
import BookList from "../books/BooksContainer";
import FilterBox from "../filtering/FilterBox";

const HomePage = () => {
  const [filter, setFilter] = React.useState(null);
  return (
      <div className={baseClass}>
        <section className="header">
          <div>
             <h2>Book List</h2>
          </div>
          <FilterBox name="bookFilter" onChange={setFilter}/>
        </section>
        <section className="main">
          <BookList />
        </section>
      </div>
  );
};

export default HomePage;
