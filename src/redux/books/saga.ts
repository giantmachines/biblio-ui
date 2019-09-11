import {put, takeLatest} from 'redux-saga/effects';
import {fetchAllBooksSuccess, fetchSelectedBookSuccess} from "./actions";

// TODO: externalize these.
const URL_GET_ALL_BOOKS = 'https://library-platform-staging.herokuapp.com/books';
const URL_GET_SELECTED_BOOK = `https://library-platform-staging.herokuapp.com/books/{id}`;


// TODO: create multiple adapters configurable for the expected API instance.
const adapt = (book:any):BookDetails => {
    book.rating = book.rating || book.reviewAverage;
    book.image = book.image || book.book_image;
    book.available = !book.isCheckedOut;
    (book.reviews || []).forEach((review:any) => {
        review.comment = review.comment || review.description;
    });
    return book;
};


function* watchFetchActiveBooks() {
    const response = yield fetch(URL_GET_ALL_BOOKS);
    const data = yield response.json();
    const books = data.map(adapt)
        .sort((a:BookDetails, b:BookDetails):number => {
            return a.title > b.title ? 1 : (a.title < b.title ? -1 : 0);
        });

    yield put(fetchAllBooksSuccess(books));
}


function* watchFetchSelectedBook(action?:any){
    const {selectedId} = action;
    const url = URL_GET_SELECTED_BOOK.replace('{id}', selectedId);
    // TODO: remove this
    const headers = {
        authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwYWYxNjg3QGdtYWlsLmNvbSIsImV4cCI6MTU2NzQ3NDg0OX0.g2UANZFp0mpDruGgvuIyi_L8MYO5Qm21QNswFmiBM4oKpgwPi85AQJgWlYhWdxoGB-UqFD71x65Yfzk_DapwbQ'
    };
    const response = yield fetch(url, { headers: headers });
    const data = yield response.json();
    const book = adapt(data);

    yield put(fetchSelectedBookSuccess(book));
}


export default function* () {
    yield takeLatest('FETCH_ALL_BOOKS', watchFetchActiveBooks);
    yield takeLatest('FETCH_SELECTED_BOOK', watchFetchSelectedBook);
}
