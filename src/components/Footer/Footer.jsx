import React from 'react'

export default function Footer() {
    return (
      <>
    
      <div>
  <footer className="footer text-center">
    <div className="container">
      <div className="row d-flex">
        {/* Footer Location*/}
        <div className="col-md-4 d-flex flex-column gap-3">
          <h4 className="text-uppercase mb-4">Location</h4>
          <p className="lead mb-0">
            2215 John Daniel Drive
            <br />
            Clark, MO 65243
          </p>
        </div>
        <div className="col-md-4 d-flex flex-column gap-3">
          <h4 className="text-uppercase mb-4">Around the Web</h4>
          <div className="media d-flex gap-3 justify-content-center">
          <a className="btn btn-outline-light rounded-circle  mx-1" href="#!"><i className="fab fa-fw fa-facebook-f" /></a>
          <a className="btn btn-outline-light rounded-circle mx-1" href="#!"><i className="fab fa-fw fa-twitter" /></a>
          <a className="btn btn-outline-light rounded-circle mx-1" href="#!"><i className="fab fa-fw fa-linkedin-in" /></a>
          <a className="btn btn-outline-light rounded-circle mx-1" href="#!"><i className="fab fa-fw fa-dribbble" /></a>
        </div>
        </div>
        <div className="col-lg-4">
          <h4 className="text-uppercase mb-4">CRUD System </h4>
          <p className="lead mb-0">
            Freelance is a free to use, MIT licensed Bootstrap theme created by
            <a href="#">CRUD System</a>
            .
          </p>
        </div>
      </div>
    </div>
  </footer>
  <div className="copyright py-4 text-center text-white">
    <div className="container"><small>Copyright © <a href='https://hussamfull.github.io/iPortfolio2/'>Hussam Alnabelsi 2024 </a>  </small></div>
  </div>
</div>

      
      
      </>
    )
  }