import React, {Component} from 'react';
import axios from 'axios';
import useravatar from './useravatar.svg';
import './cardApp.css';

class Users extends Component{
    constructor(props){
        super(props);
        console.log("Constructor");
        this.state = {
            name: "",
            ln: "",
            email: "",            
            street: "",
            city: "",
            state: ""
        };
        this.usr=this.usr.bind(this);
        this.usrs=this.usrs.bind(this);
    }
    componentWillMount(){
        console.log("will");
    }

    componentDidMount(){
        this.usr();
    }

    usr(){        
        axios.get('https://randomuser.me/api/') //esto es para traer uno o 
          .then(response =>{
              const data = response.data.results;
              console.log(data); //va a teaer uno es un arreglo con un objeto.. por eso no se ve
                this.setState({picture: data[0].picture.medium,name: data[0].name.first, ln: data[0].name.last ,email: data[0].email, street: data[0].location.street, city: data[0].location.city, state: data[0].location.state});
          })
          .catch(error =>{
            console.log(error);
          })             
    }

    usrs()
    {
        alert(this.state.street, this.state.city,this.state.state);        
    }



    render(){
        console.log("render");
        return(
           <div className = "CardApp">
            <div className ="CardApp-container">
                <div className ="CardApp-container-header-details">
                    <div className = "CardApp-c-h-d-font">                                                                                                
                        <img src={this.state.picture} className="Card-img" />                        
                    </div>
                    <div className="Card-c-h-data">
                        <h4>{this.state.name +" "+ this.state.ln }</h4>
                        <h5>{this.state.email}</h5>
                    </div>
                    <button className="CardApp-button-mi" type="button"  onClick={this.usrs} >Más información</button>
                </div>
                <div className =".CardApp-button-mou">
                    <button className="CardApp-button-mou" type="button" onClick={this.usr}>Mostrar otro usuario</button>
                </div>
            </div>
           </div>
        )
    }
}

const UserList = (props) => (
    <p><strong>name : </strong> {props.name.first}</p>
)

export default Users;