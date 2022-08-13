import { Col, Row } from 'reactstrap';
import DisplayCard from './DisplayCard';
import { useSelector } from 'react-redux/es/exports';
import { selectFeaturedCampsite} from '../campsites/campsitesSlice';
import { selectFeaturedPromotions} from '../promotions/promotionsSlice';
import { selectFeaturedPartner } from '../partners/partnersSlice';

const DisplayList = () => {
    const items = useSelector((state) => [
            selectFeaturedCampsite(state), 
            selectFeaturedPromotions(state), 
            selectFeaturedPartner(state)
        ]);

    return (
        <Row>
            {items.map((item,idx) => {
                
                return (
                    <Col md className ='m-1' key={idx}>
                        <DisplayCard item={item}/>
                    </Col>
                );

            })}
        </Row>
    );
}

export default DisplayList;