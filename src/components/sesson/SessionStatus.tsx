import * as React from "react";
import {connect} from 'react-redux';
import {Store} from "../../configureStore";
import {Ping, ping} from '../../redux/me';

interface Props {
    ping: Ping;
}

function mapStateToProps(state:Store){
    return {
        authenticated: state.me.authenticated
    }
}

const mapDispatchToProps = {
    ping
};

class SessionStatus extends React.Component<Props>{
    constructor(props:Props){
        super(props);
    }

    componentDidMount(): void {
        this.props.ping();
    }


    render(){
        setTimeout(this.props.ping, 300000);
        return (<></>);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionStatus);
