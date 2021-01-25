import React from 'react'
import {Col, Card, Row} from 'react-bootstrap'
import HallModal from '../../src/hall/HallModal'
// import axios from 'axios'
// import {storage} from '../../../firebase/firebase'

const HallContent = (props) => {


    // const deleteHandler = () => {
    //     axios.delete(`/hall/deleteHall/${props.id}`)
    //     .then(() => {
    //         const deleteRef = storage.ref().child(`hall/${props.file}`)
    //         deleteRef.delete().then(function() {
    //             window.location.reload(false)
    //         }).catch(function(error) {
    //             alert('Could not delete. Try again later!')
    //         })
    //     })
    //     .catch(()=>{
    //         alert('Could not delete. Try again later')
    //     })
    // }

    return (
<div>
<Col md={6} lg={4}>
    <Card style={{minHeight: "450px", margin:"10px",  boxShadow: '0px 2px 10px rgba(0,0,0,0.15)'}}>
        <img className="card-img-top" style={{objectFit: "cover", height: "25vh"}} 
        src={props.url} 
        alt="Card"/>
            <div className="card-body">
                <h5 className="card-title"><b>{props.title.substring(0, 40)}</b></h5>
                <div className="card-text">
                {/* <p><a href="#">link</a></p> */}
                {/* <p><Button variant="link">{props.link.substring(0, 20)}</Button></p> */}
                {/* <p><a href={props.link}>{props.link.substring(0,20)}</a></p> */}
                <p>{props.info.substring(0, 100)}</p>
                </div>
            </div>
            <Row className='mb-2' style={{margin: 'auto auto'}}>
            {/* <NewsModal/> */}
            <HallModal date={props.date} info={props.info} name={props.name} url={props.url} title={props.title} />
            {/* <Button variant='outline-danger' onClick={deleteHandler} className='mb-2'>Delete</Button> */}
            </Row>
            </Card>
            </Col>
</div>
    )
}

export default HallContent