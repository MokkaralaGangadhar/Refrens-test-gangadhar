import React from 'react'
import { Link } from 'react-router-dom'
export const Card = ({ styles, profileImg, profileName, pid }) => {
  return (
    <>
      <div className={styles.char_card}>
        <img src={profileImg} alt="card" width="100%" />
        <p>{profileName}</p>
        <Link to={`/profile/${pid}`}>
          <button>
            Read More
            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </Link>
      </div>
    </>
  )
}
