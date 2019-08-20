import {baseClass} from './_login-form.scss';
import * as React from 'react';
import ReactDOM from 'react-dom';

interface Props {

}

interface State {
    userName: boolean,
    password: boolean
}


class LoginForm extends React.Component<Props, State> {

    constructor(props: Props){
       super(props);
       this.state = {
           userName: true,
           password: true
       }
    }

    validate(){
        const node = ReactDOM.findDOMNode(this);
        const result:Map<string, boolean> = new Map();
        result.set('userName', this.state.userName);
        result.set('password', this.state.password);

        if (node instanceof HTMLElement){
            const requiredFields = node.querySelectorAll('input[required]');
            Array.from(requiredFields).forEach(item => {
                if (item instanceof HTMLInputElement) {
                    if (item.value === "") {
                        result.set(item.name, false);
                    } else {
                        result.set(item.name, true);
                    }
                }
            }, this);
        }

        this.setState({
            password: result.get('password'),
            userName: result.get('userName')
        } as State);
    }

    onSubmit(e: React.FormEvent){
        e.preventDefault();
        this.validate();
    }

    render(){
        const fieldState = (isValid: boolean) => {
            return isValid ? 'invalid-msg' : 'invalid-msg invalid-msg-on'
        };
        return (
            <form className={baseClass}
                  onSubmit={this.onSubmit.bind(this)}
                  noValidate>
                <div className="title center">Sign In</div>
                <div className="rectangle center">
                    <input type="text" name="userName" placeholder="User Name" required /><br />
                </div>
                <span className={fieldState(this.state.userName)}>A user name is required.</span>
                <div className="rectangle center">
                    <input type="text" name="password" placeholder="Password" required /><br />
                </div>
                <span className={fieldState(this.state.password)}>A password is required.</span>
                <div className="rectangle center">
                    <input type="submit" value="Sign In" />
                </div>
                <div>
                    <a href="#">Create Account</a>
                </div>
            </form>
        )
    }
}

export default LoginForm;