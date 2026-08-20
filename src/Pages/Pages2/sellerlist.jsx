import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const API_BASE = "http://localhost:3000/api/v1";

const getAuthToken = async () => {
  let token = localStorage.getItem("token") || localStorage.getItem("accessToken");
  if (token) return token;
  try {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "john@lavitra.com", password: "123456" })
    });
    const data = await res.json();
    if (data && data.accessToken) {
      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("accessToken", data.accessToken);
      return data.accessToken;
    }
  } catch (err) {
    console.error("Auto login failed:", err);
  }
  return null;
};

const DEFAULT_SELLERS = [
  {
    id: 1,
    name: 'ZARA International',
    category: 'Fashion',
    subCategory: 'Fashion',
    rating: '4.5',
    reviews: '3.5k',
    website: 'www.zarafashion.co',
    address: '4604 , Philli Lane Kiowa IN 47404',
    email: 'zarafashionworld@dayrep.com',
    phone: '+243 812-801-9335',
    revenue: '$200k',
    stock: '865',
    sells: '+4.5k',
    clients: '+2k',
  },
  {
    id: 2,
    name: 'Rolex Watches',
    category: 'Watch',
    subCategory: 'Watches',
    rating: '4.5',
    reviews: '1.2k',
    website: 'www.rolexwatch.co',
    address: '1678 Avenue Milwaukee, WI 53202',
    email: 'rolexwatches@dayrep.com',
    phone: '+243 262-223-1464',
    revenue: '$349k',
    stock: '261',
    sells: '+2.9k',
    clients: '+1.4k',
  },
  {
    id: 3,
    name: 'Dyson Machinery',
    category: 'Electronics',
    subCategory: 'Electronics',
    rating: '4.1',
    reviews: '3.7k',
    website: 'www.dysonmachine.co',
    address: '23 Cubbine Road GHOOLI WA 6426',
    email: 'dysonmachine@dayrep.com',
    phone: '+81(08) 9059 8047',
    revenue: '$545k',
    stock: '781',
    sells: '+5.3k',
    clients: '+3.1k',
  },
  {
    id: 4,
    name: 'GoPro Camera',
    category: 'Electronics',
    subCategory: 'Electronics',
    rating: '4.3',
    reviews: '7.2k',
    website: 'www.goprocamera.co',
    address: '5 Gaffney Street MIDDLE PARK VIC 3206',
    email: 'goprocamera@dayrep.com',
    phone: '+81(08) 6727 4227',
    revenue: '$465k',
    stock: '890',
    sells: '+10.6k',
    clients: '+6.3k',
  },
  {
    id: 5,
    name: 'H&M',
    category: 'Fashion',
    subCategory: 'Fashion',
    rating: '4.3',
    reviews: '15.3k',
    website: 'www.h&mfashion.co',
    address: '1697 Bay Street Toronto, ON M5J 2R8',
    email: 'h&mfashion@dayrep.com',
    phone: '+81(07) 4049 2261',
    revenue: '$800k',
    stock: '1309',
    sells: '+21.6k',
    clients: '+8.1k',
  },
  {
    id: 6,
    name: 'Huawei Phone',
    category: 'Electronics',
    subCategory: 'Phone',
    rating: '4.1',
    reviews: '8.2k',
    website: 'www.huaweiphone.co',
    address: '2182 Blanshard Victoria, BC V8W 2H9',
    email: 'huaweiphone@dayrep.com',
    phone: '+81(07) 250-356-8142',
    revenue: '$379k',
    stock: '356',
    sells: '+4.0k',
    clients: '+6.3k',
  },
  {
    id: 7,
    name: 'Nike Clothings',
    category: 'Fashion',
    subCategory: 'Clothings',
    rating: '4.5',
    reviews: '18.9k',
    website: 'www.nikebrand.co',
    address: '2113 Eglinton Avenue Toronto 1A6',
    email: 'nikefashion@dayrep.com',
    phone: '+81(07) 647-405-3676',
    revenue: '$890k',
    stock: '12k',
    sells: '+19.0k',
    clients: '+16.0k',
  },
  {
    id: 8,
    name: 'The North Face',
    category: 'Fashion',
    subCategory: 'Clothings',
    rating: '4.4',
    reviews: '12.7k',
    website: 'www.northface.co',
    address: '1377 49th Avenue Clyde River,0E0',
    email: 'thenorthface@dayrep.com',
    phone: '+81(07) 867-924-6639',
    revenue: '$457k',
    stock: '1.6k',
    sells: '+13.9k',
    clients: '+2.1k',
  },
];

