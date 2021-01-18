import React from 'react'
import {Button} from 'react-bootstrap'
import DeleteIcon from '@material-ui/icons/Delete'
import axios from 'axios'

const DeleteVoter = (props) => {

    const deleteHandler = () => {
        axios.delete(`/voter/deleteVoter/${props.id}`)
        .then(()=> { 
            window.location.reload(false)
        })
        .catch(()=> {
            alert('Could not delete. Try again later!')
        })
        console.log(props.id)
      }
      
    return (
        <div>
            <Button variant='Link' size='sm' onClick={deleteHandler} ><DeleteIcon style={{color: 'red'}}/></Button>    
        </div>
    )
}

export default DeleteVoter
