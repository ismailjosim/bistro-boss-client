import bannerImg from '../../assets/menu/pizza-bg.jpg'
import SectionBanner from './SectionBanner';
import useMenu from '../../Hooks/useMenu';
import Loading from '../../utils/Loading';
import FetchError from '../../utils/FetchError';
import MenuCard from '../Home/MenuCard';

const Pizza = () => {
    const [menu, loading, error, progress] = useMenu()

    let content = null;

    if (loading) {
        content = <div className='flex justify-center items-center'>
            <Loading progress={ progress } />
        </div>
    }

    if (error) {
        content = <FetchError message={ error } />
    }

    if (!loading && menu.length === 0) {
        content = <FetchError message={ "No Data Found!" } />
    }

    if (!loading && menu.length > 0) {
        const popularItems = menu.filter(item => item.category === "pizza");
        content = (
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
                { popularItems.map((singleItem, index) => <MenuCard key={ index } singleItem={ singleItem } />) }
            </div>
        )
    }


    return (
        <section>
            <SectionBanner
                bannerImg={ bannerImg }
                primary={ "Pizza" }
                secondary={ "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." }
            />
            <div className='my-10 w-11/12 mx-auto'>
                { content }
            </div>
            <div className='text-center py-5'>
                <button className='btn btn-outline border-0 border-b-4 mt-4 transition-all ease-in-out duration-500'>ORDER YOUR FAVORITE FOOD</button>
            </div>
        </section>
    );
};

export default Pizza;
