import * as React from 'react';
import BookList from "../books/BookListContainer";

interface Props {
    books: Array<BookDetails>
}

const Dashboard = (props: Props) => {
    const {books} = props;
    return (
        <section>
            <BookList filter={() => books} />
        </section>
    );
};

export default Dashboard;
