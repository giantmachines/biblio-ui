import {connect} from 'react-redux';
import {BookList} from './Books';
import {Store} from "../../configureStore";
import {fetchAllBooks, fetchSelectedBook} from '../../redux/books';

function mapStateToProps(state:Store){
    return {
        books: state.books.books,
        memento: state.books.memento,
        loading: state.books.loading
    }
}

const mapDispatchToProps = {
    fetchAllBooks, fetchSelectedBook
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);