import React, {useState, useEffect} from 'react'
import '../src.css'
// import NewsContent from './NewsContent'
import HallContent from './HallContent'
import {Container, Row, Spinner} from 'react-bootstrap'
// import NewsSearch from '../../student/news/NewsSearch'
import HallAdd from './HallAdd'
import axios from 'axios'
import Search from '../Search'

const Hall = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [query, setQuery] = useState(null)

    useEffect(()=> {
        if(query !== null){
            axios.get(`/hall/searchHall/${query}`)
            .then((res)=>{
                setItems(res.data)
                setLoading(false)
            })
        } else {
            axios
            .get('/hall/getHall')
            .then((res)=> {
                setItems(res.data)
                setLoading(false)
            })
            .catch(()=> {
                setLoading(false)
                alert('Error retrieving data')
            })
        }   
    },[query])

    function handleQueryRequest(data) {
        setQuery(data)
        console.log(query)
    }

    return (
        <div className='wrapper'> 
            <Container>
            <Row>
            <h1 style={{fontSize: '60px'}} className='text-muted'>Halls and Clubs</h1>
                <HallAdd/>
            </Row>
        <hr/>
        <Search query={query} onChange={handleQueryRequest} />
        <Row style={{overflow: "auto", height: "600px"}} className='text-center' > 
        { loading ?
          <div style={{marginLeft: '50%'}}>
          <Spinner animation="border" variant='primary' size='lg' /> 
          </div>
              :
            items.map(item => (
                <HallContent key={item._id} id={item._id} date={item.createdAt} url={item.url} info={item.info} name={item.name} title={item.title} file={item.file} />
            ))
            }
        </Row>
        </Container> 
        </div>
    )
}

export default Hall