export default function SellerList() {
  const navigate = useNavigate();
  const [sellers, setSellers] = useState(DEFAULT_SELLERS);
  const [favorites, setFavorites] = useState({});
  const [loading, setLoading] = useState(false);

  // Fetch Sellers from Backend API
  const fetchSellers = useCallback(async () => {
    try {
      setLoading(true);
      const token = await getAuthToken();
      const headers = {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {})
      };

      const res = await fetch(`${API_BASE}/sellers`, { headers });
      if (res.ok) {
        const data = await res.json();
        if (data && data.data && data.data.length > 0) {
          const apiSellers = data.data.map((s) => ({
            id: s.id,
            name: s.business_name || s.owner_name || 'Seller Store',
            category: s.category || 'Fashion',
            subCategory: s.category || 'Fashion',
            rating: s.rating && parseFloat(s.rating) > 0 ? s.rating : '4.5',
            reviews: '3.5k',
            website: (s.website || 'www.sellerstore.co').replace(/^https?:\/\//, ''),
            address: s.address ? `${s.address}, ${s.city || ''} ${s.state || ''}`.trim() : '4604, Main Lane NY 10001',
            email: s.email || 'seller@dayrep.com',
            phone: s.phone || '+243 812-801-9335',
            revenue: s.total_sales && parseFloat(s.total_sales) > 0 ? `$${parseFloat(s.total_sales).toLocaleString()}k` : '$200k',
            stock: s.total_products > 0 ? String(s.total_products) : '865',
            sells: '+4.5k',
            clients: '+2k',
          }));

          // Merge backend sellers with defaults if fewer than 8 cards
          const combined = [...apiSellers];
          for (let i = 0; i < DEFAULT_SELLERS.length; i++) {
            if (combined.length >= 8) break;
            if (!combined.some(c => c.name.toLowerCase() === DEFAULT_SELLERS[i].name.toLowerCase())) {
              combined.push(DEFAULT_SELLERS[i]);
            }
          }
          setSellers(combined);
        }
      }
    } catch (err) {
      console.error("Error fetching sellers list:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSellers();
  }, [fetchSellers]);

  const toggleFavorite = (id) => {
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="p-4" style={{ backgroundColor: '#F8F9FA' }}>
      <div className="row g-4">
        {sellers.map((seller) => (
          <div key={seller.id} className="col-xl-3 col-lg-4 col-md-6">
            <div 
              className="card bg-white p-3 h-100 d-flex flex-column justify-content-between border-0"
              style={{
                borderRadius: '16px',
                boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.04)',
              }}
            >
              <div>
                {/* Logo Frame Container */}
                <div 
                  className="rounded-3 overflow-hidden d-flex align-items-center justify-content-center mb-3"
                  style={{ height: '144px', width: '100%', backgroundColor: '#F3F4F7' }}
                >
                </div>

                <div className="d-flex justify-content-between align-items-start mb-1">
                  <div>
                    <h6 className="fw-bold text-dark mb-0" style={{ fontSize: '15px' }}>
                      {seller.name}
                    </h6>
                    <span className="text-muted" style={{ fontSize: '12px' }}>
                      ({seller.category})
                    </span>
                  </div>
                  <span 
                    className="badge d-flex align-items-center gap-1 fw-medium"
                    style={{ backgroundColor: '#FFF8E7', color: '#B78103', fontSize: '11px', padding: '4px 8px' }}
                  >
                    ★ {seller.rating} <span className="text-muted fw-normal">{seller.reviews}</span>
                  </span>
                </div>
                <a 
                  href={`https://${seller.website}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-decoration-none d-block mb-3"
                  style={{ color: '#FF6B35', fontSize: '12px', fontWeight: '500' }}
                >
                  {seller.website}
                </a>

                <div className="text-muted mb-3" style={{ fontSize: '12px', lineHeight: '1.9' }}>
                  <div className="d-flex align-items-center gap-2 text-truncate">
                    <span className="text-truncate">{seller.address}</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 text-truncate">
                    <span className="text-truncate">{seller.email}</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 text-truncate">
                    <span className="text-truncate">{seller.phone}</span>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-1" style={{ fontSize: '12px' }}>
                  <span className="text-muted">{seller.subCategory}</span>
                  <div className="d-flex align-items-center gap-1">
                    <span className="fw-bold text-dark">{seller.revenue}</span>
                  </div>
                </div>
                <div className="mb-3 w-100" style={{ height: '6px' }}>
                </div>
                <div className="row text-center border-top pt-3 mb-3" style={{ borderColor: '#F0F0F0' }}>
                  <div className="col-4">
                    <div className="fw-bold text-dark" style={{ fontSize: '14px' }}>{seller.stock}</div>
                    <div className="text-muted" style={{ fontSize: '11px' }}>Item</div>
                  </div>
                  <div className="col-4">
                    <div className="fw-bold text-dark" style={{ fontSize: '14px' }}>{seller.sells}</div>
                    <div className="text-muted" style={{ fontSize: '11px' }}>Sells</div>
                  </div>
                  <div className="col-4">
                    <div className="fw-bold text-dark" style={{ fontSize: '14px' }}>{seller.clients}</div>
                    <div className="text-muted" style={{ fontSize: '11px' }}>Happy</div>
                  </div>
                </div>
              </div>
              <div className="d-flex gap-2">
                <button 
                  onClick={() => navigate(`/sellers/details?id=${seller.id}`)}
                  className="btn btn-sm text-white flex-fill py-2 fw-medium cursor-pointer"
                  style={{ backgroundColor: '#FF5722', borderRadius: '8px', fontSize: '12px', border: 'none' }}
                >
                  View Profile
                </button>
                <button 
                  onClick={() => navigate(`/sellers/edit?id=${seller.id}`)}
                  className="btn btn-sm flex-fill py-2 fw-medium cursor-pointer"
                  style={{ backgroundColor: '#F3F4F7', color: '#555', borderRadius: '8px', fontSize: '12px', border: 'none' }}
                >
                  Edit Profile
                </button>
                <button 
                  onClick={() => toggleFavorite(seller.id)}
                  className={`btn btn-sm py-2 px-3 d-flex align-items-center justify-content-center cursor-pointer ${favorites[seller.id] ? 'bg-danger-subtle' : ''}`}
                  style={{ backgroundColor: '#FFF2F2', borderRadius: '8px', border: 'none' }}
                >
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}