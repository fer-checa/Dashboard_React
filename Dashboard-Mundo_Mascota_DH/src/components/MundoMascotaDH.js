import React from 'react';
import imagenMarca from '../assets/images/pagina-web.PNG';

function MundoMascotaDH(){
    return(
        <React.Fragment>
				<div className="col-lg-6 mb-4">
						<div className="card shadow mb-4">
							<div className="card-header py-3">
								<h5 className="m-0 font-weight-bold text-gray-800">Mundo Mascota DH</h5>
							</div>
							<div className="card-body">
								<div className="text-center">
									<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 40 + 'rem' }} src={imagenMarca} alt=" Imagen Marca MD " />
								</div>
							
								<h5>En Mundo Mascota DH reconocemos a las mascotas como un miembro más de la familia, a las que
									debemos cuidar, proteger, y brindar el mejor cuidado para que tengan una excelente calidad
									de vida. Para ello ofrecemos la más amplia variedad en productos alimenticios, accesorios,
									farmacia, servicios experimentados (veterinaria, peluquería), mascotas para adopción , y
									mucho más!</h5>

									<h5>Te damos una experiencia diferente de compra, ofreciendo productos y servicios de alta
									calidad que cumplen con las necesidades de las mascotas y la satisfacción de sus dueños.
								</h5>
								<a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Quienes somos...</a>
							</div>
						</div>
					</div>
        </React.Fragment>
    )
}
export default MundoMascotaDH;