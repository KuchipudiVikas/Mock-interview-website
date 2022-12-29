import { Alert, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const ComingSoon = () => {

    return (
        <div className="">
            <Alert variant={'primary'}>
                Feature coming soon!.
                <Button variant="link"><Link to={'/'}>Home</Link></Button>
            </Alert>
        </div>
    )
}
export default ComingSoon;