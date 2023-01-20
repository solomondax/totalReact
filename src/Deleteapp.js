import './Deleteapp.css'
import   './App.js'

const Deleteapp = (props) => {
    const { todoItems } = props
    const { discription ,id } = todoItems
    const {ondeleteFunc} = props
    const onDelete = () => {

        ondeleteFunc(id)
    }
    return (
        
        <li className='container'>
            <div className='sub-container'>
            
            <h1>{discription}</h1>
                 <button  onClick={onDelete}>Delete</button>
             
            </div>
        
            </li>
    
          
        

                
            

        
    )
}

export default Deleteapp