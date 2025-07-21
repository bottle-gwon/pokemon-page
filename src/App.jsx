import { useEffect } from 'react'
import './App.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMultiplePokemonById } from './RTK/thunk'
import { Link, Route, Routes, useNavigate } from 'react-router';
import Main from './pages/Main';
import Detail from './pages/Detail';
import Search from './pages/Search';
import Favorite from './pages/Favorite';

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(fetchMultiplePokemonById(151));
  }, [])
  return (
    <>
      <h1 className='border-t-[30px] border-t-[red] bg-black text-white text-[40px] text-center'>포켓몬 도감</h1>
      <nav className='py-[10px] border-b-[3px] border-b-black flex gap-[20px] justify-center'>
        <Link to={'/'}>Main</Link>
        <Link to={'/favorite'}>찜목록</Link>
        <span>검색</span>
        <div>
          <input 
          onChange={(e) => navigate(`/search?pokemon=${e.target.value}`)} 
          className='w-[120px] border-b border-[darkgray] px-2' />
          <span>🔍</span>
        </div>
      </nav>
      <main className='bg-[gray] flex flex-wrap gap-[20px] justify-center pt-[20px] pb-[20px]'>
        <Routes>
          <Route path={'/'} element= { <Main /> } />
          <Route path={'/detail/:pokemonId'} element={ <Detail /> } />
          <Route path={'/search'} element={ <Search /> }/>
          <Route path={'/favorite'} element={ <Favorite />}/>
        </Routes>
      </main>
    </>
  )
}

export default App
