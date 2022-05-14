import React from 'react';

const SignUp = () => {
    return (
        <div>
            <div class="flex h-[calc(100vh-4rem)] justify-center items-center">
            <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h1 class="text-2xl text-center text-neutral">Sign Up</h1>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text text-accent font-semibold">Name</span>
                    </label>
                    <input type="text" class="input input-bordered w-full max-w-xs mb-2" />
                    <label class="label">
                        <span class="label-text text-accent font-semibold">Email</span>
                    </label>
                    <input type="email" class="input input-bordered w-full max-w-xs mb-2" />
                    <label class="label">
                        <span class="label-text text-accent font-semibold">Password</span>
                    </label>
                    <input type="text" class="input input-bordered w-full max-w-xs" />
                    <label class="label mb-2">
                        <span class="label-text-alt text-accent font-semibold">Forgot Password?</span>
                    </label>
                    <input type="Submit" class="input input-bordered w-full max-w-xs bg-accent text-white" value="SIGN UP"/>
                    <label class="label text-accent font-semibold">
                        <span class="label-text-alt text-accent font-semibold">Already have an account?</span><span class="text-primary"><small>Login here</small></span>
                    </label>
                     <div class="divider">OR</div>
                     <input type="text" placeholder="CONTINUE WITH GOOGLE" class="input text-center input-bordered input-accent w-full max-w-xs" />
                </div>
            </div>
            </div> 
       </div>
        </div>
    );
};

export default SignUp;