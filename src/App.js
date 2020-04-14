import React, { useState, useEffect } from 'react';
import './App.css';
import { getBooks } from './services/api.service';
import Select from './components/Select';
import BookList from './components/BookList';
import Pages from './components/Pages';

function App() {

  const [books,setBooks] = useState([]);

  const [search,setSearch] = useState('a');
  const [selected,setSelected] = useState('intitle');
  const [filter,setFilter] = useState('');
  const [printType,setPrintType] = useState('');

  const qOptions = ['intitle','inauthor','inpublisher','subject'];

  const [filt,setFilt] = useState('');
  const [type,setType] = useState('');
  const [startIndex,setStartIndex] = useState('');
  const maxResults = '&maxResults=8';

  const handleClick = () => {
    filter !== '' ? setFilt(`&filter=${filter}`) : setFilt('');
    printType !== '' ? setType(`&printType=${printType}`) : setType('')
  }

  const [start,setStart] = useState('');

  const handleClickPages = (el) => {
    setStart(el*8);
    setStartIndex(`&startIndex=${start}`);
  }
  console.log(start);
  
  useEffect(() => {
    getBooks(`q=${search.toLowerCase()}+${selected}`,filt,type,startIndex,maxResults).then(res => setBooks(res.data.items));
  },[search,selected,filt,type,start,startIndex])
  
  const filterOptions = ['partial','full','free-ebooks','paid-ebooks','ebooks'];

  const printTypeOptions = ['all','books','magazines'];

  return (
    <>
    <div className="search">
      <p>Search Google Books by  
        <Select options={qOptions} id="q" set={setSelected} />
      </p>
      <input type="text" onInput={(e) => setSearch(e.target.value)} placeholder="Search" />
    </div>
    <div className='filter'>
      <p>Filter books: 
        <Select options={filterOptions} id="filter" set={setFilter} />
      </p>
      <p>
        Print type:
        <Select options={printTypeOptions} id="print-type" set={setPrintType} />
      </p>
    </div>
    <div className="btn">
      <button id="button" onClick={() => handleClick()}>Search!</button>
    </div>
   
    <div className="books">
        <BookList books={books} />
    </div>
    <Pages pages='5' handleClick={handleClickPages} />
    </>
  );
}

export default App;
