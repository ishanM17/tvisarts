import {React, useState} from 'react';
import GalleryCarousel from './GalleryCarousel';
import './Gallery.css';
import paintings from '../paintings';

const buttonWidth = 200;
const tabWidth = 300;

export default function Widgets(){
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className='widget-container' id='galleryNav'>
            <header>
                <div className='tabs heading-font'>
                    {
                        paintings.map((ele, ind)=>(
                            <button
                                key={ele.id}
                                className={`widget-button ${activeIndex===ind? "active":""}`}
                                onClick={() => setActiveIndex(ind)}
                            >
                                {ele.type}
                            </button>
                        ))
                    }
                </div>
            </header>
            <div className='widget-content'>
                <GalleryCarousel items={paintings[activeIndex].items} />
            </div>
        </div>
    );
}