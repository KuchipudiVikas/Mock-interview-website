import { Col, Button } from 'react-bootstrap'
import { OPTIONS, useRecordWebcam } from 'react-record-webcam'
import { useEffect } from 'react'
const UserVideo = () => {

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

        }
        if (recordWebcam.status == 'OPEN') {
            recordWebcam.start()
        }
    }

    return (
        <Col >
            {recordWebcam.status}
            <video className="uservideo" ref={recordWebcam.webcamRef} autoPlay muted />
            <Button onClick={toggleVideo} >
                {recordWebcam.status == 'RECORDING' ? 'STOP' : 'START'}
            </Button>


        </Col>
    )
}

export default UserVideo