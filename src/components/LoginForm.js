import { useHistory } from 'react-router-dom'

const LoginForm = ( {setUser, user} ) => {

    const history = useHistory()
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({...user, loggedIn: true})
        history.goBack();
    }

    const handleChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    return (
        <div className="h-screen flex flex-col items-center justify-center pt-52" id="sign-in">
            <form className="flex h-h-half items-center text-xl bg-white text-primary border-2 border-primary flex-col w-2/6 p-4 rounded-md" action="submit" id="review-form" onSubmit={handleSubmit}>
                <h1 className="text-5xl text-secondary font-bangers"><strong>Sign in</strong></h1>
                <div className="flex flex-col w-4/6">
                    <label htmlFor="username">Username</label>
                    <input 
                        className="rounded-md my-1 border-2 border-secondary" 
                        type="text" 
                        name="username" 
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex flex-col w-4/6">
                    <label htmlFor="username">Password</label>
                    <input 
                        className="rounded-md my-1 border-2 border-secondary" 
                        type="password" 
                        name="password" 
                        onChange={handleChange}
                        required
                    />
                </div>
                <button className="p-2 m-2 bg-primary hover:bg-secondary text-white rounded-md" type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForm