import React,{Component} from 'react';
 
class Navbar extends Component {
  render() {
    return (    
       <div className='display'>
        <h1><span>Acc</span>ellor</h1>
        <ul>
         <li>Home</li>
         <li>Portfoilo</li>
         <li>Service</li>
         <li>Contact</li>
         </ul>
       </div> 
    );   
  }
}

export default Navbar;


