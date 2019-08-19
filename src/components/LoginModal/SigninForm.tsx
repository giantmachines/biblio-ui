import {baseClass} from './_signin-form.scss';
import * as React from 'react';

interface Props {

}


class SigninForm extends React.Component<Props> {

    constructor(props: Props){
       super(props);
    }

    render(){
        return (
            <form className={baseClass}>
                <div className="title center">Sign Up</div>
                <div className="rectangle center"><input type="text" name="userName" placeholder="Account" /></div>
                <div className="rectangle center"><input type="text" name="password" placeholder="Password" /></div>
                <div className="rectangle center"><input type="button" value="Sign Up" /></div>
                <div className="center"><a href="#">Create Account</a></div>
            </form>
        )
    }
}

export default SigninForm;