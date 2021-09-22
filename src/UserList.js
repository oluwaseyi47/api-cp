import React, {useState, useEffect} from 'react'
import { Card } from 'react-bootstrap'
import axios from 'axios'

const UserList = () => {
    const [userList, setUserList] = useState([]);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then( result => setUserList(result.data))
    }, [])

    return (
        <div className='conatiner mt-5 col-sm-9 data-base' >
            <h1>COMPANIES' DATABASE</h1>
            { userList.map( user =>
            <Card key = {user.id} classname='mt-5'>
            <Card.Header><h2>Company Name: {user.company.name}</h2></Card.Header>
            <Card.Body>
                <Card.Title> <h3>Username: {user.username}</h3></Card.Title>
                <Card.Text> <h3>Website: {user.website} </h3></Card.Text>
                <Card.Text> <h3>Email: {user.email}</h3></Card.Text>
                <Card.Text> <h3>Phone Number: {user.phone}</h3></Card.Text>
                <Card.Text> <h3>Zipcode: {user.address.zipcode}</h3></Card.Text>
                <Card.Text> <h3>Street: {user.address.street}</h3></Card.Text>
                <Card.Text> <h3>What we do: {user.company.catchPhrase}</h3></Card.Text>     
            </Card.Body>
            </Card> )}
        </div>
    )
}


export default UserList