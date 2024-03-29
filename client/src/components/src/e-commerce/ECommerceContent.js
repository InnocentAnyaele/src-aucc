import React from 'react'
// import image from '../../../assets/img/img1.jpg'
import {Col, Card, Row, Button} from 'react-bootstrap'
import ECommerceReadModal from '../../student/e-commerce/ECommerceReadModal'
import ECommerceBuyModal from '../../student/e-commerce/ECommerceBuyModal'
import DeleteIcon from '@material-ui/icons/Delete'
import axios from 'axios'
import {storage} from '../../../firebase/firebase'

const ECommerceContent = (props) => {

    const deleteHandler = () => {
        axios.delete(`/ecommerce/deleteEcommerce/${props.id}&${props.file}`)
        .then(()=> { 
            const deleteRef = storage.ref().child(`eCommerce/${props.file}`)
            deleteRef.delete().then(function() {
                window.location.reload(false)
            }).catch(function(error){
                alert('Could not delete. Try again later!')
            })
        })
        .catch(()=> {
            alert('Could not delete. Try again later!')
        })
        console.log(props.id)
    }
    
  return (
<Col md={6} lg={4}>
    <Card style={{minHeight: "450px", margin:"10px",  boxShadow: '0px 2px 10px rgba(0,0,0,0.15)'}}>
        <img className="card-img-top" style={{objectFit: "cover", height: "25vh"}} src={props.url} alt="Card"/>
            <div className="card-body">
                <h3 className="card-title"><b>{props.title.substring(0,40)}</b></h3>
                <div className="card-text">
                <div className='text-center'>
                <p style={{fontSize: '20px'}} className='text-muted'><b>Vendor - </b> {props.name.substring(0,20)}</p>
               <p style={{fontSize: '20px'}} className='text-muted'><b>Price - </b> {props.price.substring(0,20)}</p>
                <p style={{fontSize: '20px'}} className='text-muted'><b>Description - </b> {props.info.substring(0,20)}</p>
                </div>
                </div>
            </div>
            <Row className='mb-2' style={{margin: 'auto auto'}}>
            <ECommerceReadModal id={props.id} url={props.url} name={props.name} title={props.title} price={props.price} email={props.email} phone={props.phone} type={props.type} info={props.info} date={props.date} file={props.file}/>
                <ECommerceBuyModal id={props.id} name={props.name} title={props.title} price={props.price} email={props.email} phone={props.phone} type={props.type} info={props.info} date={props.date} file={props.file} />
                <Button variant='danger' onClick={deleteHandler}><DeleteIcon/></Button>
            </Row>
            </Card>
            </Col>
  )
}

export default ECommerceContent