import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle, useSendPasswordResetEmail } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import Loader from '../../shared/Loader/Loader'
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import toast from 'react-hot-toast';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
     const { register, formState: { errors }, handleSubmit } = useForm();
     const navigate = useNavigate();
     const location = useLocation();
    //  const emailRef = useRef('');
    //  const passRef = useRef('');

     const [
         signInWithEmailAndPassword,
         user,
         loading,
         error,
     ] = useSignInWithEmailAndPassword(auth);

    //  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    let from = location.state?.from?.pathname || "/";

    let errorMessage;
    if(error || gError){
        errorMessage = <p className='text-red-500'>Error: {error?.message || gError?.message}</p>
    }

    if(loading || gLoading ){
        return <Loader></Loader>
    }

    if(user || gUser) {
        navigate(from, {
            replace: true
        });
    }

    const onSubmit = data => {
        // console.log(data)
        // const email = emailRef.current.value;
        // const password = passRef.current.value;
        signInWithEmailAndPassword(data.email, data.password);
    };

    //Password reset
    const handlePasswordReset = async () => {
        //get email?
      
    }

    return (
       <div className="flex h-[calc(100vh-4rem)] justify-center items-center">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h1 className="text-2xl text-center text-neutral">Login</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                // ref={emailRef}
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
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                // ref={passRef}
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs -mb-4"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                <button onClick={handlePasswordReset} className="btn btn-active btn-link lowercase pl-0"><small>Forgot Password?</small></button>
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        <input className='btn w-full max-w-xs text-white' type="submit" value="LOGIN" />
                    </form>
                    <p><small>New to Doctors Portal? <Link className='text-primary' to="/signup">Create New Account</Link></small></p>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">CONTINUE WITH GOOGLE</button>
                    <p className="text-red-500 text-center">{errorMessage}</p>
                </div>
            </div> 
       </div>
    );
};

export default Login;
