
import React, { useRef } from 'react';


const Home = () => {
    const greeting = useRef('HELLO ')
    const name = useRef('IM  gandikota swathi')
    const intro = useRef('Im a passionate Web Developer with a knack for creating dynamic and responsive web applications.')


    return (
        <div className='home' id='home'>
            <div className='home-content'>
            <p className='home-greet'>{greeting.current} <box-icon name='happy-alt'></box-icon></p>
            <p className='home-name'>{name.current}</p>
            <p className='home-intro'>{intro.current}</p>
 
            <div>
            <box-icon type="logo" name="facebook-square"></box-icon>
            <box-icon type="logo" name="instagram"></box-icon>
            <box-icon type="logo" name="twitter"></box-icon>
            <box-icon type="logo" name="youtube"></box-icon>
            <box-icon type="logo" name="linkedin"></box-icon>
            </div>
             
               <div style={{position:'relative',top:'50px'}}>
                 <a href='https://drive.google.com/file/d/14-_L2C37fp8UI4KR2cTfP6muwms83NHF/view?usp=drivesdk'><box-icon type='solid' name='file-pdf'></box-icon></a>
               </div>

            </div>
            <div>
            <img src='https://image.remaker.ai/datarm/face-swap/ai_face_vary/2024-06-04/output/87436ecd-71e8-46e0-81f6-af7f5bb204d7.png' alt='' className='home-image'/>
            </div>
        </div>
    );
};

export default Home;
