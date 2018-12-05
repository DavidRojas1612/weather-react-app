import React, { Fragment } from 'react'
import './Toolbar.scss'
import Button from '../Atoms/Button'

const Toolbar = ({ city, handleBackpage }) => {
  return (
    <nav className='nav'>
      <ul className='menu'>
        {city && (
          <Fragment>
            <li className='menu__item'>
              <Button theme='button--like' onClick={() => handleBackpage()}>
                Atrás
              </Button>
            </li>
            <li className='menu__item'>
              <h1 className='menu__title'>{city}</h1>
            </li>
          </Fragment>
        )}
      </ul>
    </nav>
  )
}

Toolbar.propTypes = {}

export default Toolbar
