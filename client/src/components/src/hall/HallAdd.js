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
import {storage} from '../../../firebase/firebase'

// Modal.setAppElement('#root')

class HallAdd extends Component {

constructor(props) {
  super(props)

  this.state = {
     title: '',
     name: '',
     info: '',
     file: '',
     fileName: 'Choose File',
     message: '',
     uploadPercentage: '0',
     progress: ''
  }
}

changeHandler = e => {
  this.setState({[e.target.name]: e.target.value})
}

changeFileHandler = e => {
  this.setState({file: e.target.files[0]})
  this.setState({fileName: Date.now() + e.target.files[0].name})
 }

 submitHandler = async e => {
  e.preventDefault()
  let formData = new FormData()
  formData.append('title', this.state.title)
  formData.append('file', this.state.file)
  formData.append('name', this.state.name)
  formData.append('fileName', this.state.fileName)
  formData.append('info', this.state.info)

  const insert = async () => {
    const uploadTask = storage.ref(`/hall/${this.state.fileName}`).put(this.state.file)
      uploadTask.on('state_changed',
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
        this.setState({progress: progress})
      },
      (error) => {
        console.log(error)
      },
      async (complete) => {
        try {
          const url = await storage.ref('hall').child(this.state.fileName).getDownloadURL()
          formData.append('url', url)
          const res = await axios.post('/hall/addHall', formData, {
            headers : {
              'Content-Type' : 'multipart/form-data'
            },
            onUploadProgress: progressEvent => {
              this.setState({uploadPercentage: (parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)))})
            }
          } )
          if(this.state.uploadPercentage === 100){
            this.setState({message: 'Added!'})
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
      })
  }

  if (this.state.file.length < 1) {
    insert()
  }
  else {
  if (this.state.file.type.split('/')[0] === 'image'){
    insert()
  }
  else {
    this.setState({message: 'Select an image'})
  }
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
  });
  window.location.reload(false)
};

render() {
  return (
    <div>
      <button className='btn btn-primary m-3' onClick={this.openModal}>
<AddIcon/> Add a hall or club
         </button>

         <Modal isOpen={this.state.isOpen} onRequestHide={this.hideModal} onRequestClose={this.hideModal}>
         <ModalHeader>
                {/* <ModalClose onClick={this.hideModal}/> */}
               Add a hall or club
              </ModalHeader>
              <ModalBody>
              <Form onSubmit={this.submitHandler}>

              <Form.Group controlId="formBasicTitle">
    {/* <Form.Label>Seminar Title</Form.Label> */}
    <Form.Control type="text" placeholder="Title"  onChange={this.changeHandler} name='title' value={this.state.title} required/>
  </Form.Group>

  <Form.Group controlId="formBasicTitle">
    {/* <Form.Label>Seminar Title</Form.Label> */}
    <Form.Control type="text" name='name'  onChange={this.changeHandler} value={this.state.name} placeholder="Name" required/>
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
<Form.Control as="textarea" rows="3" name='info' value={this.state.info} onChange={this.changeHandler} placeholder="Product Info" required />
</Form.Group>

<Form.Group>
<Form.File id="exampleFormControlFile1" type='file' onChange={this.changeFileHandler} accept="image/*" required/>
  </Form.Group>



              <p style={{color: 'red'}}><i>{this.state.message}</i></p>
<div className='mb-3'>
<ProgressBar striped variant="success" now={this.state.progress} label={`${this.state.progress}%`} />
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
export default HallAdd