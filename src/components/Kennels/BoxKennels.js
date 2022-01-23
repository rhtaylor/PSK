import {useState, useCallback} from 'react' 
import {Alert, Col, Row} from 'reactstrap';
import PSKNavBar from '../PSKNavBar' 
import {v1 as uuid} from 'uuid' 
import { useLocation } from 'react-router-dom'
import KennelFrontBack from './KennelFront';
import custom_roof from '../../images/custom_roof_2.jpg' 
import low from '../../images/low.jpg'
import classic from '../../images/low-profile-small-dog.jpg' 
import barnStyle from '../../images/BAXTER-KENNEL.jpg'
const BOX_KENNEL_TITLE = 'A box kennel is a traditional style kennel.' 
const BOX_KENNEL_INFO =  'This will have a roof type of your choice: hard-top flat, Barn style, or wire. There is an optional Concrete curb that can be added for extra saftey'

const PICS = [{url: custom_roof, title: "Beautiful Wood Roof", des: 'custom ordered wood top' }, {url: low, title: 'Wire roof with a sun awning', des: 'This cute outdoor box kennel has an attached doggy door'}, 
{url: classic, title: '50:50 wire/barn roof', des: 'half wire top half barn style roof top'}, {url: barnStyle, des: 'Gorgeous hatch opening lids with gate for dogs', title: 'abaa'}]


const BoxKennels = ({fadeState}) =>{
        const location = useLocation() 
        const [prop, setProp] = useState(); 
        const [currentFliped, setFlipped] = useState([]);
        const [clicked, setState] = useState({clicked: false})  


        const handleClick = useCallback((e) =>{ 
         
            e.preventDefault() 
            let id = parseInt(e.target.id)
            
           setState((preState)=>{ 
                    return { clicked: preState.clicked === false ? true : false} }) 
           setFlipped((preState) =>{ 
                    return currentFliped.includes(id) === true  ? currentFliped.filter((i) => i != id ) :  [ id, ...currentFliped]   }) 
           setTimeout(console.log("yo"), 1000)
        }, [setState, setFlipped, currentFliped])

        const showBoxKennels = () => {
            let pictures =  PICS.map((obj, index) =><div key={uuid()} className='bg-warning cent card'>
                                     <KennelFrontBack key={uuid} id={index} des={obj.des} title={obj.title} 
                                       url={obj.url} currentFliped={currentFliped} clicked={clicked} handleClick={handleClick}
                                       /></div>) 
             return pictures
           } 


    return(<Row className='pl-2 pt-4 bg-dark'>
            <Col>
                <PSKNavBar pathname={location.pathname} fadeState={{fade: 'fade-out'}}/> 
                <p className='pt-2 text-center text-warning'>{BOX_KENNEL_TITLE}</p>
                <p className='text-center  text-warning'>{BOX_KENNEL_INFO}</p> 
                <span className='d-flex  flex-row  px-auto mx-auto  overflow-hidden justify-content-center'>{showBoxKennels()}</span>
            </Col>
           </Row>)
} 
BoxKennels.defaultProps = {

}
export default BoxKennels