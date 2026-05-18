// ====================== ADMIN.JS - ORTAK FONKSİYONLAR ======================

function isAdmin() {
  return localStorage.getItem("isAdmin") === "true";
}

function checkAdminAccess() {
  if (!isAdmin()) {
    alert("❌ Bu sayfaya sadece Admin yetkisiyle erişebilirsiniz!");
    window.location.href = "dashboard.html";
    return false;
  }
  return true;
}

function renderSidebar(activePage = 'admin') {
  document.getElementById('sidebar').innerHTML = `
    <div class="px-6 py-8 border-b border-zinc-800">
      <div class="flex items-center gap-3">
        <div class="w-9 h-9 bg-emerald-500 rounded-2xl flex items-center justify-center text-2xl">💪</div>
        <h1 class="text-2xl font-bold text-white">FitTrack</h1>
      </div>
      <p class="text-pink-400 text-sm mt-1 pl-1">Admin Paneli</p>
    </div>

    <nav class="flex-1 px-3 py-6 space-y-1">
      <a href="admin.html" class="flex items-center gap-3 px-6 py-3 rounded-2xl ${activePage === 'admin' ? 'bg-zinc-800 text-pink-400' : 'text-zinc-400 hover:bg-zinc-800 transition'}">
        <i class="fas fa-cogs w-5"></i><span>Admin Paneli</span>
      </a>

      <div class="px-6 mt-8 mb-3">
        <span class="text-pink-400 text-xs font-semibold tracking-widest">YÖNETİM</span>
      </div>
      
      <a href="admin-stats.html" class="flex items-center gap-3 px-6 py-3 rounded-2xl ${activePage === 'stats' ? 'bg-zinc-800 text-pink-400' : 'text-zinc-400 hover:bg-zinc-800 transition'}">
        <i class="fas fa-chart-bar w-5"></i><span>İstatistikler & Raporlar</span>
      </a>

      <a href="admin-workouts.html" class="flex items-center gap-3 px-6 py-3 rounded-2xl ${activePage === 'workouts' ? 'bg-zinc-800 text-pink-400' : 'text-zinc-400 hover:bg-zinc-800 transition'}">
        <i class="fas fa-dumbbell w-5"></i><span>Antrenman Yönetimi</span>
      </a>

      <div class="px-6 mt-8 mb-3">
        <span class="text-pink-400 text-xs font-semibold tracking-widest">SİSTEM</span>
      </div>
      
      <a href="admin-settings.html" class="flex items-center gap-3 px-6 py-3 rounded-2xl ${activePage === 'settings' ? 'bg-zinc-800 text-pink-400' : 'text-zinc-400 hover:bg-zinc-800 transition'}">
        <i class="fas fa-cog w-5"></i><span>Sistem Ayarları</span>
      </a>

      <a href="admin-site.html" class="flex items-center gap-3 px-6 py-3 rounded-2xl ${activePage === 'site' ? 'bg-zinc-800 text-pink-400' : 'text-zinc-400 hover:bg-zinc-800 transition'}">
        <i class="fas fa-globe w-5"></i><span>Site Ayarları</span>
      </a>
    </nav>

    <div class="p-6 border-t border-zinc-800 mt-auto">
      <button onclick="cikisYap()" class="w-full flex items-center justify-center gap-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 hover:text-red-300 py-4 rounded-2xl transition font-medium">
        <i class="fas fa-sign-out-alt"></i><span>Çıkış Yap</span>
      </button>
    </div>
  `;
}

function cikisYap() {
  if (confirm("Çıkış yapmak istediğinden emin misin?")) {
    localStorage.removeItem("isAdmin");
    window.location.href = "index.html";
  }
}

// ====================== LOCAL VERİTABANI ======================
const USERS_KEY = "fittrack_users";

function loadUsers() {
  const savedUsers = localStorage.getItem(USERS_KEY);
  if (savedUsers) return JSON.parse(savedUsers);

  const defaultUsers = [
    { id: 1, name: "Emirhan Yılmaz", email: "emirhan@example.com", date: "2026-01-15", status: "Aktif" },
    { id: 2, name: "Ayşe Demir", email: "ayse@example.com", date: "2026-02-01", status: "Aktif" },
    { id: 3, name: "Mehmet Kaya", email: "mehmet@example.com", date: "2026-02-10", status: "Pasif" },
    { id: 4, name: "Zeynep Öztürk", email: "zeynep@example.com", date: "2026-03-05", status: "Aktif" }
  ];
  localStorage.setItem(USERS_KEY, JSON.stringify(defaultUsers));
  return defaultUsers;
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}