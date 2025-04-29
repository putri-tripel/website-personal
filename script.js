const foods = [
    { name: "Nasi Goreng", price: 20000 },
    { name: "Mie Ayam", price: 15000 },
    { name: "Bakso", price: 18000 },
  ];
  
  const cart = [];
  
  function showSection(id) {
    document.querySelectorAll("section").forEach((sec) => {
      sec.classList.remove("active");
    });
    document.getElementById(id).classList.add("active");
  }
  
  function addToCart(food) {
    cart.push(food);
    updateCart();
  }
  
  function updateCart() {
    const cartList = document.getElementById("cart-list");
    cartList.innerHTML = "";
    cart.forEach((item, index) => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - Rp${item.price}`;
      cartList.appendChild(li);
    });
  }
  
  function renderFoods() {
    const container = document.getElementById("food-list");
    foods.forEach((food) => {
      const div = document.createElement("div");
      div.className = "food-item";
      div.innerHTML = `
        <h3>${food.name}</h3>
        <p>Harga: Rp${food.price}</p>
        <button onclick='addToCart(${JSON.stringify(food)})'>Tambah ke Keranjang</button>
      `;
      container.appendChild(div);
    });
  }
  
  renderFoods();
  let loggedIn = false;

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const msg = document.getElementById("login-message");

  if (user === "admin" && pass === "1234") {
    loggedIn = true;
    msg.textContent = "Login berhasil!";
    showSection("home");
  } else {
    msg.textContent = "Username atau password salah.";
  }
}

function pay() {
  if (!loggedIn) {
    document.getElementById("payment-message").textContent = "Harap login terlebih dahulu.";
    return;
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const method = document.getElementById("method").value;

  if (cart.length === 0) {
    document.getElementById("payment-message").textContent = "Keranjang kosong.";
    return;
  }

  document.getElementById("payment-message").textContent = `Pembayaran sebesar Rp${total} berhasil via ${method.toUpperCase()}.`;
  cart.length = 0;
  updateCart();
  updateTotal();
}

function updateTotal() {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  document.getElementById("total-price").textContent = `Rp${total}`;
}
function updateCart() {
    const cartList = document.getElementById("cart-list");
    cartList.innerHTML = "";
    cart.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - Rp${item.price}`;
      cartList.appendChild(li);
    });
    updateTotal();
  }
  document.getElementById("seller-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const sellerName = document.getElementById("seller-name").value;
    const sellerEmail = document.getElementById("seller-email").value;
    const sellerPassword = document.getElementById("seller-password").value;
    
    // Simulasikan pendaftaran penjual
    if (sellerName && sellerEmail && sellerPassword) {
      document.getElementById("seller-message").textContent = "Pendaftaran Penjual Berhasil!";
      // Simpan data penjual ke dalam localStorage atau database
    } else {
      document.getElementById("seller-message").textContent = "Harap isi semua kolom!";
    }
  });
  function showAddProductForm() {
    document.getElementById("add-product-form").style.display = "block";
  }
  
  document.getElementById("product-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const productName = document.getElementById("product-name").value;
    const productPrice = document.getElementById("product-price").value;
    const productDescription = document.getElementById("product-description").value;
    
    if (productName && productPrice && productDescription) {
      const product = {
        name: productName,
        price: productPrice,
        description: productDescription,
      };
  
      // Simpan produk ke dalam database atau localStorage
      const productList = document.getElementById("product-list");
      const productItem = document.createElement("div");
      productItem.innerHTML = `
        <h4>${product.name}</h4>
        <p>Harga: Rp${product.price}</p>
        <p>${product.description}</p>
      `;
      productList.appendChild(productItem);
      
      // Sembunyikan form setelah produk ditambahkan
      document.getElementById("add-product-form").style.display = "none";
    } else {
      alert("Harap isi semua kolom!");
    }
  });
  