import React from 'react'
import { Link } from 'react-router-dom'


const data = [
  {
    id: 1,
    title: "project-1",
    img: "https://picsum.photos/id/123/1200/800",
    git: "https://github.com",
    live:"https://project1.com"
  },
  {
    id: 2,
    title: "project-2",
    img: "https://picsum.photos/id/124/1200/800",
    git: "https://github.com/project2.git",
    live:"https://project2.com"
  },
  {
    id: 3,
    title: "project-3",
    img: "https://picsum.photos/id/125/1200/800",
    git: "https://github.com/project3.git",
    live:"https://project3.com"
  }
]

function Projects() {
  return (
    <section id='projects'>
          <div className="container mt-5">
            <div className="row">
               <div className="col-md-12 text-center">
                <h3 className='display-3 text-success'>
                  PROJECTS
                </h3>
               </div>
            </div>

            <div className='row'>
                  {
                    data && data.map((item,index) => {
                      return(
                        <div className="col-lg-4 col-md-3 col-sm-6 mt-3 mb-2">
                          <div className="card">
                            <img src={item.img} alt="" className='card-img-top' />
                            <div className='hover-items'>
                            <h3 className='text-center text-light'> { item.title}</h3>
                            <div className='d-flex justify-content-evenly icons'>
                              <Link to={`#`} target='_blank' className='btn btn-success'>
                                <i className='bi bi-github'></i>
                              </Link>
                              <Link to={`#`} target='_blank' className='btn btn-success'>
                                <i className='bi bi-globe'></i>
                              </Link>
                            </div>
                            </div>
                          </div>
                          
                        </div>
                      )
                    })
                  }
            </div>
          </div>
    </section>
  )
}

export default Projects
