import { Col, Button } from 'react-bootstrap'
import { OPTIONS, useRecordWebcam } from 'react-record-webcam'
import { useEffect } from 'react'
import { useState } from 'react'
import './user-video.styles.css'
const UserVideo = () => {
    const [success, setSuccess] = useState(false)
    const OPTIONS = {
        filename: 'mockInterview',
    }
    useEffect(() => {
        recordWebcam.open()

        return () => {
            recordWebcam.close()
        }
    }, [])



    const recordWebcam = useRecordWebcam(OPTIONS);
    const toggleVideo = async () => {
        if (recordWebcam.status == 'RECORDING') {
            await recordWebcam.stop()
            recordWebcam.download()
            recordWebcam.open()
            setSuccess(false)

        }
        if (recordWebcam.status == 'OPEN') {
            recordWebcam.start()
            setSuccess(true)
        }
    }

    return (
        <Col className='mt-2'>
            {/* {recordWebcam.status} */}
            <video className="uservideo" ref={recordWebcam.webcamRef} autoPlay muted />

            <Button variant={success ? 'danger' : 'primary'}
                onClick={() => {
                    toggleVideo()
                }}
            >

                {recordWebcam.status == 'RECORDING' ? 'STOP' : 'RECORD'}
            </Button>



        </Col>
    )
}

export default UserVideo