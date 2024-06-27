
import React, { useCallback, useState } from 'react';

const Projects = () => {
    const [link,setLink] = useState()
    const handlebutton = useCallback(()=>{
        setLink(prevShowlinks => !prevShowlinks)
    },[])

    const links = [
        {
            url:'https://github.com/swathi929/E-com-React.git',
            name : 'E commerce website Reactjs',
            Image:'https://5.imimg.com/data5/SELLER/Default/2022/7/LY/RQ/MJ/155144775/86-odms-indiamart-1--500x500.png',
            alt:'1',
        },
        {
            url:'https://github.com/swathi929/WeatherAPI.git',
            name : 'weatherAPI React',
            Image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTStJoK6S2fQLI9tpc-w7pbnZhz5Wll0ZvdwA&s',
            alt:'2',
        },
        {
            url:'https://github.com/swathi929/travel.git',
            name : 'Tour & travel',
            Image:'https://img-c.udemycdn.com/course/750x422/2279670_2d3a.jpg',
            alt:'3',
        }
    ]
    return(
        <div className='projects' id='projects'>
            <div className='pro'>
            <button onClick={handlebutton} className='project-button'> { link ? 'HIDE GITHUB LINKS ' : 'SHOW GITHUB LINKS' }</button>
            </div>
            <div className='project-links'>
            {link && (
              <div>
                {links.map((e,i)=>{
                    return(
                    <a key={i} href={e.url} className='link-url'>
                        <img src={e.Image }alt={e.alt} className='link-image'/>
                        <a href={e.url} className='link-name'>{e.name}</a>
                    </a>
                    )
                })}
              </div>
            )}
            </div>
        </div>
    
    )
};

export default Projects;