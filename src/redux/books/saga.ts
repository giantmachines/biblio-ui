import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {fetchAllBooksSuccess} from "./actions";

const URL = 'https://library-platform-staging.herokuapp.com/books';

function* watchFetchActiveBooks(action?: any) {
    const response = yield fetch(URL);
    const data = yield response.json();

    const __data__ = data.map((book: any) => {
        const copy = {id: -1, title: "", rating: -1.0, image: "", author: ""};
        copy.id = book.id;
        copy.title = book.title;
        copy.rating = book.reviewAverage;
        copy.image = book.book_image;
        copy.author = book.author;

        return copy;
    });

    yield put(fetchAllBooksSuccess(__data__));
}

export default function* () {
    yield takeLatest('FETCH_ALL_BOOKS', watchFetchActiveBooks);
}