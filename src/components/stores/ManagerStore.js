
import { Card } from "react-bootstrap"
import { useContext, useEffect, useState } from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { StoreContext } from "../../contexts/StoreContext"
import SingleStore from "../stores/SingleStore"
import Spinner from "react-bootstrap/Spinner"
import { AuthContext } from "../../contexts/AuthContext"


const ManagerStore = () => {
    const { storeState: { store, stores, storesLoading }, getUserStore } = useContext(StoreContext)
    const { authState: { user: { username } } } = useContext(AuthContext)


    useEffect(() => getUserStore(username), [])

    let body = null

    if (storesLoading) {
        body = (
            <div className="spinner-container" >
                <Spinner animation='border' variant='info' />
            </div>
        )
    } else if (stores.length === 0) {
        body = (
            <>
                <Card className='text-center mx-5 my-5'>
                    <Card.Header as='h1'>Hi </Card.Header>
                    <Card.Body>
                        <Card.Title>Welcome</Card.Title>
                        <Card.Text>Click button</Card.Text>
                    </Card.Body>
                </Card>
            </>
        )
    } else {
        body = (
            <div className="grid__row">
                {stores.map(store => (
                    <SingleStore key={store.item} store={store} />
                ))}

            </div>
        )
    }

    return (
        <Container>
            <Row>
                <h1>hehe</h1>
                {body}
            </Row>
        </Container>
    )
}

export default ManagerStore