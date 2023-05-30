import React from 'react';
import SectionHeading from '../../../utils/SectionHeading';
import { BsFillRocketTakeoffFill } from 'react-icons/bs';

const AddItems = () => {
    return (
        <section>
            <SectionHeading primary={ "What's new?" } secondary={ 'add an item' } />
            <div className="mx-auto w-full px-4 py-16 sm:px-6 lg:px-8 bg-slate-100 rounded-sm">
                <div className="mx-auto w-11/12">
                    <form className="mb-0 space-y-4 rounded-lg p-4">
                        <div className="form-control w-full">
                            <label htmlFor="name" className="label">
                                <span className="label-text">Recipe name*</span>
                            </label>
                            <input
                                type="text"
                                name='name'
                                placeholder="Recipe name"
                                className="input input-bordered input-primary w-full"
                                required
                            />
                        </div>
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                            <div className="form-control">
                                <label htmlFor="name" className="label">
                                    <span className="label-text">Category*</span>
                                </label>
                                <input
                                    type="text"
                                    name='name'
                                    placeholder="Recipe name"
                                    className="input input-bordered input-primary w-full"
                                    required
                                />
                            </div>
                            <div className="form-control w-full">
                                <label htmlFor="name" className="label">
                                    <span className="label-text">Price*</span>
                                </label>
                                <input
                                    type="text"
                                    name='name'
                                    placeholder="Recipe name"
                                    className="input input-bordered input-primary w-full"
                                    required
                                />
                            </div>
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
                        <div className="form-control w-full">
                            <label htmlFor="name" className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                type="file"
                                name='name'
                                placeholder="Recipe name"
                                className="input input-bordered input-primary w-full"
                                required
                            />
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
        </section>
    );
};

export default AddItems;
