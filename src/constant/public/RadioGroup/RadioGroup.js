import React from 'react'
import './RadioGroup.scss'
const RadioGroup = (props) => {
  return (
    <>
      <div class="egl-radio-with-check">
        {props.radioTags.map((item) => (
          <>
            <input
              className="radio-input"
              type="radio"
              id={item.name}
              name={item.name}
              value={item.name}
            />
            <label for={item.name}>{item.name}</label>
          </>
        ))}
      </div>
    </>
  )
}
export default RadioGroup
