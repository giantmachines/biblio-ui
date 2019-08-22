import * as React from 'react';
import {baseClass} from './_home-page.scss';
import BookList from "../books/BooksContainer";
import FilterBox from "../filtering/FilterBox";
import {byAuthorOrTitle} from "../filtering/filterTypes";

interface Props {
    history?: any;
}

const HomePage = (props: Props) => {
    const [filter, setFilter] = React.useState(() => { });

    const toDetails = (id:number) => {
        props.history.push(`/books/{id}`.replace('{id}', id + ''));
    };

    return (
        <div className={baseClass}>
            <section className="header">
                <div>
                    <h2>Book List</h2>
                </div>
                <FilterBox name="bookFilter" onChange={setFilter} type={byAuthorOrTitle} />
            </section>
            <section className="main">
                <BookList onBookSelected={toDetails} filter={filter} />
            </section>
        </div>
    );
};

export default HomePage;
