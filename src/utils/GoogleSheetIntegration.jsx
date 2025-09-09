import React, { useState, useEffect, useMemo } from 'react';
import { fetchSheetData } from '../utils/googleSheetsService';
import { useCart } from '../context/CartContext';
import './GoogleSheetIntegration.css';

const GoogleSheetIntegration = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOption, setSortOption] = useState('name');
  const { addToCart, getItemQuantity } = useCart();

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    filterAndSortProducts();
  }, [products, searchTerm, selectedCategory, sortOption]);

  const loadProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchSheetData();
      setProducts(data);
    } catch (err) {
      setError('Error al cargar productos');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const filterAndSortProducts = () => {
    let result = [...products];

    // Filtrar por término de búsqueda
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(product =>
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term) ||
        (product.category && product.category.toLowerCase().includes(term))
      );
    }

    // Filtrar por categoría
    if (selectedCategory !== 'all') {
      result = result.filter(product =>
        product.category && product.category === selectedCategory
      );
    }

    // Ordenar productos
    switch (sortOption) {
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'stock':
        result.sort((a, b) => b.stock - a.stock);
        break;
      default:
        break;
    }

    setFilteredProducts(result);
  };

  const handleAddToCart = (product) => {
    if (product.stock > 0) {
      addToCart(product, 1);
    }
  };

  // Obtener categorías únicas
  const categories = useMemo(() => {
    const cats = products
      .map(product => product.category)
      .filter((cat, index, arr) => cat && arr.indexOf(cat) === index);
    return ['all', ...cats];
  }, [products]);

  // Calcular estadísticas
  const stats = useMemo(() => {
    const total = products.length;
    const available = products.filter(p => p.stock > 5).length;
    const lowStock = products.filter(p => p.stock > 0 && p.stock <= 5).length;
    const outOfStock = products.filter(p => p.stock <= 0).length;

    return { total, available, lowStock, outOfStock };
  }, [products]);

  if (loading) {
    return (
      <div className="products-section">
        <h2>🛒 Nuestros Productos</h2>
        <div className="loading">
          <p>Cargando productos orgánicos...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="products-section">
        <h2>🛒 Nuestros Productos</h2>
        <div className="error">
          <p>{error}</p>
          <button onClick={loadProducts} className="retry-btn">
            Reintentar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="products-section">
      <h2>🛒 Nuestros Productos</h2>

      {/* Estadísticas */}
      <div className="products-stats row text-center mb-4">
        <div className="col-md-3 col-6 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">{stats.total}</h5>
              <p className="card-text">Total</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-6 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">{stats.available}</h5>
              <p className="card-text">Disponibles</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-6 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">{stats.lowStock}</h5>
              <p className="card-text">Poco Stock</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-6 mb-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">{stats.outOfStock}</h5>
              <p className="card-text">Agotados</p>
            </div>
          </div>
        </div>
      </div>

      {/* Controles de filtrado y ordenamiento */}
      <div className="products-controls row mb-4">
        <div className="col-md-4 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="col-md-4 mb-3">
          <select
            className="form-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === "all" ? "Todas las categorías" : cat}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-4 mb-3">
          <select
            className="form-select"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="name">Ordenar por nombre</option>
            <option value="price-asc">Precio: menor a mayor</option>
            <option value="price-desc">Precio: mayor a menor</option>
            <option value="stock">Más stock primero</option>
          </select>
        </div>
      </div>

      {/* Lista de productos */}
      <div className="products-grid">
        {filteredProducts.map((product) => {
          const quantityInCart = getItemQuantity(product.id);
          const isOutOfStock = product.stock <= 0;
          const isLowStock = product.stock <= 5 && product.stock > 0;

          return (
            <div key={product.id} className={`product-card ${isOutOfStock ? 'out-of-stock' : ''}`}>
              <div className="product-image">
                <img
                  src={product.image}
                  alt={product.name}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x200?text=Producto+Orgánico';
                  }}
                />
                {isOutOfStock && <div className="stock-overlay">Agotado</div>}
                {isLowStock && <div className="low-stock-badge">¡Últimas unidades!</div>}
                {product.category && (
                  <div className="category-badge">{product.category}</div>
                )}
              </div>

              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>

                <div className="product-details">
                  <span className="product-price">${product.price.toLocaleString()}</span>
                  <span className={`product-stock ${isLowStock ? 'low' : ''}`}>
                    Stock: {product.stock}
                  </span>
                </div>

                <div className="product-actions">
                  <button
                    onClick={() => handleAddToCart(product)}
                    disabled={isOutOfStock}
                    className={`add-to-cart-btn ${isOutOfStock ? 'disabled' : ''}`}
                  >
                    {isOutOfStock ? 'Agotado' : 'Agregar al Carrito'}
                  </button>

                  {quantityInCart > 0 && (
                    <span className="cart-quantity">
                      En carrito: {quantityInCart}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredProducts.length === 0 && (
        <div className="no-products">
          <p>No se encontraron productos con los filtros seleccionados.</p>
        </div>
      )}
    </div>
  );
};

export default GoogleSheetIntegration;