import {put, takeLatest} from 'redux-saga/effects';
import {fetchAllBooksSuccess, fetchSelectedBookSuccess} from "./actions";
import {allBooksEndpoint, selectedBookEndpoint} from "../../config";
import {$fetch} from "../util";


// TODO: create multiple adapters configurable for the expected API instance.
const adapt = (book:any):BookDetails => {
    book.rating = book.rating || book.reviewAverage || book.averageRating;
    book.image = book.image || book.book_image;
    book.available = book.available || !book.isCheckedOut;
    (book.reviews || []).forEach((review:any) => {
        review.comment = review.comment || review.description;
    });

    const {author} = book;
    book.author = typeof author !== 'string' ? `${author.firstName} ${author.lastName}` : author;
    return book;
};


function* watchFetchActiveBooks() {
    const response = yield $fetch(allBooksEndpoint);
    const data = yield response.json();
    const books = data.map(adapt)
        .sort((a:BookDetails, b:BookDetails):number => {
            return a.title > b.title ? 1 : (a.title < b.title ? -1 : 0);
        });

    yield put(fetchAllBooksSuccess(books));
}


function* watchFetchSelectedBook(action?:any){
    const {selectedId} = action;
    const url = selectedBookEndpoint.replace('{id}', selectedId);
    const response = yield $fetch(url);
    const data = yield response.json();
    const book = adapt(data);
    yield put(fetchSelectedBookSuccess(book));
}



export default function* () {
    yield takeLatest('FETCH_ALL_BOOKS', watchFetchActiveBooks);
    yield takeLatest('FETCH_SELECTED_BOOK', watchFetchSelectedBook);
}
