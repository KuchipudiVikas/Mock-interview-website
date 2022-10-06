import React from 'react'
import { useNavigate } from 'react-router-dom'
import './home.styles.css'

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="main">
            <div className="mt-16 container mu-3 d-flex justify-content-center ">
                <div className="row">
                    <div className="col-sm">
                        <div className="card" style={{ width: "18rem" }} onClick={() => {
                            navigate('preferences')
                        }}>
                            <div className="card-body">
                                <h5 className="card-title">self interview</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card" style={{ width: "18rem" }} onClick={() => {
                            navigate('mockinterview')
                        }}>
                            <div className="card-body">
                                <h5 className="card-title">Virtual assistant</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="card-link">Card link</a>
                                <a href="#" className="card-link">Another link</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Home