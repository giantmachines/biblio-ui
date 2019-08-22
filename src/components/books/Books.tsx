import {baseClass} from './_book-list.scss';
import * as React from 'react';
import * as uuid from 'uuid/v4';
import {FetchAllBooks, FetchSelectedBook} from "../../redux/books";
import Rating from "./Rating";


interface Props {
    filter?: any;
    authenticated: boolean;
    books: Array<BookDetails>;
    fetchAllBooks: FetchAllBooks;
    fetchSelectedBook: FetchSelectedBook;
    onBookSelected: any;
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
        authenticated: false,
        onBookSelected: (e:number) => {}
    };

    constructor(props: Props) {
        super(props);
    }

    componentDidMount(): void {
        this.props.fetchAllBooks();
    }

    async next(e: React.MouseEvent) {
        if (e.target instanceof HTMLImageElement) {
            const id: string = e.target.getAttribute('data-bookid') || '';
            const selectedId = parseInt(id);
            if (selectedId < 0) {
                return;
            }
            await this.props.fetchSelectedBook(selectedId);
            this.props.onBookSelected(selectedId);
        }
    }

    render(){
        const { books, authenticated, filter } = this.props;
        const showStatus = () => {
            return authenticated ? 'on' : 'off'
        };

        const data = filter != null ? filter(books) : books;
        const items = data.map((book:BookDetails) => {
            return (
                <div key={uuid()} className="book">
                    <div><img src={book.image} data-bookid={book.id} /></div>
                    <div>{book.title}</div>
                    <div>{book.author}</div>
                    <div className={showStatus()}>{book.status}</div>
                    <div><Rating value={book.rating} /></div>
                </div>
            );
        });

        return (<div className={baseClass} onClick={this.next.bind(this)}>{items}</div>);
    }

}


export {Book, BookList};

