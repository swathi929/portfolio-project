

import React from 'react';

const About = () => {
    let render = true
    let array = [
        'Hello! Im gandikota swathi, a dedicated and passionate web developer with  dynamic and responsive websites and web applications. My journey in web development started Socialtek.in with internship.',
        'I specialize in front-end development using modern technologies such as React, Redux, and JavaScript. I also have a strong background in back-end development with Node.js and MongoDB. My skill set allows me to create full-stack applications that are both visually appealing and highly functional.',
        'Throughout my career, I have worked on a variety of projects ranging from small business websites to large-scale applications. My ability to adapt and learn new technologies quickly has been a key factor in my success as a web developer. I am always looking for new challenges and opportunities to grow professionally.',
        'When Im not coding, I enjoy exploring the outdoors, reading tech blogs, and contributing to open-source projects. I believe that a healthy work-life balance is essential for maintaining creativity and productivity.',
        'Feel free to browse through my portfolio to see some of the projects Ive worked on. If you have any questions or would like to discuss potential collaborations, please dont hesitate to contact me.'
     ]
    return (
        <div className='about' id='about'>
            <div className='about-content'>
                <h1>ABOUT</h1>
                    {render && array.map((e,i)=>{
                        return(
                        <ul key={i} className='about-list'>
                            <li>{e}</li>
                        </ul>
                        )
                    })
                      }
            </div>
        </div>
    );
};

export default About;