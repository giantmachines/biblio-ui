import {connect} from 'react-redux';
import {BookList} from './Books';
import {Store} from "../../configureStore";
import {fetchAllBooks} from '../../redux/books';

function mapStateToProps(state:Store){
    console.log("state:  ", state);
    return {
        books: state.books.books,
        memento: state.books.memento,
        loading: state.books.loading
    }
}

const mapDispatchToProps = {
    fetchAllBooks,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);