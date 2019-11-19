import {baseClass} from './_login-form.scss';
import * as React from 'react';
import ReactDOM from 'react-dom';
import {Authenticate} from "../../redux/me";

interface Props {
    url: string;
    onSuccess: Function;
    onFailure: Function;
    authenticate: Authenticate;
    authenticated: Boolean;
    error: string | null;
    user: UserDetails;
    pending: boolean;
}

interface State {
    username: boolean,
    password: boolean
}

interface LoginFormData {
    [key:string]: string;
    username: string;
    password: string;
}


class LoginForm extends React.Component<Props, State, LoginFormData> {

    static defaultProps = {
        errorState: false,
        pending: false,
        error: null
    };

    constructor(props: Props){
       super(props);
       this.state = {
           username: true,
           password: true
       }
    }


    validate(){
        const node = ReactDOM.findDOMNode(this);
        let errors = 0;
        const result:Map<string, boolean> = new Map();
        result.set('username', this.state.username);
        result.set('password', this.state.password);

        if (node instanceof HTMLElement){
            const requiredFields = node.querySelectorAll('input[required]');
            Array.from(requiredFields).forEach(item => {
                if (item instanceof HTMLInputElement) {
                    if (item.value === "") {
                        ++errors;
                        result.set(item.name, false);
                    } else {
                        result.set(item.name, true);
                    }
                }
            }, this);
        }

        this.setState({
            password: result.get('password'),
            username: result.get('username')
        } as State);

        return errors === 0;
    }


    onSubmit(e: React.FormEvent){
        e.preventDefault();

        if (this.validate()) {
            const data: LoginFormData = {username: '', password: ''};
            if (e.target instanceof HTMLFormElement) {
                Array.from(e.target.elements).forEach(el => {
                    if (el instanceof HTMLInputElement && el.type !== 'submit') {
                        data[el.name] = el.value;
                    }
                });
            }
            this.props.authenticate(data);
        }
    }


    render(){
        const fieldState = (isValid: boolean) => {
            return isValid ? 'msg msg-negative' : 'msg msg-negative msg-on'
        };

        const {error, authenticated, pending} = this.props;
        const renderError = () => {
            return error ? ( <div className={"msg msg-fatal msg-on"}>{error}</div>) : "";
        };
        const renderSubmitState = () => {
            return pending ? (<div className={"msg msg-positive msg-on"}>Submitting...</div>) : "";
        };

        if (authenticated){
            this.props.onSuccess();
        }

        return (
            <form className={baseClass}
                  onSubmit={this.onSubmit.bind(this)}
                  noValidate>
                {renderError()}
                <div className="title center">Sign In</div>
                <div className="rectangle center">
                    <input type="text" name="username" placeholder="User Name" required /><br />
                </div>
                <span className={fieldState(this.state.username)}>A user name is required.</span>
                <div className="rectangle center">
                    <input type="text" name="password" placeholder="Password" required /><br />
                </div>
                <span className={fieldState(this.state.password)}>A password is required.</span>
                <div className="rectangle center">
                    <input type="submit" value="Sign In" />
                    {renderSubmitState()}
                </div>
                <div>
                    <a href="#">Create Account</a>
                </div>
            </form>
        )
    }
}

export default LoginForm;
