import React from 'react';

const Loading = ({ progress }) => {
    return (
        <>
            <div className="bg-gray-100">
                <div className="bg-white py-20">
                    <div>
                        <p className="text-6xl font-semibold leading-10 text-center text-gray-800">35%</p>
                        <p className="text-lg leading-none text-center text-gray-600 mt-6">Loading ... Please Wait</p>
                        <div className="mt-6">
                            <svg
                                className="mx-auto"
                                width={ 305 }
                                height={ 5 }
                                viewBox="0 0 305 5"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect width={ 305 } height={ 5 } rx="2.5" fill="#E5E7EB" />
                                <rect width={ `${ progress }%` } height={ 5 } rx="2.5" fill="#E8646D" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Loading;
