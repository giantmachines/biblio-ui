import * as React from "react";
import SVG from "react-inlinesvg";
// @ts-ignore
import headshot from "../App/images/headshot.svg";

interface Props {
    authenticated: Boolean;
    loginAction: Function;
    logoutAction: Function;
    invalidate: Function;
    user: UserDetails;
}

class Headshot extends React.Component<Props> {

    constructor(props:Props){
        super(props);
    }

    render(){
        const {authenticated, logoutAction, loginAction, invalidate} = this.props;

        if (authenticated){
            return (
                <span className="user-container" onClick={invalidate}>
                  <SVG src={headshot}/>
                  <span>Logout</span>
                </span>
            )
        } else {
            logoutAction();
            return (
                <span className="user-container" onClick={loginAction}>
                  <span>Login</span>
                </span>
            )
        }
    }
}

export default Headshot;
