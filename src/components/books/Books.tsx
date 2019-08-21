import {baseClass} from './_book-list.scss';
import * as React from 'react';
import * as uuid from 'uuid/v4';
import {FetchAllBooks, FetchSelectedBook} from "../../redux/books";

interface Props {
    filter?: string | null;
    authenticated: boolean;
    books: Array<BookDetails>;
    fetchAllBooks: FetchAllBooks;
    fetchSelectedBook: FetchSelectedBook;
    history?: any;
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

    static defaultProps = {
        authenticated: false
    };

    constructor(props: Props) {
        super(props);
    }

    componentDidMount(): void {
        this.props.fetchAllBooks();
    }

    viewDetails(e:React.MouseEvent){
        if (e.target instanceof HTMLElement) {
            const id: string = e.target.getAttribute('data-bookid') || '';
            const selectedId = parseInt(id);
            if (selectedId < 0) {
                return;
            }
            this.props.fetchSelectedBook(selectedId);
            //this.props.history.push(`/books/{id}`);
        }
    }

    render(){
        const { books, authenticated } = this.props;
        const showStatus = () => {
            return authenticated ? 'on' : 'off'
        };
        const items = books.map(book => {
            return (
                <div key={uuid()} className="book">
                    <div><img src={book.image} alt="Cover image" data-bookid={book.id} /></div>
                    <div>{book.title}</div>
                    <div>{book.author}</div>
                    <div className={showStatus()}>{book.status}</div>
                    <div>{book.rating}</div>
                </div>
            );
        });

        return (<div className={baseClass} onClick={this.viewDetails.bind(this)}>{items}</div>);
    }

}


export {Book, BookList};

