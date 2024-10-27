import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const prosucts=[
    {name:'Photoshop',price:'99.99$'},
    {name:'Figma',price:'469$'},
    {name:'Canva',price:'19$'},
    {name:'Lightroom',price:'9$'},

  ]
  const friends=['Akash','DEv','Kartic','Ghonesh','rajib','shojib','sobuj','nittanondo',]
  return (
    <div className="App">
      <header className="App-header">
        <Users></Users>
        <Count></Count>
        <ul>
          {
            friends.map(friend =><li>{friend}</li>)
          }
        </ul>
         {prosucts.map(pd =><Products p={pd} ></Products>)} //props ke pass korci product namek
      </header>
    </div>
  );
}
function Count(){
  const [count,setCount]=useState(56)
  const handelIncrise=()=>setCount (count+1)

  return( <div>
    <h1>count:{count}</h1>
    <button onClick={handelIncrise} >Incrise</button>
    <button onClick={()=>setCount(count-1)}>Deicrese</button>
    </div>
  )
}

function Users(){
  const [users,setuser]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setuser(data))
  })

  return(
    <div>
      <h2>user</h2>
      <ul>{
        users.map(user => <li>{user.name}</li>)
      }
      </ul>
    </div>
  )
}


function Products(props){
  const {name,price}=props.p
  const productStyle=
  {
    border:'2px solid black',
    borderRadious:'5px',
    backgroundColor:'lightgray',
    width:'200px',
    height:'200px'

  }
  return (
   < div className='p' style={productStyle} >
    <h2>{name}</h2>
    <h5>{price}</h5>
    <button>Buy Now</button>
    </div>
  )
}


export default App;
