import {baseClass} from './_book-list.scss';
import * as React from 'react';
import * as uuid from 'uuid/v4';
import {FetchAllBooks, FetchSelectedBook} from "../../redux/books";
import Rating from "./Rating";


interface Props {
    data: BookDetails;
    authenticated: boolean;
}


interface ListProps {
    filter?: any;
    authenticated: boolean;
    books: Array<BookDetails>;
    fetchAllBooks: FetchAllBooks;
    fetchSelectedBook: FetchSelectedBook;
    onBookSelected: any;
}


interface ReviewProps {
    rating: number;
    content: string;
    username: string;
    dateReviewed: Date;
}




class Review extends React.Component<ReviewProps>{
    constructor(props:ReviewProps){
        super(props);
    }

    render() {
        return (
            <div>A review will be here.</div>
        );
    }
}



class Book extends React.Component<Props>{
    static defaultProps = {
        authenticated: false,
        data: {}
    };

    constructor(props: Props) {
        super(props);
    }

    getReviews(reviews:Array<any>){
        return reviews.map(review => {
            return new Review(review);
        });
    }

    render(){
        const {data} = this.props;
        return (
            <section className="details">
                <section className="details__section--top">
                    <div>{data.image}</div>
                    <div>{data.image}</div>
                </section>
                <section className="details__section--center">
                    <div>Form goes here</div>
                </section>
                <section className="details__section--bottom">
                    {this.getReviews(data.reviews)}
                </section>
            </section>
        );
    }

}



class BookList extends React.Component<ListProps> {

    static defaultProps = {
        authenticated: false,
        onBookSelected: (e:number) => {}
    };

    constructor(props: ListProps) {
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
            return authenticated ? 'book__div--on' : 'book__div--off'
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

