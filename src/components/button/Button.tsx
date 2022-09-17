import React from 'react'
import "./button.css"
function Button(props:{title:string}) {
  return (
    <div>
        <button data-testid="button" className="button-style">{props.title}</button>
    </div>
  )
}

export default Button