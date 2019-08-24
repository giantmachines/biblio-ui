import {connect} from 'react-redux';
import {Book} from './Books';
import {Store} from "../../configureStore";

function mapStateToProps(state:Store){
    return {
        data: state.books.selectedBook
    }
}

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);