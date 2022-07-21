import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap'

const About = () => {
    return (
        <Container>
            <Row style={{ margin: '100px auto' }}>
                <Col>
                    <Button variant='primary'
                        href='https://github.com/tungtt30'
                        size='lg'
                        target="_blank"
                    >
                        Visit github
                    </Button>
                </Col>
            </Row>
        </Container>

    )
}


export default About