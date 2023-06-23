import { useState } from 'react'
import { useGlobalContext } from './Context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const [value, setValue] = useState(null)
  const handleSearch = (event) => {
    event.preventDefault()
    const searchValue = event.target.elements.search.value
    setSearchTerm(searchValue)
    if (!searchValue) return
  }

  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form onSubmit={handleSearch} className="search-form">
        <div className="search search-input">
          <input
            placeholder="Search..."
            className=" "
            type="text"
            name="search"
          />
          <button type="submit">Search</button>
        </div>
      </form>
    </section>
  )
}
export default SearchForm
