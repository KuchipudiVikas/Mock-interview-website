import SelectedPreview from '../../components/select-cards/selected-preview/selected-preview.component'
import SelectCard from '../../components/select-cards/select-cards.component'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { questionsContext } from '../../contexts/questions.context'
import { useContext } from 'react'
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