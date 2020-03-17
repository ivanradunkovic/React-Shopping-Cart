import React, { Component } from 'react';
 
class Product extends Component
{
    render() {
 
        const { product } = this.props;
 
        return (
            <div className="col-md-3">
                <figure className="card card-product">
                    <div className="img-wrap">
                        <img alt="desc" className="img-responsive" src={product.image} />
                    </div>
                    <figcaption className="info-wrap">
                        <h4 className="title">{product.title}</h4>
                        <p className="desc">{product.description}</p>
                    </figcaption>
                    <div className="bottom-wrap">
                        <a href="desc" className="btn btn-sm btn-primary float-right">Add to cart</a>
                        <div className="price-wrap h5">
                            <span className="price-new">{product.price} Kn</span>
                        </div>
                    </div>
                </figure>
            </div>
        )
    }
}
 
export default Product;