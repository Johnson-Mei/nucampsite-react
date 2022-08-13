import {Col} from 'reactstrap';
import { PARTNERS } from '../../app/shared/PARTNERS';

import Partner from '../../components/Partner';
import { selectAllPartners } from './partnersSlice';

import { useSelector } from 'react-redux';

const PartnersList = () => {

    const partners = useSelector(selectAllPartners);

    return (
        <Col>
            {partners.map((partner) => {
            return (
                <div className='d-flex mb-5' key={partner.id}>
                    <Partner  partner={partner}   />
                </div>                
            )
        }
        )
        }  
        
        </Col>
    )

}



// import {Col, Row} from 'reactstrap';
// import CampsiteCard from '../campsites/CampsiteCard';
// import { selectAllCampsites }  from '../campsites/campsitesSlice';

// const PartnersList = () => {
    
//     const campsites = selectAllCampsites();

//     return (
//         <Row class='ms-auto'> 
//             {campsites.map((campsite) => {
//                 return (

//                     <Col 
//                         md='5' 
//                         className='m-4' 
//                         key={campsite.id}
//                         >
//                         <CampsiteCard campsite={campsite} />
//                     </Col>
                
//                 );
//             })}
//         </Row>
//     )
// }


export default PartnersList