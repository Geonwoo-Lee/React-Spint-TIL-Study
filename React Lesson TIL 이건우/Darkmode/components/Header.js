import React from 'react'

export const Header = () => {
    const resetPage = () => {
     return window.location.reload()
  }
    return (
        <h1 className='header' onClick = {resetPage}>Wellcome to My website !</h1>
    )
}
