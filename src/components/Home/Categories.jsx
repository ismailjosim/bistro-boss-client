import React from 'react';
import SectionHeading from '../../utils/SectionHeading';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Categories = () => {
    const images = [
        "https://i.ibb.co/nQ8xhBp/category08.jpg",
        "https://i.ibb.co/zQqqRXM/category07.jpg",
        "https://i.ibb.co/Ssc5XRv/category06.jpg",
        "https://i.ibb.co/grVp3T1/category05.jpg",
        "https://i.ibb.co/27fFxWP/category04.jpg",
        "https://i.ibb.co/BGwK5VJ/category03.jpg",
        "https://i.ibb.co/qF4zK1w/category02.jpg",
        "https://i.ibb.co/DgBHBdt/category01.jpg"
    ];

    return (
        <section className='w-11/12 mx-auto'>
            <SectionHeading primary={ "Check it out" } secondary={ "FROM OUR MENU" } />
            <div className='my-10'>
                <Slide
                    slidesToScroll={ 1 }
                    slidesToShow={ 4 }
                    indicators={ true }
                    arrows={ false }
                    autoplay={ true }
                    infinite={ true }
                >
                    { images.map((item, index) => {
                        return <div style={ {
                            'backgroundImage': `url(${ item })`,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            backgroundSize: 'cover',
                            height: '350px',
                            margin: '0 1rem'
                        } }>
                            <div className='bg-black/40 text-white py-2 w-full text-center text-2xl font-medium uppercase'>
                                <h3 className=''>Salad</h3>
                            </div>
                        </div>

                    }) }
                </Slide>
            </div>
        </section>
    );
};

export default Categories;

