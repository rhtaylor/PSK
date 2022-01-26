
import React from 'react';
import ImageGallery from 'react-image-gallery'; 
import { Row, Col } from 'reactstrap'; 
import { useLocation } from 'react-router-dom';
import PSKNavBar from './components/PSKNavBar';
import icon from './images/pskicon.png' 
import thumb_icon from './images/thumb_pskicon.png'
import wrap_kennel from './images/WrapAroundKennel.jpg'
import thumb_wrap_kennel from './images/thum_WrapAroundKennel.jpg' 
import thumb_flying_kennel from './images/thumb_Flying-Dog-Kennel.jpg' 
import flying_kennel from './images/Flying-Dog-Kennel.jpg'
import thumb_dog_kennel_sale from './images/thumb_dog_kennel_for_sale.jpg' 
import dog_kennel_sale from './images/dog_kennel_for_sale.jpg'
import thumb_run from './images/thumb_Wolf-Lady-Run.jpg' 
import run from './images/Wolf-Lady-Run.jpg' 
import thumb_fountain_hills from './images/thumb_Fountain-Hills-Dog-Kennel.jpg' 
import fountain_hills_kennel from './images/Fountain-Hills-Dog-Kennel.jpg' 
import box_kennel from './images/low-Profile-Dog-Kennel.jpg' 
import thumb_box from './images/thumb_low-Profile-Dog-Kennel.jpg' 
import cat_kennel from './images/Cats_best_kennel.jpg' 
import thumb_cat_kennel from './images/thumb_Cats_best_kennel.jpg'
import corner_kennel from './images/California-Kennel-A.jpg'
import thumb_corner_kennel from './images/thumb_California-Kennel-A.jpg'
import many_dogs_kennel from './images/many_dogs_Interior-Dog-Kennels.jpg'
import many_dogs_kennel_thumb from './images/thumb_many_dogs_Interior-Dog-Kennels.jpg' 
import cute_dog_thumb from './images/thumb_cute_dog_in_kennel.jpg' 
import cute_dog from './images/cute_dog_in_kennel.jpg'
const Pics = ({fadeState}) =>{ 
    const location = useLocation() 


const slideImages = [ 
{original:icon, thumbnail: thumb_icon},
{original: many_dogs_kennel, thumbnail: many_dogs_kennel_thumb},
{original: corner_kennel, thumbnail: thumb_corner_kennel},
{original: cat_kennel, thumbnail: thumb_cat_kennel},
{original: wrap_kennel, thumbnail: thumb_wrap_kennel }, 
{original: cute_dog, thumbnail: cute_dog_thumb},
{original: flying_kennel, thumbnail: thumb_flying_kennel},
{original: dog_kennel_sale, thumbnail: thumb_dog_kennel_sale},
{original: run, thumbnail: thumb_run}, 
{original: fountain_hills_kennel, thumbnail: thumb_fountain_hills}, 
{original: box_kennel, thumbnail: thumb_box}
] 



return(<Row className='pt-4'> 
         <Col> 
           
            <div className='d-flex justify-content-center align-content-center'>
             <ImageGallery items={slideImages} autoPlay={true} originalHeight={{"height": "10%"}} sizes={{"height": "100px", "width": "100px"}}/>
            </div>  
            <PSKNavBar pathname={location.pathname} fadeState={{fade: 'fade-out'}}/>
         </Col>
        </Row>
    )
}

export default Pics