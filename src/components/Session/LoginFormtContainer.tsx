import {connect} from 'react-redux';
import {Store} from "../../configureStore";
import {authenticate} from '../../redux/me';
import LoginForm from "./LoginForm";

function mapStateToProps(state:Store){
    return {
        authenticated: state.me.authenticated,
        error: state.me.error,
        user: state.me.user,
        pending: state.me.pending
    }
}

const mapDispatchToProps = {
    authenticate
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
