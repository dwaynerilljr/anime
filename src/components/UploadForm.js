import { useState } from "react";
import { useFetch } from "../hooks/useFetch"

const UploadForm = () => {
    const [name, setName] = useState("");
    const [demographic, setDemographic] = useState("");
    const [type, setType] = useState("");
    const [seasons, setSeasons] = useState("");

    const { postData, data, error } = useFetch('http://localhost:3000/animes', 'POST')

    const handleSubmit = (e) => {
        e.preventDefault()
        postData({ name, demographic, type, comments: [], featured: false, seasons: Number(seasons) })
    }

    return (
        <main className='h-screen items-center pt-52 flex justify-center text-primary' id="hero">
            <form onSubmit={handleSubmit} className="flex flex-col w-2/6 gap-y-2 p-5 bg-white rounded-md border-2 border-secondary">
                <label htmlFor="title" className="text-lg font-semibold">Title:
                    <input 
                        type="text" 
                        name="title" 
                        className="border-2 border-secondary p-1 rounded-md text-base w-full mt-1" 
                        onChange={(e) => {setName(e.target.value)}}
                        value={name}
                        required
                    />
                </label>
                <label htmlFor="demographic" className="text-lg font-semibold">Demographic:
                    <select 
                        name="type" 
                        className="border-2 border-secondary p-1 rounded-md w-full mt-1"
                        onChange={(e) => {setDemographic(e.target.value)}}
                        value={demographic}
                        required
                    >
                        <option>Shounen</option>
                        <option>Shoujo</option>
                        <option>Seinen</option>
                        <option>Josei</option>
                    </select>
                </label>
                <label htmlFor="type" className="text-lg font-semibold">Type:
                    <select 
                        name="type" 
                        className="border-2 border-secondary p-1 rounded-md w-full mt-1"
                        onChange={(e) => {setType(e.target.value)}}
                        value={type}
                        required
                    >
                        <option value="anime">Anime</option>
                        <option value="manga">Manga</option>
                        <option value="light-novel">Light Novel</option>
                    </select>
                </label>
                <label htmlFor="image" className="text-lg font-semibold">Upload Image: 
                    <input type="file" name="image" accept='image/*' className="text-base w-full mt-1" />
                </label>
                <label 
                    htmlFor="seasons" 
                    className="text-lg font-semibold"
                    onChange={(e) => {setSeasons(e.target.value)}}
                    value={seasons}
                    required
                >Number of Seasons: 
                    <input type="text" name="seasons" className="border-2 border-secondary p-1 rounded-md w-full text-base" />
                </label>
                <button type="submit" className="border-2 hover:bg-secondary hover:text-white border-secondary p-2 rounded-md w-min self-center my-2">Upload</button>
            </form>
        </main>
    );
}
 
export default UploadForm;