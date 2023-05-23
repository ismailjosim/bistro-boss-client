import React from 'react';

const ChefInfo = ({ chefData }) => {
    const { avatar, name, details } = chefData;

    return (
        <div className="card mb-4 bg-white shadow-md">
            <div className="card-body justify-center items-center">
                <img
                    src={ avatar }
                    alt={ name }
                    className="rounded-full w-36 h-36 bg-slate-100"
                />
                <h5 className="my-3 text-3xl font-semibold">{ name }</h5>
                <div className="flex justify-center gap-2 mb-2">
                    <button type="button" className="btn btn-sm text-white btn-primary rounded-sm">Follow</button>
                    <button type="button" className="btn btn-sm btn-outline btn-primary rounded-sm">Message</button>
                </div>
                <div className="mb-2 text-justify">
                    { details }
                </div>
            </div>
        </div>
    );
};

export default ChefInfo;
