import {baseClass} from './_login-form.scss';
import * as React from 'react';
import ReactDOM from 'react-dom';

interface Props {
    url: string;
    onSuccess: Function;
    onFailure: Function;
}

interface State {
    username: boolean,
    password: boolean
    errorState: boolean;
    submitState: boolean;
    errorMsg: string;
}

interface LoginFormData {
    [key:string]: string;
    username: string;
    password: string
}


class LoginForm extends React.Component<Props, State, LoginFormData> {

    static defaultProps = {
        onSuccess: () => {},
        onFailure: () => {}
    };

    constructor(props: Props){
       super(props);
       this.state = {
           username: true,
           password: true,
           errorState: false,
           submitState: false,
           errorMsg: ''
       }
    }

    login(data:LoginFormData){
        const options = {
            method: 'POST',
            body: JSON.stringify(data)
        };
        fetch(this.props.url, options)
            .then(response => {
                if (!response.ok){
                    throw new Error(response.statusText || "A login error occurred.");
                }
                return response;
            })
            .then(this.onSuccess.bind(this))
            .catch(this.onFailure.bind(this));
    }

    onSuccess(){
        this.setState({
            submitState: false,
            errorState: false,
            errorMsg: ''
        });
        this.props.onSuccess();
    }

    onFailure(e:Error){
        this.setState({
            submitState: false,
            errorState: true,
            errorMsg: e.message
        });
        this.props.onFailure();
    }

    validate(){
        const node = ReactDOM.findDOMNode(this);
        const result:Map<string, boolean> = new Map();
        let errors = 0;
        result.set('userName', this.state.username);
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
        const result = this.validate();

        if (result) {
            this.setState({
                submitState: true
            });

            const data: LoginFormData = {username: '', password: ''};
            if (e.target instanceof HTMLFormElement) {
                Array.from(e.target.elements).forEach(el => {
                    if (el instanceof HTMLInputElement && el.type !== 'submit') {
                        data[el.name] = el.value;
                    }
                });
            }
            this.login(data);
        }
    }

    render(){
        const fieldState = (isValid: boolean) => {
            return isValid ? 'msg msg-negative' : 'msg msg-negative msg-on'
        };

        const {errorState, submitState, errorMsg} = this.state;
        const getErrorState = () => {
            return errorState ? "msg msg-fatal msg-on" : 'msg msg-fatal';
        };
        const getSubmitState = () => {
            return submitState ? "msg msg-positive msg-on" : 'msg message-positive';
        };

        return (
            <form className={baseClass}
                  onSubmit={this.onSubmit.bind(this)}
                  noValidate>
                <div className={getErrorState()}>{errorMsg}</div>
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
                    <div className={getSubmitState()}>Submitting...</div>
                </div>
                <div>
                    <a href="#">Create Account</a>
                </div>
            </form>
        )
    }
}

export default LoginForm;