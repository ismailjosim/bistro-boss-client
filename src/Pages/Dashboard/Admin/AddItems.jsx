import { useForm } from "react-hook-form";
import SectionHeading from '../../../utils/SectionHeading';
import { BsFillRocketTakeoffFill } from 'react-icons/bs';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const AddItems = () => {
    const [axiosSecure] = useAxiosSecure();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${ imageHostKey }`;
    const { register, handleSubmit } = useForm();

    const AddMenuItem = data => {
        const formData = new FormData();
        formData.append('image', data.image[0]);
        fetch(imageHostingUrl, {
            method: "POST", body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {
                    const { name, category, price, recipe } = data;
                    const formData = { name, category, price: parseFloat(price), recipe, image: imageData?.data?.url };
                    // Post data using axios secure for admin validation
                    axiosSecure.post('/menu', formData)
                        .then(data => {

                        })
                }
            })
    }




    return (
        <section>
            <SectionHeading primary={ "What's new?" } secondary={ 'add an item' } />
            <div className="mx-auto w-full px-4 py-16 sm:px-6 lg:px-8 bg-slate-100 rounded-sm">
                <div className="mx-auto w-11/12">
                    <form onSubmit={ handleSubmit(AddMenuItem) } className="mb-0 space-y-4 rounded-lg p-4">
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
                                { ...register("name") }
                            />
                        </div>
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                            <div className="form-control">
                                <label htmlFor="name" className="label">
                                    <span className="label-text">Category*</span>
                                </label>
                                <select
                                    defaultValue={ "Recipe Category" }
                                    className="select select-primary w-full"
                                    { ...register("category") }
                                >
                                    <option disabled>Recipe Category</option>
                                    <option value="dessert">Dessert</option>
                                    <option value="salad">Salad</option>
                                    <option value="drinks">Drinks</option>
                                    <option value="pizza">Pizza</option>
                                    <option value="soup">Soup</option>
                                </select>
                            </div>
                            <div className="form-control w-full">
                                <label htmlFor="price" className="label">
                                    <span className="label-text">Price*</span>
                                </label>
                                <input
                                    type="number"
                                    name='price'
                                    placeholder="Recipe price"
                                    className="input input-bordered input-primary w-full"
                                    required
                                    { ...register("price") }
                                />
                            </div>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Recipe Details*</span>
                            </label>
                            <textarea
                                className="textarea textarea-primary h-40"
                                name='recipe'
                                placeholder="recipe Details"
                                style={ { resize: 'none', overflow: 'auto' } }
                                { ...register("recipe") }
                            ></textarea>
                        </div>
                        <div className="form-control w-full">
                            <label htmlFor="name" className="label">
                                <span className="label-text">Photo*</span>
                            </label>
                            <input
                                type="file"
                                className="file-input file-input-primary w-full"
                                { ...register("image") }
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
