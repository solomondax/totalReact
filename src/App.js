

import './App.css'
import Deleteapp from './Deleteapp'
import { Component } from 'react'

const todoList = [
  {
    id: 1,
    discription: "React js is a javascript lb "
  },
   {
    id: 2,
    discription: "React.js is  most suitable for build user interface"
  },
    {
    id: 3,
    discription: "How to create react app"
  },
     {
    id: 4,
    discription: "npm install create-react-app"
  },
      {
    id: 5,
    discription: "npx create-react-app projectname"
  },
       {
    id: 6,
    discription: "Totally react is the flexble for  build Wp"
  }
]

class App extends Component{

  state = {
    data : todoList,
  }

  onDeleteItems = (id) => {
    const {data}= this.state
    const filterData = data.filter((user) => (
      user.id !== id
    ))

    this.setState({data : filterData})
  }
  render() {
    const {data}= this.state
    return (
      <div className='dax'>
      <div className='app-container'>
        <h1 className='heading'>Delete Items </h1>
        <ul className='list-continair'>
        {data.map((each) => ( 
          < Deleteapp todoItems={each} key ={each.id} ondeleteFunc={this.onDeleteItems} />
          
        ))}
          </ul>
        
        </div>
        </div>
    )
  }

  

} 



 
  



  export default App 