import { useGlobalContext } from './Context'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext()
  console.log(toggleDarkTheme)
  return (
    <section className="toggle-container">
      <label className="ui-switch">
        <input type="checkbox" onChange={toggleDarkTheme} />
        <div className="slider">
          <div className="circle"></div>
        </div>
      </label>
    </section>
  )
}
export default ThemeToggle
