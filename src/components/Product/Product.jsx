import React from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../../assets/hooks/useFetch';
import Loading from '../Loading/Loading';

export default function Product() {


    // Get the id from the URL
    const { id } = useParams();

    // rec Fetch data from API
    const { data, isLoading, error } = useFetch(`https://dummyjson.com/products/${id}`);
    console.log(data);
    if (isLoading) {
        return <Loading />
    }
    if (error) {
        return <div>{error}</div>
    }


    return (
        <>
            {error ? <div className="alert alert-danger">{error}</div> : ''}
            <div className="container">
                <h1>Product Details</h1>
                <br />
                <div className="row">
                    <div className="col-md-4">


                        <div className="card" style={{ width: '18rem' }}>
                            <img src={data.thumbnail} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{data.title} </h5>
                                <h5 className=" badge rounded-pill text-bg-success">{data.category} </h5>


                            </div>
                        </div>
                    </div>

                    <div className="col-md-8">
                        <h3>Product Info</h3>
                        <ul>
                            <p>ID: {data.id}</p>
                            <p>Title: {data.title}</p>
                            <p className="card-text">{data.description}.</p>
                            <p>Category: {data.category}</p>
                            <p className=" badge rounded-pill text-bg-warning fw-bold" >Price: ${data.price}</p>
                            <p className=" badge rounded-pill text-bg-info fw-bold" >Rating: {data.rating}</p>
                                                      
                        </ul>
                        <h3> Product images :  </h3>
                        {data.images.map(img => (
                            <img key={img} src={img} alt={img} className='w-25' />
                        ))}
                    </div>
                    <h5 className=" badge rounded-pill text-bg-success">Free Syria &&   {data.tags.join(' , ')} </h5>
                    <h5 className=" badge rounded-pill text-bg-light d-flex justify-content-evenly">
                        <i className="fa-solid fa-star" style={{ color: '#ef0101' }} />
                        <i className="fa-solid fa-star" style={{ color: '#ef0101' }} />
                        <i className="fa-solid fa-star" style={{ color: '#ef0101' }} />

                    </h5>
                    <h5 className=" badge rounded-pill text-bg-dark">Free Syria && {data.tags.join(' , ')} </h5>

                </div>

                {data.reviews.map((review) => (

                    <div key="{id}" className="card border-success mb-3" style={{ maxWidth: '18rem' }}>
                        <div className="card-header bg-transparent border-success fw-bold"> {review.reviewerName}</div>
                        <div className="card-body text-success">
                            <h5 className="card-title">Rating: {review.rating}</h5>
                            <p className="card-text">{review.comment}</p>
                        </div>
                        <div className="card-footer bg-transparent border-success">Review Date: {new Date(review.date).toLocaleDateString()}</div>
                    </div>


                ))}






            </div>

        </>
    )
}
