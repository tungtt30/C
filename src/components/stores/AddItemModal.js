import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useContext, useState } from 'react'
import { StoreContext } from '../../contexts/StoreContext'




const AddItemModal = () => {
    //context
    const { showAddStoreModal, setShowAddStoreModal, addStore, getStores } = useContext(StoreContext)

    // State
    const [newStore, setNewStore] = useState({
        item: '',
        description: '',
        cost: '',
        image: '',
    })
    const { item, description, cost, image } = newStore
    const onChangeNewStoreForm = event => setNewStore({ ...newStore, [event.target.name]: event.target.value })

    const closeDialog = () => {
        resetAddStoreData()
    }
    const onSubmit = async event => {
        event.preventDefault()
        const { success, message } = await addStore(newStore)
        resetAddStoreData()
        // setShowToast({ show: true, message, type: success ? 'success' : 'danger' })
        getStores()
    }
    const resetAddStoreData = () => {
        setNewStore({ item: '', description: '', cost: '', image: "" })
        setShowAddStoreModal(false)
    }

    return (

        <Modal show={showAddStoreModal} onHide={closeDialog}>
            <Modal.Header closeButton>
                <Modal.Title>Whatsupp</Modal.Title>
            </Modal.Header>
            <Form onSubmit={onSubmit}>
                <Modal.Body>
                    <Form.Group className='my-2'>
                        <Form.Control type='text' placeholder='Title' name='item' required aria-describedby='title-help' value={item} onChange={onChangeNewStoreForm} />
                        <Form.Text id='title-help' muted>Required</Form.Text>
                    </Form.Group>
                    <Form.Group className='my-3'>
                        <Form.Control as='textarea' rows={3} placeholder='Description' name='description' value={description} onChange={onChangeNewStoreForm} />
                    </Form.Group>
                    <Form.Group className='my-3'>
                        <Form.Control type='text' placeholder='Cost' name='cost' value={cost} onChange={onChangeNewStoreForm} />
                    </Form.Group>
                    <Form.Group className='my-3'>
                        <Form.Control type='text' placeholder='image url' name='image' value={image} onChange={onChangeNewStoreForm} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={closeDialog}>Cancel</Button>
                    <Button variant='primary' type='submit'>Submit</Button>
                </Modal.Footer>
            </Form>
        </Modal>

    )
}
export default AddItemModal