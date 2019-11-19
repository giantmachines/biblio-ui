import * as React from "react";
import SVG from "react-inlinesvg";
// @ts-ignore
import headshot from "../App/images/headshot.svg";
import {Invalidate} from "../../redux/me";
import {MouseEventHandler} from "react";

interface Props {
    authenticated: Boolean;
    loginAction: MouseEventHandler;
    logoutAction: MouseEventHandler;
    invalidate: Invalidate;
    user: UserDetails | null;
}

class Headshot extends React.Component<Props> {

    static defaultProps = {
        authenticated: false,
        user: null
    };

    constructor(props:Props){
        super(props);
    }

    render(){
        const {authenticated, logoutAction, loginAction} = this.props;

        if (authenticated){
            return (
                <span className="user-container" onClick={logoutAction}>
                  <SVG src={headshot}/>
                  <span>Logout</span>
                </span>
            )
        } else {
            return (
                <span className="user-container" onClick={loginAction}>
                  <span>Login</span>
                </span>
            )
        }
    }
}

export default Headshot;
