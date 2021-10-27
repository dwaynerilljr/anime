const LoginForm = ( {setUser, user} ) => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    return (
        <div className="h-screen flex flex-col items-center justify-center pt-52" id="sign-in">
            <form className="flex h-h-half items-center text-xl bg-white text-teal border-2 border-teal flex-col w-2/6 p-4 rounded-md" action="submit" id="review-form" onChange={handleChange} onSubmit={handleSubmit}>
                <h1 className="text-3xl text-gentle-blue"><strong>Sign in</strong></h1>
                <div className="flex flex-col w-4/6">
                    <label htmlFor="username">Username</label>
                    <input className="rounded-md my-1 border-2 border-gentle-blue" type="text" name="username" id="" defaultValue={user.username} />
                </div>
                <div className="flex flex-col w-4/6">
                    <label htmlFor="username">Password</label>
                    <input className="rounded-md my-1 border-2 border-gentle-blue" type="password" name="password" id="" />
                </div>
                <button className="p-2 m-2 bg-teal hover:bg-gentle-blue text-white rounded-sm" type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForm