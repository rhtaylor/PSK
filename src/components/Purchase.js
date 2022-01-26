import { useEffect, useState } from "react"
import { Row, Col } from "reactstrap"
import PSKNavBar from "./PSKNavBar" 
import { useLocation } from "react-router-dom" 
import Footer from "./Footer"
import flag from '../images/american_flag.jpg'
const Purchase = ({fadeState}) => { 
    let location = useLocation(); 
    const [prop, setProp] = useState();  

    useEffect(() => {
        let myPath = location.pathname.replace (/\//g, "_");
        setProp(myPath) 
      }, [location]) 
    return(
        <Row className="pl-2 pt-4">
            <Col> 
                <PSKNavBar pathname={prop} fadeState={{fade: 'fade-out'}}/> 
                <p className="text-center southWest pl-2">Our Kennels start at $2600</p> 
                <p className="text-center text-warning southWest pl-2">With current Steel Prices, supply chain problems, and gas our prices have gone up</p>
                <p className="text-center text-warning southWest pl-2">However these are luxury items, hand crafted by craftsmen</p>
                <p className="text-center text-warning southWest pl-2">American Made <img src={flag} alt='made in america' /></p>
                <p className="text-center text-warning southWest pl-2">Guaranteed to keep your pet safe and last a decade or more</p>  
                <p className="text-center text-warning southWest pl-2">If you are comfortable with the price and have read our Procedure under the 'Kennels' section call:</p>
                <p className="southWest text-danger text-center">(520)730-7020</p>

                <Footer />
            </Col>
        </Row>
    )
} 

export default Purchase