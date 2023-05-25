import React from 'react';
import SectionHeading from '../../utils/SectionHeading';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Categories = () => {
    const images = [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
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
                        return <div key={ index } className="each-slide-effect">
                            <div style={ {
                                'backgroundImage': `url(${ item })`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundSize: 'cover',
                                height: '350px',
                                margin: '0 1rem'
                            } }>
                            </div>
                        </div>
                    }) }
                </Slide>
            </div>
        </section>
    );
};

export default Categories;

