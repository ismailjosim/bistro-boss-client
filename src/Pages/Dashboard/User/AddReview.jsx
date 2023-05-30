import React from 'react';
import SectionHeading from '../../../utils/SectionHeading';
import { AiFillStar } from 'react-icons/ai';
import { BsFillRocketTakeoffFill } from 'react-icons/bs';

const AddReview = () => {

    const handleReview = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const suggestion = form.suggestion.value;
        const message = form.message.value;
        const data = { name, suggestion, message };
        console.log(data);
    }




    return (
        <div>
            <SectionHeading primary={ 'sharing is caring' } secondary={ 'give a review...' } />
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto w-11/12">
                    <h2 className="text-3xl uppercase text-center font-semibold font-cinzel ">rate us</h2>
                    <div className='flex justify-center items-center mt-5 text-[#D0D0D0]'>
                        <AiFillStar size={ 40 } />
                        <AiFillStar size={ 40 } />
                        <AiFillStar size={ 40 } />
                        <AiFillStar size={ 40 } />
                        <AiFillStar size={ 40 } />
                    </div>
                    <form onSubmit={ handleReview } className="mb-0 mt-6 space-y-4 rounded-lg p-4  sm:p-6 lg:p-8">
                        <div className="form-control w-full">
                            <label htmlFor="name" className="label">
                                <span className="label-text">Which recipe you liked most?</span>
                            </label>
                            <input
                                type="text"
                                name='name'
                                placeholder="Recipe you liked most"
                                className="input input-bordered input-primary w-full"
                                required
                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Do you have any suggestion for us?</span>
                            </label>
                            <input
                                type="text"
                                name='suggestion'
                                placeholder="Suggestion"
                                className="input input-bordered input-primary w-full"
                                required

                            />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Kindly express your care in a short way.</span>
                            </label>
                            <textarea
                                name='message'
                                className="textarea textarea-primary"
                                aria-expanded={ false }
                                placeholder="Review in detail"
                                required
                            ></textarea>
                        </div>
                        <div>
                            <button type='submit'
                                className='btn btn-primary rounded-md text-white capitalize flex gap-2'
                                style={ {
                                    backgroundImage: 'linear-gradient(90deg, #835D23 0%, #B58130 100%)'
                                } }
                            >
                                <span>Send Review</span>
                                <BsFillRocketTakeoffFill size={ 15 } />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;
