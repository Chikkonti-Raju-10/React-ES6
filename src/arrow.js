import React from "react";

const Guest = () => {
    const user = 'Guest'; 
    const name = 'Raju';
    console.log(name);
    return (
      <Message user={user} />
    );
  }
  const Message = ({user}) => {
    return <div className="items">
    <h1>Welcome {user}!</h1>
    </div>
  }

  export default Guest ;