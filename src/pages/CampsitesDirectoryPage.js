import {Container} from 'reactstrap'
import SubHeader from '../components/SubHeader' 
import CampsitesList from '../features/campsites/CampsitesList'

// import { selectRandomCampsite } from '../features/campsites/campsitesSlice.js'
// import { selectCampsiteById } from '../features/campsites/campsitesSlice.js'

const CampsitesDirectoryPage = () => {

    return (
        <Container>
            <SubHeader current='Directory'/>
            <CampsitesList />
        </Container>
    )
}

export default CampsitesDirectoryPage