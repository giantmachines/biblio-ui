import {baseClass} from './_overlay.scss';
import * as React from 'react';
import ReactDOM from 'react-dom';

interface Props {
    visible: boolean;
}


class Overlay extends React.Component<Props> {

    constructor(props: Props) {
        super(props);
    }


    setClass(visible: boolean) {
        return visible ? `${baseClass} ${baseClass}-on` : baseClass;
    };


    render() {
        const {visible} = this.props;
        return ReactDOM.createPortal(
            <div className={this.setClass(visible)}>
                {this.props.children}
            </div>,
            document.body
        )
    }
}

export default Overlay;