import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useGlobalContext } from './Context'

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`
const Gallery = () => {
  const { searchTerm, handleNext, nextPage } = useGlobalContext()
  const response = useQuery({
    ///Important----->
    queryKey: ['images', searchTerm, nextPage],
    queryFn: async () => {
      const result = await axios.get(
        url + `&query=${searchTerm}&page=${nextPage}`
      )
      return result.data
    },
  })

  if (response.isLoading) {
    return (
      <div
        className="loading-wave"
        style={{ margin: 'auto', marginTop: '100px' }}
      >
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
      </div>
    )
  }
  if (response.isError) {
    return (
      <h1 style={{ marginLeft: '33%', marginTop: '125px' }}>
        {response.error.code}
      </h1>
    )
  }
  const items = response?.data?.results
  if (items?.length < 1) {
    return (
      <h1 style={{ marginLeft: '33%', marginTop: '125px' }}>No Data Found</h1>
    )
  }
  return (
    <div className="image-container">
      {items.map(({ id, urls, alt_description }) => {
        return (
          <img
            key={id}
            className="img"
            src={urls?.regular}
            alt={alt_description}
          />
        )
      })}
      <button className="button" style={{ margin: 'auto' }}>
        <span className="button-content" onClick={handleNext}>
          Next
        </span>
        {console.log(nextPage)}
      </button>
    </div>
  )
}
export default Gallery
