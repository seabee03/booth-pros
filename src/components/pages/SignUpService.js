import React, {Component} from 'react';
import {Password} from 'primereact/password';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {InputMask} from 'primereact/inputmask';

export class SignUpService extends Component {

    state = {
        username: "",
        password: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleSignUpServiceSubmit = event => {
      event.preventDefault();
      alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
      this.setState({ username: "", password: ""});
    };
    
    render() {
        return (
            <div className="p-grid">
                <div className="p-col-12">
                    <div className="card">
                        <h1>Sign Up</h1>
                        <p>Sign up to create bookings, access your contracts, and more.</p>
                    </div>
                    <div className="card">
                    <h1>Details</h1>
                        <div className="p-col-12 p-md-4">
                            <InputText placeholder="First Name" value={this.state.value} onChange={(e) => this.setState({value: e.target.value})} />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <InputText placeholder="Last Name" value={this.state.value} onChange={(e) => this.setState({value: e.target.value})} />
                        </div>
                        <div className="p-col-12 p-md-4">
                            <InputMask mask="(999) 999-9999? x99999" placeholder="Phone Number" value={this.state.value} onChange={(e) => this.setState({value: e.value})} />
                        </div>    
                        
                    </div>
                    <div className="card">
                    <h1>Create Username & Password</h1>
                    <div className="p-col-12 p-md-4">
                        <span className="p-float-label">
                            <InputText id="in" value={this.state.value} onChange={(e) => this.setState({value: e.target.value})} />
                            <label htmlFor="in">Username</label>
                        </span>
                    </div>
                    
                    <div className="p-col-12 p-md-4">
                        <span className="p-float-label">
                            <Password id="in" value={this.state.value} onChange={(e) => this.setState({value: e.target.value})} />
                            <label htmlFor="in">Password</label>
                        </span>
                    </div>
                    
                    <div className="p-col-12 p-md-4">
                        <Button label="Submit" onClick={this.handleSignUpServiceSubmit} /> 
                    </div>
                      
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUpService;