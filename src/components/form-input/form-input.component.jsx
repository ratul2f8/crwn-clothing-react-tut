import React from "react"
import './form-input.component.styles.scss'

const FormInput = ({handleChange,label,...otherInputProps}) => (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherInputProps}/>
      {
          label ?
          (
              <label 
              className={
                  `${otherInputProps.value.lenghth ? 'shrink': ''} form-input-label`
                }>
                    {label}
                </label>
          ):
          null
      }
    </div>

)
export default FormInput