import {baseClass} from './_book-list.scss';
import * as React from 'react';
import * as uuid from 'uuid/v4';
import {FetchAllBooks} from "../../redux/books";

interface Props {
    filter?: string | null;
    fetchAllBooks: FetchAllBooks;
    authenticated: boolean;
    books: Array<BookDetails>
}



class Book extends React.Component<Props>{

    constructor(props: Props) {
        super(props);
    }

    render(){
        return (<div>Hello</div>);
    }

}



class BookList extends React.Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    componentDidMount(): void {
        this.props.fetchAllBooks();
    }

    render(){
        const { books, authenticated } = this.props;
        const showStatus = () => {
            return authenticated ? 'on' : 'off'
        };
        const items = books.map(book => {
            return (
                <div key={uuid()} className="book">
                    <div><img src={book.image} alt="Cover image" /></div>
                    <div>{book.title}</div>
                    <div>{book.author}</div>
                    <div className={showStatus()}>{book.status}</div>
                    <div>{book.rating}</div>
                </div>
            );
        });

        return (<div className={baseClass}>{items}</div>);
    }

}


export {Book, BookList};

