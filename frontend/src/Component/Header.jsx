import React from 'react'

function Header() {
  return (
    <div className='flex h-[60px]'>
      <div>Logo</div>
      <div>
        <ul style={{display: 'flex', gap: 16}}>
          <a href="/">Home</a>
          <a href="/AdminPanel">AdminPanel</a>
          <a href="#">Home</a>
          <a href="#">Home</a>
          <a href="#">Home</a>
        </ul>
      </div>
    </div>
  )
}

export default Header