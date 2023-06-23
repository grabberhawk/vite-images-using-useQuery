import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useGlobalContext } from './Context'

const url = `https://api.unsplash.com/search/photos?client_id=${
  import.meta.env.VITE_API_KEY
}`
const Gallery = () => {
  const { searchTerm } = useGlobalContext()
  console.log(searchTerm)
  const response = useQuery({
    ///Important----->
    queryKey: ['images', searchTerm],
    queryFn: async () => {
      const result = await axios.get(url + `&query=${searchTerm}`)
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
    console.log(response.error)
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
    </div>
  )
}
export default Gallery
