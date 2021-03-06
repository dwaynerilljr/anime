const RegisterForm = () => {

    // const handleSubmit = (e) => {
        
    // }

    return (
        <div className="h-screen pt-52 flex flex-col items-center justify-center" id="sign-in">
            <form className="flex items-center text-xl bg-white text-primary border-2 border-primary flex-col w-2/6 p-4 rounded-md" action="submit" id="review-form">
                <h1 className="text-5xl font-bangers text-secondary mb-4"><strong>Register to RateThatAnime!</strong></h1>
                <div className="flex flex-col w-4/6 mb-3">
                    <label htmlFor="username">Username</label>
                    <input className="rounded-md border-2 border-secondary p-1" type="text" name="username" id="" />
                </div>
                <div className="flex flex-col w-4/6 mb-3">
                    <label htmlFor="password">Password</label>
                    <input className="rounded-md border-2 border-secondary p-1" type="password" name="password" id="" />
                </div>
                <div className="flex flex-col w-4/6 mb-3">
                    <label htmlFor="email">Email</label>
                    <input className="rounded-md border-2 border-secondary p-1" type="email" name="email" id="" />
                </div>
                <div className="flex flex-col w-4/6 mb-3">
                    <label htmlFor="birthday">Birthday</label>
                    <input className="rounded-md border-2 border-secondary p-1" type="date" name="birthday" id="" />
                </div>
                <button className="p-2 m-2 bg-primary hover:bg-secondary text-white rounded-md" type="submit">Register</button>
            </form>
        </div>
    );
}
 
export default RegisterForm;