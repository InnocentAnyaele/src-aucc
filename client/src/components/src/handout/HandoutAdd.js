import React, { Component } from 'react'
import {Form, Button, ProgressBar} from 'react-bootstrap'
// import Modal from 'react-modal'
// import ModalHeader from 'react-bootstrap/ModalHeader';
// import ModalBody from 'react-bootstrap/ModalBody';
// import ModalFooter from 'react-bootstrap/ModalFooter';
// import ModalTitle from 'react-bootstrap/ModalTitle'
import { Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap'
import AddIcon from '@material-ui/icons/Add'
import axios from 'axios'

// Modal.setAppElement('#root')

class HandoutAdd extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       title: '',
       file: '',
       message: '',
       fileName: 'Choose FIle',
       uploadPercentage: 0
    }
  }

  changeHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  changeFileHandler = e => {
    this.setState({file: e.target.files[0]})
    this.setState({fileName: e.target.files[0].name})
   }
    
   submitHandler = async e => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('title', this.state.title)
    formData.append('file', this.state.file)
    console.log(this.state.news)

    if (this.state.file.type.split('/')[0] === 'application') {
      try {
        const res = await axios.post('/handout/addHandout', formData, {
          headers : {
            'Content-Type' : 'multipart/form-data'
          },
          onUploadProgress: progressEvent => {
            this.setState({uploadPercentage: (parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)))})
          }
        } )
        if(this.state.uploadPercentage === 100){
          this.setState({message: 'Handout Added!'})
        }
        console.log(this.state.uploadPercentage)
        console.log(res.data)
      } catch (err) {
        if(err.response.status === 500) {
          this.setState({message: 'There was a problem with the server!'})
          // console.log(err)
        } else if (err.response.status === 400){
          this.setState({message: 'Could not upload, try again later'})
        } 
        else {
          this.setState({message: err.response.data.msg})
          // console.log(err.response.data.msg)
        }
      }
    }

    else {
      this.setState({message: 'Please select a document'})
    }

  }
  


    state = {
        isOpen: false
      };
    
      openModal = () => {
        this.setState({
          isOpen: true
        });
      };
    
      hideModal = () => {
        this.setState({
          isOpen: false
        })
        window.location.reload(false)
      };
    

    render() {
        return (
            <div>
 <button className='btn btn-primary m-3' onClick={this.openModal}>
<AddIcon/> Add a handout
         </button>

          <Modal isOpen={this.state.isOpen} onRequestHide={this.hideModal} onRequestClose={this.hideModal}>
              <ModalHeader>
                {/* <ModalClose onClick={this.hideModal}/> */}
               Add a handout
              </ModalHeader>
              <ModalBody>
                {/* <hr/> */}
                <Form onSubmit={this.submitHandler}>
                <Form.Group controlId="formBasicTitle">
    {/* <Form.Label>Seminar Title</Form.Label> */}
    <Form.Control type="text" placeholder="Title"  onChange={this.changeHandler} name='title' value={this.state.title} required/>
  </Form.Group>
  <Form.Group>
  <Form.File id="exampleFormControlFile1" type='file' onChange={this.changeFileHandler}  accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.pdf" required/>
  </Form.Group>
  <p style={{color: 'red'}}><i>{this.state.message}</i></p>
<div className='mb-3'>
<ProgressBar striped variant="success" now={this.state.uploadPercentage} label={`${this.state.uploadPercentage}%`} />
</div>
  <Button variant='primary' type='submit'>Add</Button>
</Form>


              </ModalBody>
              <ModalFooter>
                <button className='btn btn-default' onClick={this.hideModal}>
                  Close
                </button>
              </ModalFooter>
            </Modal>
            </div>

    
        )
       
    }

}

export default HandoutAdd

