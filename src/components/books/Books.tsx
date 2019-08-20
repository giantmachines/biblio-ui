import {baseClass} from './_book-list.scss';
import * as React from 'react';
import * as uuid from 'uuid/v4';

interface Props {
    url: string;
    authenticated: boolean;
    filter?: string | null;
}

interface BookDetails {
    [key:string]: any;
    id: number;
    title: string;
    image: string;
    author: string;
    status: string;
    rating: number;
}

interface BookListState {
    books: Array<BookDetails>;
    memento: Array<BookDetails>;
}

interface FilterType {
    key: string;
    value: string;
}


class BookAgent<T> extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    onSuccess(books:Array<BookDetails>){

    }

    onFailure(e:Error){
        console.log(`[BookAgent.onFailure]${e.message}`);
    }

    request(){
        fetch(this.props.url)
            .then(response => {
                if (!response.ok){
                    throw new Error(response.statusText);
                }
                return response;
            })
            .then(response => {
                return response.json();
            })
            .then(this.onSuccess.bind(this))
            .catch(this.onFailure.bind(this));
    }
}


class Book extends BookAgent<BookDetails>{

    constructor(props: Props) {
        super(props);
    }

    render(){
        return (<div>Hello</div>);
    }

}



class BookList extends BookAgent<BookListState> {

    state: BookListState;

    constructor(props: Props) {
        super(props);
        this.state = {
            books: [],
            memento: []
        };
    }

    componentDidMount(): void {
        this.request();
    }

    onSuccess(books:Array<BookDetails>){
        //books.sort((a:BookDetails, b:BookDetails) => { return a.title - b.title });
        this.setState({
            books: books,
            memento: books
        });
    }

    filter(f:FilterType){
        const filteredBooks = this.state.books.filter(book => {
            return book[f.key].includes(f.value);
        });
        this.setState({
            books: filteredBooks
        })
    }

    render(){
        const { books } = this.state;
        const { authenticated } = this.props;
        const showStatus = () => {
            return authenticated ? 'on' : 'off'
        };
        const items = books.map(book => {
            return (
                <div key={uuid()} className="book">
                    <div>{book.image}</div>
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

