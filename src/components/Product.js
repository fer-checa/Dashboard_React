import React from 'react';

function Product(props){
    return(
        <React.Fragment>
            <div className="col-lg-6 mb-4">
                <div className="product-card card text-white bg-dark shadow">
                    <div className="h5 card-body">
                        {props.name}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Product;