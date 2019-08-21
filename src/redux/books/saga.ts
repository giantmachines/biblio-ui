import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {fetchAllBooksSuccess, fetchSelectedBookSuccess} from "./actions";

const URL_GET_ALL_BOOKS = 'https://library-platform-staging.herokuapp.com/books';
const URL_GET_SELECTED_BOOK = `https://library-platform-staging.herokuapp.com/books/{id}`;

const adapters = {
    book: function(book:any){
        const copy = {id: -1, title: "", rating: -1.0, image: "", author: ""};
        copy.id = book.id;
        copy.title = book.title;
        copy.rating = book.reviewAverage;
        copy.image = book.book_image;
        copy.author = book.author;

        return copy;
    },
    __default__: (book:any) => { return book; }
};

function* watchFetchActiveBooks(action?:any) {
    const response = yield fetch(URL_GET_ALL_BOOKS);
    const data = yield response.json();
    const books = data.map(adapters.book)
        .sort((a:BookDetails, b:BookDetails):number => {
            return a.title > b.title ? 1 : (a.title < b.title ? -1 : 0);
        });

    yield put(fetchAllBooksSuccess(books));
}


function* watchFetchSelectedBook(action?:any){
    const {selectedId} = action;
    const response = yield fetch(URL_GET_SELECTED_BOOK.replace('{id}', selectedId));
    const data = yield response.json();
    const book = adapters.book(data);

    yield put(fetchSelectedBookSuccess(book));
}


export default function* () {
    yield takeLatest('FETCH_ALL_BOOKS', watchFetchActiveBooks);
    yield takeLatest('FETCH_SELECTED_BOOK', watchFetchSelectedBook);
}