import React, {Component} from 'react'
import {Card} from 'react-bootstrap'
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap'

class HallModal extends Component {
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
      };
    
      render () {
          return (
              <div>
                  <button className='btn btn-outline-primary mr-2 mb-2'  onClick={this.openModal}>
Read
         </button>

          <Modal isOpen={this.state.isOpen} onRequestHide={this.hideModal} onRequestClose={this.hideModal} style={{wordWrap: "break-word"}}>
              <ModalHeader >
               <p><b>{this.props.title}</b></p>
              </ModalHeader>
              <ModalBody>
              
              <Card>
                  <img 
                  className="modal-img"
                   src={this.props.url} 
                   alt="card"/>
              </Card>

                <hr/>
                {/* <p className='text-center'><a href={this.props.link}>{this.props.link}</a> </p> */}
                <p>{this.props.info}</p>
                <p className='text-center'><b>{this.props.name}</b></p>
                <p className='text-center text-muted'>{this.props.date}</p>

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

export default HallModal