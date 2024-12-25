import React, { useState ,useEffect }  from 'react'
import axios from 'axios';
import Loading from '../Loading/Loading';




export default function categories() {

      // Add more categories as needed
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getCategories = async () => {
    try {
    const {data} = await axios.get('https://dummyjson.com/products/categories')
    setCategories(data);
    setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
        setIsLoading(false);
        }
  }

  useEffect(() => {
    getCategories();
  }, []);

    if (isLoading) {
    return <Loading />;
    }




  return (
    <>

      <div classname=" portfolio" id="portfolio">

        <div className="container">

          <h2 classname="d-flex gap-2 ">Categories </h2>

          <div className="row d-flex gap-5">


            {error? <div className="alert alert-danger">{error}</div>  : ''}  

            { categories.map((category, index) => (

              <div key={index} className="col-md-2">  

              <div className="card text-white bg-success  mb-3" >
                <div className="card-header">{category.name}</div>
                <div className="card-body">
                  <p className="card-title">{category.slug}</p>
                  
                </div>
              </div>
              </div>
            ))
          }

          </div>
        </div>
      </div>

    </>
  )
    

}
