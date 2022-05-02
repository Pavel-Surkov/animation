import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import classes from './Search.module.scss'
import cross from '../../../assets/svg/clear.svg'
import { useParams } from 'react-router'

const Search = (props) => {
  const history = useHistory()
  const [search, setSearch] = useState('')
  const [clear, setClear] = useState(false)

  useEffect(() => {
    if (search !== '') {
      setClear(true)
    } else {
      setClear(false)
    }
  }, [search])

  const handleClear = () => {
    setSearch('')
  }

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      history.push({ pathname: `/products/${search}` })
    }
  }
  return (
    <div className={classes.inputContainer}>
      <input
        type="text"
        style={{ width: `${props.width}` }}
        className={classes.input}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={props.placeholder}
        onKeyPress={handleSearch}
      />
      <button
        onClick={() => handleClear()}
        className={!clear ? classes.icon : classes.iconVisible}
      >
        <img src={cross} alt="Uplio" />
      </button>
    </div>
  )
}
export default Search
