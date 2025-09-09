import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark bg-gradient text-light pt-4 pb-2">
      <div className="container">
        <div className="row">
          {/* Marca */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="text-info">⚡ ElectroStore</h5>
            <p className="text-light small">
              Lo último en tecnología, electrodomésticos y gadgets,
              con la mejor calidad y soporte garantizado.
            </p>
            <div className="mt-3">
              <span className="small">Síguenos en:</span>
              <div className="d-flex gap-2 mt-1 fs-5">
                <span className="cursor-pointer">📘</span>
                <span className="cursor-pointer">📷</span>
                <span className="cursor-pointer">🐦</span>
              </div>
            </div>
          </div>

          {/* Ventajas */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h6 className="text-info">🔧 Ventajas</h6>
            <ul className="list-unstyled">
              <li className="mb-1 small">🚚 Envío rápido</li>
              <li className="mb-1 small">🛡️ Garantía oficial</li>
              <li className="mb-1 small">💳 Pago seguro</li>
              <li className="mb-1 small">📞 Soporte técnico</li>
              <li className="mb-1 small">⭐ Calidad garantizada</li>
            </ul>
          </div>

          {/* Enlaces rápidos */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h6 className="text-info">🔗 Enlaces Rápidos</h6>
            <ul className="list-unstyled">
              <li className="mb-1"><a href="#productos" className="text-light text-decoration-none small">Productos</a></li>
              <li className="mb-1"><a href="#ofertas" className="text-light text-decoration-none small">Ofertas</a></li>
              <li className="mb-1"><a href="#contacto" className="text-light text-decoration-none small">Contacto</a></li>
              <li className="mb-1"><a href="#nosotros" className="text-light text-decoration-none small">Nosotros</a></li>
              <li className="mb-1"><a href="#faq" className="text-light text-decoration-none small">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="col-md-3 col-sm-6 mb-4">
            <h6 className="text-info">📞 Contáctanos</h6>
            <div className="small">
              <p className="mb-1">📱 WhatsApp: {import.meta.env.VITE_WHATSAPP_NUMERO}</p>
              <p className="mb-1">📧 Email: {import.meta.env.VITE_EMAIL}</p>
              <p className="mb-0">📍 {import.meta.env.VITE_ADDRESS}</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-top border-secondary mt-4 pt-3">
          <div className="text-center">
            <p className="text-light small mb-2">
              © {currentYear} ElectroStore. Todos los derechos reservados.
              Tecnología que conecta tu vida ⚡
            </p>
            <div className="d-flex justify-content-center gap-2 flex-wrap">
              <span className="badge bg-info text-dark small">💳 Pago Seguro</span>
              <span className="badge bg-info text-dark small">🛡️ Garantía</span>
              <span className="badge bg-info text-dark small">🚀 Envío Rápido</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;