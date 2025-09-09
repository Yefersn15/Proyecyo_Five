import React from 'react';

const Nosotros = () => {
  return (
    <div>
      {/* Carrusel fuera del container */}
      <div className="mb-5">
        <div id="nosotrosCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#nosotrosCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#nosotrosCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#nosotrosCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img 
                src="https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                className="d-block w-100" 
                alt="Nuestro equipo" 
                style={{ height: '500px', objectFit: 'cover' }}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-4">
                <h3>Nuestro equipo de expertos</h3>
                <p>Profesionales comprometidos con brindarte la mejor asesoría tecnológica.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img 
                src="https://images.unsplash.com/photo-1468436139062-f60a71c5c892?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                className="d-block w-100" 
                alt="Nuestras instalaciones" 
                style={{ height: '500px', objectFit: 'cover' }}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-4">
                <h3>Instalaciones modernas</h3>
                <p>Contamos con infraestructura de última generación para garantizar la calidad.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                className="d-block w-100" 
                alt="Atención al cliente" 
                style={{ height: '500px', objectFit: 'cover' }}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-4">
                <h3>Atención personalizada</h3>
                <p>Nuestros clientes son nuestra prioridad, siempre recibirás un trato especial.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#nosotrosCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#nosotrosCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
      </div>

      {/* Contenido dentro del container */}
      <div className="container my-5">
        {/* Hero Section */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="bg-dark text-light p-5 rounded-3 text-center">
              <h1 className="display-4 fw-bold">⚡ Sobre ElectroStore</h1>
              <p className="lead">Innovación y tecnología al alcance de tu hogar desde 2015</p>
            </div>
          </div>
        </div>

        {/* Sección de Misión, Visión y Valores */}
        <div className="row mb-5">
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body text-center p-4">
                <div className="mb-3 display-6">🎯</div>
                <h3 className="card-title text-info">Misión</h3>
                <p className="card-text">
                  Proveer tecnología de vanguardia con un servicio excepcional, haciendo accesible 
                  la innovación electrónica para todos los colombianos, con garantía y soporte técnico confiable.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body text-center p-4">
                <div className="mb-3 display-6">👁️</div>
                <h3 className="card-title text-info">Visión</h3>
                <p className="card-text">
                  Ser la tienda de electrónica líder en Colombia para 2028, reconocida por nuestra 
                  curación de productos de calidad, servicio al cliente excepcional y contribución 
                  a la modernización de los hogares colombianos.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body text-center p-4">
                <div className="mb-3 display-6">💎</div>
                <h3 className="card-title text-info">Valores</h3>
                <ul className="list-unstyled text-start">
                  <li className="mb-2">✅ Calidad garantizada en todos nuestros productos</li>
                  <li className="mb-2">✅ Honestidad y transparencia con nuestros clientes</li>
                  <li className="mb-2">✅ Innovación constante en nuestro catálogo</li>
                  <li className="mb-2">✅ Servicio al cliente excepcional</li>
                  <li className="mb-2">✅ Responsabilidad social y ambiental</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de Historia */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="bg-light p-5 rounded-3">
              <h2 className="text-center mb-4 text-info">Nuestra Historia</h2>
              <div className="row">
                <div className="col-md-6">
                  <p>
                    ElectroStore nació en 2015 como un pequeño emprendimiento familiar en Medellín, 
                    con la visión de llevar tecnología de calidad a precios accesibles para todos los colombianos.
                  </p>
                  <p>
                    Comenzamos con apenas 20 productos en catálogo y un local de 40m², pero con 
                    mucho esfuerzo y dedicación, hemos crecido hasta convertirnos en una de las 
                    tiendas de electrónica con mayor variedad de productos en el país.
                  </p>
                </div>
                <div className="col-md-6">
                  <p>
                    Hoy contamos con más de 2000 productos en nuestro catálogo, servimos a clientes 
                    en todo el territorio nacional y tenemos un equipo de 25 profesionales 
                    apasionados por la tecnología.
                  </p>
                  <p>
                    Nuestro compromiso sigue siendo el mismo: ofrecer productos de calidad con 
                    garantía, precios justos y un servicio al cliente que marque la diferencia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de Logros */}
        <div className="row mb-5">
          <h2 className="text-center mb-4 text-info">Nuestros Logros</h2>
          
          <div className="col-md-3 col-6 mb-4">
            <div className="card text-center border-0 shadow-sm">
              <div className="card-body py-4">
                <div className="display-4 text-info">+15.000</div>
                <p className="card-text">Clientes satisfechos</p>
              </div>
            </div>
          </div>
          
          <div className="col-md-3 col-6 mb-4">
            <div className="card text-center border-0 shadow-sm">
              <div className="card-body py-4">
                <div className="display-4 text-info">+2.000</div>
                <p className="card-text">Productos en catálogo</p>
              </div>
            </div>
          </div>
          
          <div className="col-md-3 col-6 mb-4">
            <div className="card text-center border-0 shadow-sm">
              <div className="card-body py-4">
                <div className="display-4 text-info">8 años</div>
                <p className="card-text">De experiencia</p>
              </div>
            </div>
          </div>
          
          <div className="col-md-3 col-6 mb-4">
            <div className="card text-center border-0 shadow-sm">
              <div className="card-body py-4">
                <div className="display-4 text-info">25</div>
                <p className="card-text">Colaboradores</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de Equipo */}
        <div className="row mb-5">
          <h2 className="text-center mb-4 text-info">Nuestro Equipo</h2>
          
          <div className="col-md-3 col-6 mb-4">
            <div className="card text-center border-0 shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                className="card-img-top" 
                alt="Carlos Méndez - CEO" 
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">Carlos Méndez</h5>
                <p className="card-text text-muted">CEO & Fundador</p>
              </div>
            </div>
          </div>
          
          <div className="col-md-3 col-6 mb-4">
            <div className="card text-center border-0 shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" 
                className="card-img-top" 
                alt="Laura Gómez - Gerente Comercial" 
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">Laura Gómez</h5>
                <p className="card-text text-muted">Gerente Comercial</p>
              </div>
            </div>
          </div>
          
          <div className="col-md-3 col-6 mb-4">
            <div className="card text-center border-0 shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                className="card-img-top" 
                alt="Andrés Ramírez - Jefe de Tecnología" 
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">Andrés Ramírez</h5>
                <p className="card-text text-muted">Jefe de Tecnología</p>
              </div>
            </div>
          </div>
          
          <div className="col-md-3 col-6 mb-4">
            <div className="card text-center border-0 shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                className="card-img-top" 
                alt="María López - Soporte Técnico" 
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">María López</h5>
                <p className="card-text text-muted">Jefa de Soporte Técnico</p>
              </div>
            </div>
          </div>
        </div>

        {/* Compromisos */}
        <div className="row">
          <h2 className="text-center mb-4 text-info">Nuestros Compromisos</h2>
          
          <div className="col-md-6 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <h4 className="card-title text-info">🌱 Responsabilidad Ambiental</h4>
                <p className="card-text">
                  En ElectroStore nos preocupamos por el medio ambiente. Implementamos programas 
                  de reciclaje de dispositivos electrónicos, reducción de empaques y promovemos 
                  productos con eficiencia energética.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <h4 className="card-title text-info">🤝 Compromiso Social</h4>
                <p className="card-text">
                  Apoyamos a comunidades vulnerables mediante donaciones de tecnología a escuelas 
                  y programas de capacitación en habilidades digitales para jóvenes en situación 
                  de riesgo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;