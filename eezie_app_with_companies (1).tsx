import React, { useState } from 'react';
import { ShoppingCart, CheckCircle, Phone, Package, Lock, User, ArrowRight } from 'lucide-react';

const BrawleyApp = () => {
  const [step, setStep] = useState(1);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [cart, setCart] = useState({});
  const [phoneNumber, setPhoneNumber] = useState('');
  const [telecom, setTelecom] = useState('MTN');
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleGoBack = () => {
    if (step === 3) {
      setStep(2);
    } else if (step === 4) {
      setStep(3);
      setCart({});
    }
  };

  // Default credentials
  const DEFAULT_USER = 'pk';
  const DEFAULT_PASSWORD = 'demo123';

  // Companies
  const companies = [
    {
      id: 1,
      name: 'Chibuku Breweries',
      logo: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 250%22%3E%3Cellipse cx=%22200%22 cy=%22125%22 rx=%22180%22 ry=%22110%22 fill=%221e3a8a%22 stroke=%22fbbf24%22 stroke-width=%228%22/%3E%3Cellipse cx=%22200%22 cy=%2280%22 rx=%2240%22 ry=%2245%22 fill=%22dc2626%22/%3E%3Ccircle cx=%22200%22 cy=%2265%22 r=%2220%22 fill=%22fcd34d%22/%3E%3Cpolygon points=%22170,80 180,95 190,80 200,95 210,80 220,95 230,80%22 fill=%22white%22/%3E%3Ctext x=%22200%22 y=%22130%22 font-size=%2248%22 font-family=%22cursive%22 font-weight=%22bold%22 fill=%22white%22 text-anchor=%22middle%22%3EChibuku%3C/text%3E%3Cpath d=%22M 100 140 Q 200 160 300 140%22 fill=%22dc2626%22/%3E%3Ctext x=%22200%22 y=%22165%22 font-size=%2220%22 font-family=%22arial%22 fill=%22white%22 text-anchor=%22middle%22 font-style=%22italic%22%3ETaste the goodness%3C/text%3E%3C/svg%3E',
      description: 'Premium beverage products',
      bgColor: 'from-gray-900 to-gray-800',
      isImage: true
    },
    {
      id: 2,
      name: 'Brawley Waters',
      logo: '💧',
      description: 'Pure water solutions',
      bgColor: 'from-cyan-500 to-blue-600'
    },
    {
      id: 3,
      name: 'Coca-Cola',
      logo: '🥤',
      description: 'Soft drinks & beverages',
      bgColor: 'from-red-600 to-red-800'
    },
    {
      id: 4,
      name: 'Sprite',
      logo: '🌟',
      description: 'Refreshing citrus drinks',
      bgColor: 'from-green-500 to-green-700'
    }
  ];

  // Brawley products
  const products = [
    { id: 1, name: 'Brawley Premium Water', types: ['Bottle', 'Crate', 'Container'] },
    { id: 2, name: 'Brawley Sparkling', types: ['Bottle', 'Crate'] },
    { id: 3, name: 'Brawley Natural Spring', types: ['Bottle', 'Container'] },
    { id: 4, name: 'Brawley Mineral Plus', types: ['Bottle', 'Crate', 'Container'] },
    { id: 5, name: 'Brawley Alkaline', types: ['Bottle', 'Crate'] },
    { id: 6, name: 'Brawley Kids Pack', types: ['Bottle', 'Crate'] },
    { id: 7, name: 'Brawley Energy Blend', types: ['Bottle', 'Container'] }
  ];

  const handleLogin = () => {
    if (userId === DEFAULT_USER && password === DEFAULT_PASSWORD) {
      setStep(2);
    } else {
      alert('Invalid credentials! Use ID: pk, Password: demo123');
    }
  };

  const handlePasswordChange = () => {
    if (newPassword && newPassword === confirmPassword && newPassword.length >= 6) {
      setStep(3);
    } else {
      alert('Passwords must match and be at least 6 characters!');
    }
  };

  const handleCompanySelect = (company) => {
    setSelectedCompany(company);
    setStep(4);
  };

  const addToCart = (productId, type, quantity) => {
    if (quantity > 0) {
      setCart({...cart, [`${productId}-${type}`]: { productId, type, quantity }});
    }
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
  };

  const handleCheckout = () => {
    if (getTotalItems() > 0) {
      setStep(5);
    } else {
      alert('Please add items to your cart first!');
    }
  };

  const handlePayment = () => {
    if (phoneNumber && phoneNumber.length >= 10) {
      setStep(6);
      // Simulate payment processing
      setTimeout(() => setStep(7), 2000);
    } else {
      alert('Please enter a valid phone number!');
    }
  };

  // Step 1: Login
  if (step === 1) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800">Eezie</h1>
            <p className="text-gray-600 mt-2">Welcome! Please login to continue</p>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">User ID</label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter User ID"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter Password"
                />
              </div>
            </div>
            
            <button
              onClick={handleLogin}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Login
            </button>
            
            <div className="text-center text-sm text-gray-500 mt-4">
              <p>Demo Credentials:</p>
              <p>ID: <span className="font-mono font-semibold">pk</span></p>
              <p>Password: <span className="font-mono font-semibold">demo123</span></p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Step 2: Change Password
  if (step === 2) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Change Password</h2>
            <p className="text-gray-600 mt-2">Please set a new password</p>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter new password"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Confirm new password"
              />
            </div>
            
            <button
              onClick={handlePasswordChange}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Step 3: Select Company
  if (step === 3) {
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={handleGoBack}
              className="bg-gray-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-700 transition"
            >
              ← Back
            </button>
            <div className="text-center flex-1">
              <h2 className="text-3xl font-bold text-gray-800">Select a Company</h2>
              <p className="text-gray-600 mt-2">Choose a selling company to browse products</p>
            </div>
            <div className="w-16"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {companies.map((company) => (
              <div
                key={company.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer"
                onClick={() => handleCompanySelect(company)}
              >
                <div className={`bg-gradient-to-r ${company.bgColor} h-40 flex items-center justify-center`}>
                  {company.isImage ? (
                    <img src={company.logo} alt={company.name} className="h-32 w-32 object-contain" />
                  ) : (
                    <span className="text-5xl">{company.logo}</span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{company.name}</h3>
                  <p className="text-gray-600 mb-4">{company.description}</p>
                  <div className="flex items-center text-blue-600 font-semibold hover:text-blue-700">
                    View Products <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Step 4: Products Page
  if (step === 4) {
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={handleGoBack}
            className="mb-6 bg-gray-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-700 transition"
          >
            ← Back
          </button>
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800">Brawley Products</h2>
                <p className="text-gray-600 mt-1">Select your items</p>
              </div>
              <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-lg">
                <ShoppingCart className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-blue-600">{getTotalItems()} items</span>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <button
              onClick={handleCheckout}
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
            >
              Proceed to Checkout ({getTotalItems()} items)
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Step 5: Payment
  if (step === 5) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Mobile Money Payment</h2>
            <p className="text-gray-600 mt-2">Complete your order</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-gray-700 mb-2">Order Summary</h3>
            <p className="text-2xl font-bold text-blue-600">{getTotalItems()} items</p>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Telecom</label>
              <select
                value={telecom}
                onChange={(e) => setTelecom(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="MTN">MTN Mobile Money</option>
                <option value="Airtel">Airtel Money</option>
                <option value="Tigo">Tigo Cash</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter phone number"
              />
            </div>
            
            <button
              onClick={handlePayment}
              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Confirm Payment
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Step 6: Processing
  if (step === 6) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md text-center">
          <div className="animate-spin w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-6"></div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Processing Payment...</h2>
          <p className="text-gray-600">Please wait while we confirm your payment</p>
        </div>
      </div>
    );
  }

  // Step 7: Success
  if (step === 7) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md text-center">
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Payment Successful!</h2>
          <p className="text-gray-600 mb-6">Your order has been confirmed</p>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-600">Order Details</p>
            <p className="text-2xl font-bold text-green-600 mt-1">{getTotalItems()} items</p>
            <p className="text-sm text-gray-600 mt-2">Payment via {telecom}</p>
          </div>
          
          <button
            onClick={() => {
              setStep(3);
              setCart({});
              setPhoneNumber('');
              setSelectedCompany(null);
            }}
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Place Another Order
          </button>
        </div>
      </div>
    );
  }
};

const ProductCard = ({ product, addToCart }) => {
  const [selectedType, setSelectedType] = useState(product.types[0]);
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => {
    if (quantity > 0) {
      addToCart(product.id, selectedType, quantity);
      alert(`Added ${quantity} ${selectedType}(s) of ${product.name} to cart!`);
      setQuantity(0);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-bold text-gray-800 mb-4">{product.name}</h3>
      
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {product.types.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
          <input
            type="number"
            min="0"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="0"
          />
        </div>
        
        <button
          onClick={handleAdd}
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BrawleyApp;