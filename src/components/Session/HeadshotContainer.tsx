import {connect} from 'react-redux';
import {Store} from "../../configureStore";
import {invalidate} from '../../redux/me';
import Headshot from "./Headshot";

function mapStateToProps(state:Store){
    return {
        authenticated: state.me.authenticated,
        error: state.me.error,
        user: state.me.user
    }
}

const mapDispatchToProps = {
    invalidate
};

export default connect(mapStateToProps, mapDispatchToProps)(Headshot);
