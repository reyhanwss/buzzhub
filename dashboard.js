document.addEventListener("DOMContentLoaded", async () => {
  const API_BASE = "https://buzzhub-api.reyhanwss.workers.dev";
  const missing = !window.supabase || typeof SUPABASE_URL === "undefined" ||
    SUPABASE_URL.includes("PASTE_") || SUPABASE_PUBLISHABLE_KEY.includes("PASTE_");

  if (missing) {
    const welcome = document.querySelector("#welcome-name");
    if (welcome) welcome.textContent = "Konfigurasi Supabase belum diisi";
    return;
  }

  const { data: { session }, error: sessionError } = await supabaseClient.auth.getSession();
  if (sessionError || !session) {
    location.replace("login.html");
    return;
  }

  const user = session.user;
  const email = user.email || "BuzzHub user";
  const initial = email.charAt(0).toUpperCase();
  document.querySelector("#side-email").textContent = email;
  document.querySelector("#profile-email").textContent = email;
  document.querySelector("#welcome-name").textContent = email.split("@")[0];
  document.querySelector("#avatar").textContent = initial;
  document.querySelector("#profile-avatar").textContent = initial;

  async function logout() {
    await supabaseClient.auth.signOut();
    location.replace("login.html");
  }
  document.querySelector("#logout").addEventListener("click", logout);
  document.querySelector("#profile-logout").addEventListener("click", logout);

  const names = {
    overview: "Overview", catalog: "Katalog layanan", orders: "Pesanan saya",
    payments: "Pembayaran", profile: "Profil akun"
  };

  function showSection(name) {
    if (!names[name]) name = "overview";
    document.querySelectorAll(".page-section").forEach(el =>
      el.classList.toggle("active", el.id === "section-" + name));
    document.querySelectorAll(".nav-link").forEach(el =>
      el.classList.toggle("active", el.dataset.section === name));
    document.querySelector("#page-name").textContent = names[name];
    document.querySelector("#sidebar").classList.remove("open");
    if (location.hash !== "#" + name) history.replaceState(null, "", "#" + name);
  }

  document.querySelectorAll("[data-section],[data-goto]").forEach(el => {
    el.addEventListener("click", event => {
      const name = el.dataset.section || el.dataset.goto;
      if (name) {
        event.preventDefault();
        showSection(name);
      }
    });
  });
  document.querySelector("#menu-btn").addEventListener("click", () =>
    document.querySelector("#sidebar").classList.toggle("open"));
  showSection(location.hash.slice(1) || "overview");

  const fmt = value => new Intl.NumberFormat("id-ID", {
    style: "currency", currency: "IDR", maximumFractionDigits: 0
  }).format(Number(value || 0));
  const safe = value => String(value ?? "—").replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[char]));
  const status = value => ({
    pending: "Menunggu", paid: "Dibayar", processing: "Diproses",
    completed: "Selesai", cancelled: "Dibatalkan", failed: "Gagal"
  }[value] || value || "—");

  // Only list genuine marketing/creative services. Do not display fake metric services.
  function isAuthenticService(service) {
    const text = `${service.name || ""} ${service.description || ""}`.toLowerCase();
    const prohibited = /\b(followers?|likes?|views?|comments?|subscribers?|bots?|fake engagement)\b/;
    const legitimate = /(strategy|strategi|content|konten|creator|kreator|influencer|ads|advertising|iklan|brand|branding|identity|identitas|design|desain|video|editing|editing|production|produksi|management|pengelolaan|consultation|konsultasi|campaign|kampanye|audit|calendar|kalender)/;
    return !prohibited.test(text) && legitimate.test(text);
  }

  async function loadCatalog() {
    const grid = document.querySelector(".catalog-grid");
    if (!grid) return;
    grid.innerHTML = '<div class="empty-panel"><p>Memuat katalog layanan…</p></div>';
    try {
      const response = await fetch(`${API_BASE}/api/services`, { method: "GET" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const result = await response.json();
      if (!result.success || !Array.isArray(result.services)) throw new Error("Format respons API tidak sesuai");

      const services = result.services.filter(service => service.is_active && isAuthenticService(service));
      if (!services.length) {
        grid.innerHTML = '<div class="empty-panel"><h3>Belum ada layanan tersedia</h3><p>Katalog akan menampilkan layanan pemasaran dan kreatif yang autentik setelah diaktifkan.</p></div>';
        return;
      }

      grid.innerHTML = services.map(service => {
        const price = service.fixed_price != null
          ? fmt(service.fixed_price)
          : service.price_per_1000 != null
            ? `${fmt(service.price_per_1000)} / 1.000 ${safe(service.unit_label || "unit")}`
            : "Hubungi kami untuk harga";
        const estimate = service.estimated_days
          ? `<p class="service-meta">Estimasi: ${safe(service.estimated_days)} hari</p>` : "";
        return `<article class="catalog-card">
          <span class="tag">BUZZHUB SERVICE</span>
          <h3>${safe(service.name)}</h3>
          <p>${safe(service.description || "Layanan profesional BuzzHub untuk mengembangkan brand.")}</p>
          <strong class="service-price">${price}</strong>
          ${estimate}
          <span class="coming">Tersedia</span>
        </article>`;
      }).join("");
    } catch (error) {
      console.error("BuzzHub catalog error:", error);
      grid.innerHTML = '<div class="empty-panel"><h3>Katalog belum dapat dimuat</h3><p>Periksa koneksi API BuzzHub, lalu muat ulang halaman.</p></div>';
    }
  }

  const { data: orders, error } = await supabaseClient.from("orders")
    .select("order_number,service_name,order_status,total_amount,created_at")
    .eq("user_id", user.id).order("created_at", { ascending: false }).limit(50);

  const renderOrders = rows => rows.length
    ? rows.map(order => `<tr><td>${safe(order.order_number)}</td><td>${safe(order.service_name)}</td><td>${safe(status(order.order_status))}</td><td>${fmt(order.total_amount)}</td></tr>`).join("")
    : '<tr><td colspan="4" class="empty">Belum ada pesanan.</td></tr>';

  if (error) {
    const message = '<tr><td colspan="4" class="empty">Pesanan belum dapat dimuat. Akses database akan kita periksa nanti.</td></tr>';
    document.querySelector("#recent-orders").innerHTML = message;
    document.querySelector("#all-orders").innerHTML = message;
  } else {
    document.querySelector("#recent-orders").innerHTML = renderOrders((orders || []).slice(0, 5));
    document.querySelector("#all-orders").innerHTML = renderOrders(orders || []);
    document.querySelector("#stat-total").textContent = (orders || []).length;
    document.querySelector("#stat-active").textContent = (orders || []).filter(order => ["paid", "processing"].includes(order.order_status)).length;
    document.querySelector("#stat-done").textContent = (orders || []).filter(order => order.order_status === "completed").length;
  }

  await loadCatalog();
});
