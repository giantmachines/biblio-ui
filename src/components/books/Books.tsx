import {baseClass} from './_book-list.scss';
import * as React from 'react';
import * as uuid from 'uuid/v4';
import {FetchAllBooks, FetchSelectedBook} from "../../redux/books";
import Rating from "./Rating";


interface Props {
    authenticated: boolean;
    data: BookDetails;
}

interface ListProps {
    filter?: any;
    authenticated: boolean;
    books: Array<BookDetails>;
    fetchAllBooks: FetchAllBooks;
    fetchSelectedBook: FetchSelectedBook;
    onBookSelected: any;
}


const Review = (props:ReviewDetails) => {
    return (
        <div key={uuid()}>
            <div>{ props.user ? props.user.image : '' }</div>
            <div>{ props.user ? props.user.name : '' }</div>
            <div><Rating value={props.rating} /></div>
            <div>{props.comment}</div>
        </div>
    );
};



class Book extends React.Component<Props>{

    static defaultProps = {
        authenticated: false,
        data: { } as BookDetails
    };

    constructor(props: Props) {
        super(props);
    }

    getReviews(reviews: Array<ReviewDetails> | undefined){
        reviews = reviews || [];
        return reviews.map(review => {
            return Review(review);
        });
    }



    render(){
        const {data} = this.props;
        console.log("book: ", data);
        return (
            <section className="details">
                <section className="details__section--top">
                    <div><img src={data.image} alt="Cover image" /></div>
                    <h2>{data.title}</h2>
                    <h3>{data.author}</h3>
                    <p>{data.description}</p>
                    { data.publisher ? (<div>Publisher:{data.publisher}</div>) : '' }
                    <div>
                        {data.rating ? `${data.rating}/5` : '' }
                        <Rating value={data.rating} />
                        <span>{ data.reviews ? `(${data.reviews.length} Ratings)` : '' }</span>
                    </div>
                </section>
                <section className="details__section--center">
                    <h2>My Review</h2>
                    <div>
                        { this.props.authenticated ? (
                            <div>review goes here</div>
                        ) : (
                            <div><a href="#">Login to write a review.</a></div>
                        )}
                    </div>
                </section>
                <section className="details__section--bottom">
                    <h2>Other reviews</h2>
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
                    <div><img src={book.image} alt="Cover image" data-bookid={book.id} /></div>
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

