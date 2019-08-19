import {baseClass} from './_login-modal.scss';
import * as React from "react";
import ReactDOM from 'react-dom';
import SigninForm from './SigninForm';

interface Props {
    visible: boolean;
}

interface State {
    active: boolean;
}


class LoginModal extends React.Component<Props, State>{
    parentNode: Element;

    constructor(props: Props){
        super(props);
        this.parentNode = document.createElement('div');
        this.state = {
            active: false
        }
    }

    componentDidMount(): void {
        if (this.props.visible) {
            document.body.appendChild(this.parentNode);
            this.setState({active:true});
        }
    }

    componentWillUnmount(): void {
        if (this.state.active) {
            document.body.removeChild(this.parentNode);
        }
    }

    render() {
        return ReactDOM.createPortal(
            <div className={baseClass}>
                <div className="close right">X</div>
                <SigninForm />
            </div>,
            this.parentNode
        )
    }
}


export default LoginModal;