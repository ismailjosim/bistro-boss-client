import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../CSS/custom.css'
import 'react-tabs/style/react-tabs.css';
import PageHeading from '../utils/PageHeading';
import bannerImg from '../assets/shop/banner2.jpg'


const Shop = () => {
    return (
        <main>
            <PageHeading bannerImg={ bannerImg } primary={ "Our shop" } secondary={ "would you like to try a dish?" } />
            <div className=''>
                <Tabs className="w-11/12 mx-auto mt-10">
                    <TabList className={ "tabs flex justify-center items-center" }>
                        <Tab className={ `tab tab-bordered text-lg font-semibold` }>All Food</Tab>
                        <Tab className={ "tab tab-bordered text-lg font-semibold" }>Desserts</Tab>
                        <Tab className={ "tab tab-bordered text-lg font-semibold" }>Pizza</Tab>
                        <Tab className={ "tab tab-bordered text-lg font-semibold" }>Salads</Tab>
                        <Tab className={ "tab tab-bordered text-lg font-semibold" }>Soups</Tab>
                    </TabList>

                    <TabPanel className={ 'w-11/12 mx-auto' }>
                        <div className=' grid lg:grid-cols-3 gap-5 my-10'>

                            { [1, 2, 3, 4].map((item, index) => {
                                return (<div key={ index } className="w-full shadow-md rounded-md">
                                    <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                                    <div className="flex flex-col justify-between p-6 space-y-8">
                                        <div className="space-y-2">
                                            <h2 className="text-3xl font-semibold tracking-wide">Donec lectus leo</h2>
                                            <p className="">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                                        </div>
                                        <button type="button" className="btn btn-primary text-white">Read more</button>
                                    </div>
                                </div>
                                )
                            })

                            }
                        </div>
                    </TabPanel>
                    <TabPanel className={ 'w-11/12 mx-auto' }>
                        <div className=' grid lg:grid-cols-3 gap-5 my-10'>

                            { [1, 2, 3, 4].map((item, index) => {
                                return (<div key={ index } className="w-full shadow-md rounded-md">
                                    <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                                    <div className="flex flex-col justify-between p-6 space-y-8">
                                        <div className="space-y-2">
                                            <h2 className="text-3xl font-semibold tracking-wide">Donec lectus leo</h2>
                                            <p className="">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                                        </div>
                                        <button type="button" className="btn btn-primary text-white">Read more</button>
                                    </div>
                                </div>
                                )
                            })

                            }
                        </div>
                    </TabPanel>
                    <TabPanel className={ 'w-11/12 mx-auto' }>
                        <div className=' grid lg:grid-cols-3 gap-5 my-10'>

                            { [1, 2, 3, 4].map((item, index) => {
                                return (<div key={ index } className="w-full shadow-md rounded-md">
                                    <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                                    <div className="flex flex-col justify-between p-6 space-y-8">
                                        <div className="space-y-2">
                                            <h2 className="text-3xl font-semibold tracking-wide">Donec lectus leo</h2>
                                            <p className="">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                                        </div>
                                        <button type="button" className="btn btn-primary text-white">Read more</button>
                                    </div>
                                </div>
                                )
                            })

                            }
                        </div>
                    </TabPanel>
                    <TabPanel className={ 'w-11/12 mx-auto' }>
                        <div className=' grid lg:grid-cols-3 gap-5 my-10'>

                            { [1, 2, 3, 4].map((item, index) => {
                                return (<div key={ index } className="w-full shadow-md rounded-md">
                                    <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                                    <div className="flex flex-col justify-between p-6 space-y-8">
                                        <div className="space-y-2">
                                            <h2 className="text-3xl font-semibold tracking-wide">Donec lectus leo</h2>
                                            <p className="">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                                        </div>
                                        <button type="button" className="btn btn-primary text-white">Read more</button>
                                    </div>
                                </div>
                                )
                            })

                            }
                        </div>
                    </TabPanel>
                    <TabPanel className={ 'w-11/12 mx-auto' }>
                        <div className=' grid lg:grid-cols-3 gap-5 my-10'>

                            { [1, 2, 3, 4].map((item, index) => {
                                return (<div key={ index } className="w-full shadow-md rounded-md">
                                    <img src="https://source.unsplash.com/random/300x300/?2" alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                                    <div className="flex flex-col justify-between p-6 space-y-8">
                                        <div className="space-y-2">
                                            <h2 className="text-3xl font-semibold tracking-wide">Donec lectus leo</h2>
                                            <p className="">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                                        </div>
                                        <button type="button" className="btn btn-primary text-white">Read more</button>
                                    </div>
                                </div>
                                )
                            })

                            }
                        </div>
                    </TabPanel>

                </Tabs>
            </div>
        </main>
    );
};

export default Shop;
