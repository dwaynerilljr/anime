const LoginForm = ( {setUser, user} ) => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    return (
        <div className="w-screen flex justify-center">
            <form className="flex flex-col" action="submit" id="review-form" onChange={handleChange} onSubmit={handleSubmit}>
                <label htmlFor="username">Enter username:</label>
                <input type="text" name="username" id="" defaultValue={user.username} />
                <button className="self-start p-2 bg-teal hover:bg-blue text-white rounded-sm" type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForm