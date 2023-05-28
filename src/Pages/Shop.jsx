import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../CSS/custom.css'
import 'react-tabs/style/react-tabs.css';
import PageHeading from '../utils/PageHeading';
import bannerImg from '../assets/shop/banner2.jpg'
import { useState } from 'react';
import useMenu from '../Hooks/useMenu';
import Loading from '../utils/Loading';
import FetchError from '../utils/FetchError';
import MenuCard from '../components/Home/MenuCard';
import ShopCard from '../components/Shop/ShopCard';


const Shop = () => {
    const [menu, loading, error, progress] = useMenu();
    const [tabIndex, setTabIndex] = useState(0);

    if (loading) {
        return <div className='flex justify-center items-center'>
            <Loading progress={ progress } />
        </div>
    }

    if (error) {
        return <FetchError message={ error } />
    }

    if (!loading && menu.length === 0) {
        return <FetchError message={ "No Data Found!" } />
    }

    // Sort all data and map them
    const allFood = menu.slice(0, 3).map((item, index) => <ShopCard key={ index } item={ item } />)
    const dessertItem = menu.filter(item => item.category === "dessert").map((item, index) => <ShopCard key={ index } item={ item } />)
    const pizzaItem = menu.filter(item => item.category === "pizza").map((item, index) => <ShopCard key={ index } item={ item } />)
    const saladItem = menu.filter(item => item.category === "salad").map((item, index) => <ShopCard key={ index } item={ item } />)
    const soupItem = menu.filter(item => item.category === "soup").map((item, index) => <ShopCard key={ index } item={ item } />)



    return (
        <main>
            <PageHeading bannerImg={ bannerImg } primary={ "Our shop" } secondary={ "would you like to try a dish?" } />
            <div className=''>
                <Tabs
                    defaultIndex={ tabIndex }
                    className="w-11/12 mx-auto mt-10"
                    onSelect={ (e) => setTabIndex(e) }
                >
                    <TabList className={ "tabs flex justify-center items-center" }>
                        <Tab className={ `tab tab-bordered text-lg font-semibold` }>All Food</Tab>
                        <Tab className={ "tab tab-bordered text-lg font-semibold" }>Desserts</Tab>
                        <Tab className={ "tab tab-bordered text-lg font-semibold" }>Pizza</Tab>
                        <Tab className={ "tab tab-bordered text-lg font-semibold" }>Salads</Tab>
                        <Tab className={ "tab tab-bordered text-lg font-semibold" }>Soups</Tab>
                    </TabList>

                    <TabPanel className={ 'w-11/12 mx-auto' }>
                        <div className=' grid lg:grid-cols-3 gap-5 my-10'>{ allFood }</div>
                    </TabPanel>
                    <TabPanel className={ 'w-11/12 mx-auto' }>
                        <div className=' grid lg:grid-cols-3 gap-5 my-10'>{ dessertItem }</div>
                    </TabPanel>
                    <TabPanel className={ 'w-11/12 mx-auto' }>
                        <div className=' grid lg:grid-cols-3 gap-5 my-10'>{ pizzaItem }</div>
                    </TabPanel>
                    <TabPanel className={ 'w-11/12 mx-auto' }>
                        <div className=' grid lg:grid-cols-3 gap-5 my-10'>{ saladItem }</div>
                    </TabPanel>
                    <TabPanel className={ 'w-11/12 mx-auto' }>
                        <div className=' grid lg:grid-cols-3 gap-5 my-10'>{ soupItem }</div>
                    </TabPanel>
                </Tabs>
            </div>
        </main>
    );
};

export default Shop;
