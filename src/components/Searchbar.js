import { useState } from "react"
import { useHistory } from "react-router-dom"


export default function Searchbar({ animeSelection }) {
    const [term, setTerm] = useState('')
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()

        history.push(`/search?q=${term}`)
    }

    return (
        <div className="flex items-center mr-10">
            <form onSubmit={handleSubmit} className="flex items-center">
                <label className="mr-2 text-xl" htmlFor="search">Search:</label>
                <input 
                    className="rounded-md p-1.5 mr-2 text-primary border border-secondary font-semibold"
                    type="text"
                    id="search"
                    onChange={(e) => setTerm(e.target.value)}
                    required
                />
                <button type="submit" className="bg-ternary py-1.5 px-3 text-white rounded-md hover:bg-secondary">Search</button>
            </form>
        </div>
    )
}
