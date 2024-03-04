import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <main id='hero'>
      <div className='container'>
            <div className='row'>
                <div className='col-md-12 text-center'>
                    <h3 className='display-3 text-success'>
                        R.NAVANEETHA <strong className='text-danger'>KRISHNAN</strong> 
                    </h3>
                    <h5 className='display-3 text-secondary'>
                        I'm a Professional Full Stack Developer
                    </h5>
                    <Link to={`#`} target='_blank' className='btn btn-success'>
                       <i className='bi bi-download'></i> Download CV
                    </Link>
                </div>
            </div>
      </div>
    </main>
  )
}

export default Home
