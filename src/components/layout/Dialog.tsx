import {baseClass} from './_dialog.scss';
import * as React from "react";
import ReactDOM from 'react-dom';

interface Props {
    visible: boolean;
    title: string;
    onClose: any;
}

interface State {
    active: boolean;
    memento: boolean
}


class Dialog extends React.Component<Props, State> {

    static defaultProps = {
        title: '',
        onClose: () => {}
    };

    static getDerivedStateFromProps(props: Props, state: State) {
        if (props.visible !== state.memento) {
            return {
                active: props.visible,
                memento: props.visible
            };
        }
    }

    constructor(props: Props) {
        super(props);
        this.state = {
            active: false,
            memento: false
        }
    }


    setClassByState(active: boolean) {
        return active ? `${baseClass} on` : baseClass;
    };


    display() {
        this.setState({
            active: !this.state.active
        });
    }

    render() {
        const {active} = this.state;
        const onClose = this.props.onClose || this.display.bind(this);
        return ReactDOM.createPortal(
            <div className={this.setClassByState(active)}>
                <section className="modal-title">
                    <span>{this.props.title}</span>
                    <span className="close right" onClick={onClose}>X</span>
                </section>
                <section className="modal-main">
                    {this.props.children}
                </section>
                <section className="modal-footer">&nbsp;</section>
            </div>,
            document.body
        )
    }
}


export default Dialog;