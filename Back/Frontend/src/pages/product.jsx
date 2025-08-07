import React, { useEffect, useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [favMessage, setFavMessage] = useState(null);
  const productsPerPage = 6;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/product');
        const data = await response.json();
        const productArray = Array.isArray(data) ? data : [data];
        setProducts(productArray);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const decodeToken = (token) => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      return JSON.parse(jsonPayload);
    } catch (e) {
      return null;
    }
  };

  const handleAddToFavorites = async (productId) => {
    const token = localStorage.getItem('token');

    if (!token) {
      setFavMessage('Please log in to add to favorites');
      return;
    }

    const decoded = decodeToken(token);
    if (!decoded || !decoded.userId) {
      setFavMessage('Invalid token');
      return;
    }

    try {
      const payload = { userId: decoded.userId, productId };
      const response = await fetch('http://localhost:5001/api/favorites/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        setFavMessage('Added to favorites!');
      } else {
        setFavMessage(result.message || 'Failed to add to favorites');
      }
    } catch (error) {
      console.error('Error adding to favorites:', error);
      setFavMessage('Error adding to favorites');
    } finally {
      setTimeout(() => setFavMessage(null), 2000);
    }
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-48">
        <div className="w-10 h-10 border-4 border-t-rose-400 border-neutral-300 rounded-full animate-spin mb-4"></div>
        <p className="text-neutral-600">Loading products...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 font-sans" style={{ backgroundColor: '#faf3ef', minHeight: '100vh' }}>
      <h1 className="text-center mb-6" style={{ fontSize: '20px', fontWeight: '600', color: '#d2a679' }}>
        Our Products
      </h1>

      {favMessage && (
        <div className="bg-amber-100 text-amber-800 text-center py-2 px-4 rounded mb-4">
          {favMessage}
        </div>
      )}

      {products.length === 0 ? (
        <div className="text-center p-6 bg-neutral-100 text-neutral-500 rounded">
          No products available at the moment.
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {currentProducts.map((product) => (
              <div key={product._id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 border border-neutral-200">
                <div className="h-40 overflow-hidden rounded-md mb-3">
                  <img
                    src={product.Thumbnail}
                    alt={product.ProductName}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/250x160?text=No+Image';
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-800">{product.ProductName}</h3>
                  <p className="text-sm text-neutral-500">Code: {product.ProductCode}</p>
                  <p className="text-lg font-bold text-rose-600 mt-1">Rs. {product.Price}</p>
                  <div
                    className={`inline-block px-2 py-1 mt-2 text-xs font-medium rounded ${
                      product.Stock > 0
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-rose-100 text-rose-700'
                    }`}
                  >
                    {product.Stock > 0 ? `${product.Stock} in stock` : 'Out of stock'}
                  </div>
                  <p className="text-sm text-neutral-600 mt-2">
                    {product.Description.length > 100
                      ? `${product.Description.substring(0, 100)}...`
                      : product.Description}
                  </p>
                  <button
                    onClick={() => handleAddToFavorites(product._id)}
                    className="mt-3 w-full font-medium py-2 px-4 rounded transition"
                    style={{
                      backgroundColor: '#f5cba7',
                      color: '#5c4438',
                      border: '1px solid #e3b188',
                    }}
                  >
                    ❤️ Add to Favorites
                  </button>
                </div>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-4">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded text-amber-600 hover:bg-amber-100 disabled:text-neutral-400"
              >
                &lt;
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 border rounded ${
                    currentPage === i + 1
                      ? 'bg-amber-600 text-white'
                      : 'text-amber-700 hover:bg-amber-100'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border rounded text-amber-600 hover:bg-amber-100 disabled:text-neutral-400"
              >
                &gt;
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductList;
