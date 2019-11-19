import * as React from 'react';
import {baseClass} from './_home-page.scss';
import BookList from "../books/BookListContainer";
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
        <section className={baseClass}>
            <section className="booklist__section--header">
                <div>
                    <h2>Book List</h2>
                </div>
                <FilterBox name="bookFilter" onChange={setFilter} type={byAuthorOrTitle} />
            </section>
            <section className="booklist__section--main">
                <BookList onBookSelected={toDetails} filter={filter} />
            </section>
        </section>
    );
};

export default HomePage;
