import { useState, useEffect } from 'react'
import { useFetch } from '../hooks/useFetch';
import { Link } from "react-router-dom";
import { MdOutlineDoubleArrow, MdOutlineGridView } from 'react-icons/md'
import { FaList } from 'react-icons/fa'
import AnimeList from './AnimeList';

const AnimeSelection = ({ isActive, grid, setGridView, setListView }) => {
    const [sorted, setSorted] = useState([]);
    const [sortType, setSortType] = useState('id');
    const [filterType, setFilterType] = useState();
    const url = 'http://localhost:3000/animes/'
    const { data: anime, isPending, error } = useFetch(url)

    useEffect(() => {
        if (anime) {
            const filterShows = type => {
                const newFilteredArr = [...anime].filter((show) => type === show.demographic)
                setSorted(newFilteredArr)
              };
              filterShows(filterType)
        }
      }, [filterType, anime])

    useEffect(() => {
        const sortArray = type => {
          const types = {
            name: 'name',
            id: 'id',
            seasons: 'seasons'
          }
          if (anime) {
              const sortProperty = types[type]
          const newArr = [...anime].sort((a,b) => {return a[sortProperty] > b[sortProperty] ? 1 : -1 });
          setSorted(newArr)
          }
        };
    
        sortArray(sortType);
      }, [sortType, anime])



    return (
        <>
            <div className="grid grid-cols-10 pt-52">
                <div className="grid col-start-2 col-span-8 justify-items-center text-center pb-10">
                    <div className="flex col-span-8 w-full justify-self-center p-4 items-center text-lg text-primary bg-gray-100 font-semibold">
                        <Link to="/" className='hover:text-secondary'>Home</Link>
                        <span className='mx-2'><MdOutlineDoubleArrow /></span>
                        <span className='font-light text-ternary'>Anime</span>
                    </div>
                    <header className="col-span-8 text-7xl py-2 font-bangers text-secondary">
                        Anime
                    </header>
                    <div className="flex col-span-8 w-full justify-between">
                        <div className="flex items-center">
                            <label htmlFor="sort" className="mr-2">Sort By:
                                <select name="sort" className="border-secondary rounded-md border-2 ml-2 p-1" onChange={e => setSortType(e.target.value)}>
                                    <option value="id">Recently Added</option>
                                    <option value="name">Alphabetically (A-Z)</option>
                                    <option value="seasons">Seasons</option>
                                </select>
                            </label>
                            <label htmlFor="filter">Filter By: 
                                <select name="sort" className="border-secondary rounded-md border-2 ml-2 p-1" onChange={e => setFilterType(e.target.value)}>
                                    <option value={null}>{null}</option>
                                    <option value="Shounen">Shounen</option>
                                    <option value="Shoujo">Shoujo</option>
                                    <option value="Seinen">Seinen</option>
                                    <option value="Josei">Josei</option>
                                </select>
                            </label>
                        </div>
                        <div className="flex items-center">
                            <p className="mr-1">View:</p>
                            <div className="border-2 border-secondary flex">
                                <button className={
                                    isActive ? 
                                    "text-secondary border-r-2 border-secondary p-1"
                                    : "bg-secondary border-r-2 text-white p-1"
                                }
                                onClick={setGridView}>
                                    <MdOutlineGridView size={20} />
                                </button>
                                <button className={
                                    isActive ? 
                                    "bg-secondary text-white p-1"
                                    : "text-secondary border-secondary p-1 rounded-sm"
                                } 
                                onClick={setListView}>
                                    <FaList size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                    {anime && <AnimeList sorted={sorted} anime={anime} grid={grid} />}
                </div>
            </div>
        </>
    );
}
 
export default AnimeSelection;