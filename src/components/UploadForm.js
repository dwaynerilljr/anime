const UploadForm = () => {
    return (
        <main className='h-screen items-center pt-52 flex justify-center text-teal' id="hero">
            <form action="submit" className="flex flex-col w-2/6 gap-y-2 p-5 bg-white rounded-md border-2 border-gentle-blue">
                <label htmlFor="title" className="text-lg font-semibold">Title:
                    <input type="text" name="title" className="border-2 border-gentle-blue p-1 rounded-md text-base w-full mt-1" />
                </label>
                <label htmlFor="demographic" className="text-lg font-semibold">Demographic:
                    <select name="type" id="" className="border-2 border-gentle-blue p-1 rounded-md w-full mt-1">
                        <option>Shounen</option>
                        <option>Shoujo</option>
                        <option>Seinen</option>
                        <option>Josei</option>
                    </select>
                </label>
                <label htmlFor="type" className="text-lg font-semibold">Type:
                    <select name="type" id="" className="border-2 border-gentle-blue p-1 rounded-md w-full mt-1">
                        <option value="anime">Anime</option>
                        <option value="manga">Manga</option>
                        <option value="light-novel">Light Novel</option>
                    </select>
                </label>
                <label htmlFor="image" className="text-lg font-semibold">Upload Image: 
                    <input type="file" name="image" accept='image/*' className="text-base w-full mt-1" />
                </label>
                <label htmlFor="seasons" className="text-lg font-semibold">Number of Seasons: 
                    <input type="text" name="seasons" className="border-2 border-gentle-blue p-1 rounded-md w-full text-base" />
                </label>
                <button type="submit" className="border-2 hover:bg-gentle-blue hover:text-white border-gentle-blue p-2 rounded-md w-min self-center my-2">Upload</button>
            </form>
        </main>
    );
}
 
export default UploadForm;