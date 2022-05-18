import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import Loader from '../../shared/Loader/Loader';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const {data: services, isLoading} = useQuery('services', () => fetch('http://localhost:5000/service').then(res => res.json()));

    /**
     * 3 ways to store image
     * 1. third party storage like imgbb //free open public storage is ok for practice project
     * 2. your own storage in your own server (file system)
     * 3. database- mongodb
     * Validate image
     * YUP: to validate file: search: Yup file validation for react hook form
     */

    const imageStorageKey = '19b477e77d3b2d8520f4a4b3f8731639';

    const onSubmit = async data => {
        // console.log('data', data)
        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image);

        //Strategy- first- post image to third party server, second- post doctor object including image url into database (series of fetch)
        //post data to imgbb
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData,
        })
        .then(res => res.json())
        .then(result => {
            if(result.success){
                const img = result.data.url;
                const doctor = {
                    name: data.name,
                    email: data.email,
                    speciality: data.speciality,
                    img: img,
                }
                //send data to database
                fetch('http://localhost:5000/doctor', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctor)
                })
                .then(res => res.json())
                .then(inserted => {
                    // console.log('doctor', inserted)
                    if (inserted.insertedId) {
                        toast.success('Doctor added successfully');
                        reset();
                    }
                    else{
                        toast.error('Failed to add the doctor')
                    }
                })
            }
        })
    };

    if(isLoading){
        return <Loader></Loader>
    }

    return (
        <div>
            <h2>Add a Doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid Email'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">speciality</span>
                    </label>
                    <select {...register("speciality")} className="select select-bordered w-full max-w-xs mb-3">
                        {
                            services.map(service =>  <option key={service._id} value={service.name}>{service.name}</option>)
                        }
                    </select>
                </div>
                 <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        type="file"
                        placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'Image is Required'
                            }
                        })}
                    />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>
                <input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddDoctor;