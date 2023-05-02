import React, { useState } from 'react';

const Class = () => {
const [count, setCount] = useState(0);
console.log ({count});
return (
   <div className='click'>
    <p>Arrow Function</p>
      <h2>Clicked {count} times</h2>
      <button className='btn' onClick={()=> setCount(count + 1)}>Click me</button>
   </div>
   );  
};

export default Class;

