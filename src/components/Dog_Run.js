import React, {useState, useEffect} from 'react' 
import { useLocation } from 'react-router-dom'
import PSKNavBar from './PSKNavBar'
import KennelCard from './Kennels/KennelCard.js' 
import '../css/component.scss'

const LARGE_DOG_INFO = "These are built for large pets perfect for high energy dogs that require huge amounts of daily exercise."
const DOG_FACTS = "Some breeds need more exercise than others to prevent bad behavior (digging, chewing, excessive woofing, etc.) and maintaining healthy weight, it’s necessary to stay in great shape physically and mentally."

const DogRun = ({pathname}) =>{ 
    const location = useLocation();
    const [prop, setProp] = useState(); 

    useEffect(() => {
        let myPath = location.pathname.replace (/\//g, "_");
        setProp(myPath) 
      }, [location])

      const makeCards = () => <KennelCard />
        
    return(<div className='pl-2 pt-4 kennels bg-dark justify-content-between mx-auto'>
            <PSKNavBar fadeState={{fade: 'fade-out'}} pathname={prop}/>
            <p className='pt-2 text-center text-warning'>{LARGE_DOG_INFO}</p>
            <p className='text-center  text-warning'>{DOG_FACTS}</p>
            <span className='d-flex  flex-row  px-auto mx-auto cent overflow-hidden'>
            {makeCards()} 
            </span>
            </div>)
}
export default DogRun