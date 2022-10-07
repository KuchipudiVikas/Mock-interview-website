import SelectedPreview from '../../components/selected-preview/selected-preview.component'
import SelectCard from '../../components/select-cards/select-cards.component'
import { useNavigate } from 'react-router-dom'


import { Container, Row, Col, Button } from 'react-bootstrap'
const Preferences = () => {

    const navigate = useNavigate()
    return (
        <div><Container>
            <Row>
                <Col sm={8}>

                    <SelectCard />

                </Col>
                <Col sm={4}>

                    <SelectedPreview />


                </Col>
            </Row>
        </Container>



        </div>
    )
}

export default Preferences