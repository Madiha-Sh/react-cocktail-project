import React, { useEffect, useRef } from 'react';
import { useGlobalContext } from '../context';

const Form = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();
  const RefSearchValue = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    RefSearchValue.current.focus();
  }, []);

  return (
    <section className=" search">
      <form className='search-form' onSubmit={handleSubmit} >
        <div className="form-control">
          <label htmlFor='name'>search your favourite cocktail</label>
          <input type="text" name='name' id='name' onChange={() => setSearchTerm(RefSearchValue.current.value)} ref={RefSearchValue}/>
        </div>
      </form>
    </section>
  );
};

export default Form;