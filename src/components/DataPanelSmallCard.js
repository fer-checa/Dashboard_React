import React from 'react';

function DataPanelSmallCard(props){
    return(
        <React.Fragment>
            <div className="col-md-4 mb-4">
                <div className={`card border-left-card shadow h-100 py-2`}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className={`text-x font-weight-bold text-${props.color} text-uppercase mb-1`}> {props.titulo}</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{props.valor}</div>
                            </div>
                            <div className="card-icon col-auto">
                                <i className={`fas ${props.icono} fa-2x text-gray-300 icon-new card-icon `}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default DataPanelSmallCard;
