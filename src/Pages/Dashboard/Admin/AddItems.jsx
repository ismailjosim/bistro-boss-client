import { useForm } from 'react-hook-form'
import SectionHeading from '../../../utils/SectionHeading'
import { BsFillRocketTakeoffFill } from 'react-icons/bs'
import useAxiosSecure from '../../../Hooks/useAxiosSecure'
import Swal from 'sweetalert2'
import { useState } from 'react'

const AddItems = () => {
	const [axiosSecure] = useAxiosSecure()
	const imageHostKey = process.env.REACT_APP_imgbb_key
	const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
	const { register, handleSubmit, reset } = useForm()
	const [isLoading, setIsLoading] = useState(false)

	const AddMenuItem = (data) => {
		setIsLoading(true)
		const formData = new FormData()
		formData.append('image', data.image[0])
		fetch(imageHostingUrl, {
			method: 'POST',
			body: formData,
		})
			.then((res) => res.json())
			.then((imageData) => {
				if (imageData.success) {
					const { name, category, price, recipe } = data
					const formData = {
						name,
						category,
						price: parseFloat(price),
						recipe,
						image: imageData?.data?.url,
					}
					// Post data using axios secure for admin validation
					axiosSecure.post('/menu', formData).then((data) => {
						if (data.data.acknowledged) {
							reset()
							Swal.fire({
								position: 'center',
								icon: 'success',
								title: 'Food menu Added Successfully 🎉🎉',
								showConfirmButton: false,
								timer: 1000,
							})
							setIsLoading(false)
						}
					})
				}
			})
	}

	return (
		<section>
			<SectionHeading primary={"What's new?"} secondary={'add an item'} />
			<div className='mx-auto w-full px-4 py-16 sm:px-6 lg:px-8 bg-slate-100 rounded-sm'>
				<div className='mx-auto w-11/12'>
					<form
						onSubmit={handleSubmit(AddMenuItem)}
						className='mb-0 space-y-4 rounded-lg p-4'
					>
						<div className='form-control w-full'>
							<label htmlFor='name' className='label'>
								<span className='label-text'>Recipe name*</span>
							</label>
							<input
								type='text'
								name='name'
								placeholder='Recipe name'
								className='input input-bordered input-primary w-full'
								required
								{...register('name')}
							/>
						</div>
						<div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
							<div className='form-control'>
								<label htmlFor='name' className='label'>
									<span className='label-text'>Category*</span>
								</label>
								<select
									defaultValue={'Recipe Category'}
									className='select select-primary w-full'
									{...register('category')}
								>
									<option disabled>Recipe Category</option>
									<option value='dessert'>Dessert</option>
									<option value='salad'>Salad</option>
									<option value='drinks'>Drinks</option>
									<option value='pizza'>Pizza</option>
									<option value='soup'>Soup</option>
								</select>
							</div>
							<div className='form-control w-full'>
								<label htmlFor='price' className='label'>
									<span className='label-text'>Price*</span>
								</label>
								<input
									type='number'
									name='price'
									placeholder='Recipe price'
									className='input input-bordered input-primary w-full'
									required
									{...register('price')}
								/>
							</div>
						</div>
						<div className='form-control w-full'>
							<label className='label'>
								<span className='label-text'>Recipe Details*</span>
							</label>
							<textarea
								className='textarea textarea-primary h-40'
								name='recipe'
								placeholder='recipe Details'
								style={{ resize: 'none', overflow: 'auto' }}
								{...register('recipe')}
							></textarea>
						</div>
						<div className='form-control w-full'>
							<label htmlFor='name' className='label'>
								<span className='label-text'>Photo*</span>
							</label>
							<input
								type='file'
								className='file-input file-input-primary w-full'
								{...register('image')}
							/>
						</div>
						<div>
							{!isLoading ? (
								<button
									type='submit'
									className='btn btn-primary rounded-md text-white capitalize flex gap-2'
									style={{
										backgroundImage:
											'linear-gradient(90deg, #835D23 0%, #B58130 100%)',
									}}
								>
									<span>Send Review</span>
									<BsFillRocketTakeoffFill size={15} />
								</button>
							) : (
								<button
									className='btn btn-primary rounded-md text-white capitalize flex gap-4'
									style={{
										backgroundImage:
											'linear-gradient(90deg, #835D23 0%, #B58130 100%)',
									}}
								>
									<svg
										className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
									>
										<circle
											className='opacity-25'
											cx='12'
											cy='12'
											r='10'
											stroke='currentColor'
											strokeWidth='4'
										></circle>
										<path
											className='opacity-75'
											fill='currentColor'
											d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.963 7.963 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
										></path>
									</svg>
									<span>Loading...</span>
								</button>
							)}
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}

export default AddItems
