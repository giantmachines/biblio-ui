import {connect} from 'react-redux';
import Dashboard from './Dashboard';
import {Store} from "../../configureStore";
import {fetchAllBooks} from '../../redux/books';

function mapStateToProps(state:Store){
    return {
        books: state.books.books,
        loading: state.books.loading,
        authenticated: state.me.authenticated
    }
}

const mapDispatchToProps = {
    fetchAllBooks
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
