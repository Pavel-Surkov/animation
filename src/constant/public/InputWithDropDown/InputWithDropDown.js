import React, { useState, useEffect } from 'react'
import classes from './InputWithDropDown.module.scss'
import clsx from 'clsx'

const InputWithDropDown = (props) => {
  const [isOpen, setOpen] = useState(false)
  const [items, setItem] = useState(props.dropdown)
  const [value, setValue] = useState(null)

  const toggleDropdown = () => setOpen(!isOpen)

  const handleItemClick = (id) => {
    if (value === id) {
      setValue(null)
      toggleDropdown()
      props.setDropdown(value)
    } else {
      setValue(id)
      toggleDropdown()
      props.setDropdown(value)
    }
  }

  return (
    <div className={classes.dropdown}>
      <div
        className={classes.dropdownHeader}
        style={{ width: props.width }}
        onClick={toggleDropdown}
      >
        {value ? (
          <h3>{items.find((item) => item.id === value).label}</h3>
        ) : (
          <h3>
            {props.placeholder}
            {isOpen ? (
              <i className={clsx(classes.arrow, classes.up)}></i>
            ) : (
              <i className={clsx(classes.arrow, classes.down)}></i>
            )}
          </h3>
        )}
      </div>
      <div
        className={clsx({
          [classes.dropdownBody]: true,
          [classes.open]: isOpen,
        })}
      >
        {items.map((item) => (
          <button
            key={item.id}
            className={classes.dropdownItem}
            onClick={() => handleItemClick(item.id)}
            id={item.id}
          >
            <span
              className={`dropdown-item-dot ${item.id === value && 'selected'}`}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default InputWithDropDown
