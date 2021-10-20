const LoginForm = ( {setUser, user} ) => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    return (
        <form action="submit" onChange={handleChange} onSubmit={handleSubmit}>
            <label htmlFor="username">Enter username:</label>
            <input type="text" name="username" id="" defaultValue={user.username} />
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm