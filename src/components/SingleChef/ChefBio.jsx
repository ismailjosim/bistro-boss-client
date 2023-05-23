import React from 'react';

const ChefBio = ({ chefData }) => {
    const { avatar, name, age, details, experience, recipes, likes, myRecipes } = chefData;

    return (
        <div className="card mb-4 bg-white mt-5 lg:mt-0">
            <div className="card-body flex gap-3">
                <div className="grid grid-cols-3">
                    <div>
                        <p className="col-span-1 mb-0">Full Name</p>
                    </div>
                    <div>
                        <p className="col-span-2 mb-0">{ name }</p>
                    </div>
                </div>
                <hr />
                <div className="grid grid-cols-3">
                    <p className="col-span-1 mb-0">Age</p>
                    <p className="col-span-2 mb-0">{ age } Years</p>
                </div>
                <hr />
                <div className="grid grid-cols-3">
                    <div>
                        <p className="col-span-1 mb-0">Experience</p>
                    </div>
                    <div>
                        <p className="col-span-2 mb-0">{ experience } Years</p>
                    </div>
                </div>
                <hr />
                <div className="grid grid-cols-3">
                    <div>
                        <p className="col-span-1 mb-0">Total Likes</p>
                    </div>
                    <div>
                        <p className="col-span-2 mb-0">{ likes }</p>

                    </div>
                </div>
                <hr />
                <div className="grid grid-cols-3">
                    <div>
                        <p className="col-span-1 flex items-center gap-1">Total Recipes</p>
                    </div>
                    <div>
                        <p className="col-span-1 flex items-center gap-1">{ myRecipes.length }</p>
                    </div>
                </div>
                <hr />
                <div className="grid grid-cols-3">
                    <div>
                        <p className="col-span-1 flex items-center gap-1">Linkedin</p>
                    </div>
                    <div>
                        <a target='_blank' href="https://www.linkedin.com/in/ismailjosim/" className="col-span-2 mb-0 hover:text-primary hover:underline transition-all duration-200" rel="noreferrer">linkedin.com/in/ismailjosim</a>
                    </div>
                </div>
                <hr />
                <div className="grid grid-cols-3">
                    <div>
                        <p className="col-span-1 flex items-center gap-1">Resume</p>
                    </div>
                    <div>
                        <a target='_blank' href="https://drive.google.com/file/d/1outMVkz4ZmF902o7SotvWdR5n_h2iDEb/view?usp=share_link" className="col-span-2 mb-0 hover:text-primary hover:underline transition-all duration-200" rel="noreferrer">My Resume</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefBio;
