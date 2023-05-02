import React from 'react';

 
class Parent extends React.Component{
    render(){
        return(
                <div className='data'>
                    <br/>	
                    <h3>Using Props</h3>
                    <h3> inside Parent Component</h3>
                    <Child name="Raju" userId = "1819"/>
                </div>
            );
    }
}
 
class Child extends React.Component{
    render(){
        console.log(this.props);
        return(
                <div className='data'>
                    <h3>Hello, {this.props.name}</h3>
                    <h3>inside Child Component</h3>
                    <h3>Your user id is: {this.props.userId}</h3>
                </div>
            );
    }
}

export default Parent;
 