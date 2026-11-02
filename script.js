// BuzzHub bilingual interface: all visible UI copy switches with the language.
const translations = {
  id: {
    navServices:"Layanan", navHow:"Cara Kerja", navAbout:"Tentang", login:"Masuk",
    getStarted:"Mulai Sekarang", eyebrow:"MITRA PROMOSI DIGITAL ANDA",
    heroTitle:'Buat brand Anda<br><span>lebih dikenal dan diingat.</span>',
    heroDesc:"Satu tempat untuk merencanakan promosi digital, terhubung dengan kreator, dan memantau hasil kampanye.",
    exploreServices:"Jelajahi Layanan", seeHow:"Lihat Cara Kerja",
    trustText:"Untuk kreator dan bisnis yang ingin berkembang secara autentik.",
    builtFor:"DIBUAT UNTUK GENERASI BERIKUTNYA",
    servicesTitle:"Semua yang dibutuhkan<br>untuk mengembangkan brand.",
    servicesDesc:"Pilih dukungan promosi digital sesuai kebutuhan. Fokus pada strategi, kreativitas, dan audiens nyata.",
    service1:"Strategi Kampanye", service1d:"Rencanakan tujuan, audiens, kanal, dan langkah kampanye dengan lebih terarah.",
    service2:"Kolaborasi Kreator", service2d:"Temukan peluang kolaborasi dengan kreator yang sesuai dengan brand Anda.",
    service3:"Produksi Konten", service3d:"Dukungan ide, desain, video, dan materi kreatif untuk kampanye.",
    service4:"Iklan & Analitik", service4d:"Kelola iklan resmi dan pahami hasil kampanye melalui laporan performa.",
    howTitle:"Dari ide menjadi dampak<br>dalam tiga langkah.",
    howDesc:"Alur yang jelas membantu Anda tetap fokus pada tujuan kampanye.",
    step1:"Ceritakan tujuan Anda", step1d:"Ceritakan brand, target audiens, dan hasil yang ingin dicapai.",
    step2:"Susun kampanye", step2d:"Pilih dukungan yang sesuai dan susun rencana bersama tim.",
    step3:"Pantau perkembangan", step3d:"Pantau pekerjaan dan evaluasi performa kampanye secara transparan.",
    workspaceTitle:'Pantau semua hal<br><span>yang sedang berjalan.</span>',
    workspaceDesc:"Dasbor BuzzHub membantu Anda melihat kampanye, aktivitas, dan pembaruan dalam satu tempat.",
    workspaceCta:"Dapatkan akses awal",
    ctaTitle:"Siap membuat brand Anda<br>jadi perbincangan?",
    ctaDesc:"Ceritakan kebutuhan promosi digital Anda. Tim BuzzHub akan membantu menentukan langkah berikutnya.",
    contactUs:"Hubungi BuzzHub"
  },
  en: {
    navServices:"Services", navHow:"How It Works", navAbout:"About", login:"Log in",
    getStarted:"Get Started", eyebrow:"YOUR DIGITAL PROMOTION PARTNER",
    heroTitle:'Make your brand<br><span>impossible to ignore.</span>',
    heroDesc:"One place to plan digital promotion, connect with creators, and track campaign performance.",
    exploreServices:"Explore Services", seeHow:"See How It Works",
    trustText:"Built for creators and businesses who want to grow authentically.",
    builtFor:"BUILT FOR THE NEXT GENERATION",
    servicesTitle:"Everything to move<br>your brand forward.",
    servicesDesc:"Choose digital promotion support that fits your goals. Focus on strategy, creativity, and real audiences.",
    service1:"Campaign Strategy", service1d:"Plan your goals, audience, channels, and campaign direction with clarity.",
    service2:"Creator Collaboration", service2d:"Find collaboration opportunities with creators relevant to your brand.",
    service3:"Content Production", service3d:"Get creative support for ideas, design, video, and campaign assets.",
    service4:"Ads & Analytics", service4d:"Manage official advertising and understand results through performance reports.",
    howTitle:"From idea to impact<br>in three steps.",
    howDesc:"A clear process helps you stay focused on your campaign goals.",
    step1:"Tell us your goal", step1d:"Share your brand, target audience, and the outcome you want to achieve.",
    step2:"Build your campaign", step2d:"Choose the right support and shape a plan with the team.",
    step3:"Track real progress", step3d:"Monitor the work and evaluate campaign performance transparently.",
    workspaceTitle:'A clearer view of<br><span>everything in motion.</span>',
    workspaceDesc:"The BuzzHub dashboard helps you see campaigns, activity, and updates in one place.",
    workspaceCta:"Get early access",
    ctaTitle:"Ready to make your<br>brand buzz?",
    ctaDesc:"Tell us what your digital promotion needs look like. The BuzzHub team can help plan your next step.",
    contactUs:"Contact BuzzHub"
  }
};

const staticCopy = {
  id: {
    "BUZZHUB / OVERVIEW":"BUZZHUB / RINGKASAN",
    "LIVE PREVIEW":"PRATINJAU LANGSUNG",
    "MONDAY, 02 NOVEMBER":"SENIN, 02 NOVEMBER",
    "Campaign overview":"Ringkasan kampanye",
    "Active campaigns":"Kampanye aktif",
    "Creator reach":"Jangkauan kreator",
    "Content delivered":"Konten selesai",
    "This month":"Bulan ini",
    "PERFORMANCE":"PERFORMA",
    "Campaign activity":"Aktivitas kampanye",
    "Last 7 days⌄":"7 hari terakhir⌄",
    "Mon":"Sen", "Tue":"Sel", "Wed":"Rab", "Thu":"Kam", "Fri":"Jum", "Sat":"Sab", "Sun":"Min",
    "UPCOMING":"SEGERA HADIR",
    "Creator collaboration":"Kolaborasi kreator",
    "Tomorrow · 10:00 AM":"Besok · 10.00",
    "QUICK ACTION":"AKSI CEPAT",
    "＋ New campaign":"＋ Kampanye baru",
    "Plan your next promotion":"Rencanakan promosi berikutnya",
    "One hub. Clear direction.":"Satu pusat. Arah yang jelas.",
    "Plan · Launch · Measure":"Rencanakan · Jalankan · Evaluasi",
    "CREATORS":"KREATOR", "SMALL BUSINESS":"BISNIS KECIL",
    "BRANDS":"BRAND", "AGENCIES":"AGENSI",
    "WHAT WE DO":"LAYANAN KAMI",
    "Explore service":"Lihat layanan",
    "SIMPLE BY DESIGN":"SIMPLE DAN TERARAH",
    "YOUR WORKSPACE":"RUANG KERJA ANDA",
    "Workspace overview":"Ringkasan ruang kerja",
    "● All systems ready":"● Semua sistem siap",
    "CAMPAIGNS":"KAMPANYE", "IN PROGRESS":"SEDANG BERJALAN",
    "REPORTS":"LAPORAN", "Content production":"Produksi konten",
    "Creator outreach":"Pendekatan kreator",
    "Campaign planning":"Perencanaan kampanye",
    "DEMO PREVIEW · SAMPLE DATA":"PRATINJAU DEMO · DATA CONTOH",
    "LET'S MAKE SOME NOISE":"SAATNYA MEMBUAT GEBRAKAN",
    "Demo contact address — replace before launch.":"Alamat kontak demo — ganti sebelum peluncuran.",
    "Services":"Layanan", "About":"Tentang", "Contact":"Kontak",
    "© 2026 BuzzHub. Make Your Brand Buzz.":"© 2026 BuzzHub. Buat Brand Anda Jadi Perbincangan."
  },
  en: {
    "BUZZHUB / RINGKASAN":"BUZZHUB / OVERVIEW",
    "PRATINJAU LANGSUNG":"LIVE PREVIEW",
    "SENIN, 02 NOVEMBER":"MONDAY, 02 NOVEMBER",
    "Ringkasan kampanye":"Campaign overview",
    "Kampanye aktif":"Active campaigns", "Jangkauan kreator":"Creator reach",
    "Konten selesai":"Content delivered", "Bulan ini":"This month",
    "PERFORMA":"PERFORMANCE", "Aktivitas kampanye":"Campaign activity",
    "7 hari terakhir⌄":"Last 7 days⌄",
    "Sen":"Mon", "Sel":"Tue", "Rab":"Wed", "Kam":"Thu", "Jum":"Fri", "Sab":"Sat", "Min":"Sun",
    "SEGERA HADIR":"UPCOMING", "Kolaborasi kreator":"Creator collaboration",
    "Besok · 10.00":"Tomorrow · 10:00 AM", "AKSI CEPAT":"QUICK ACTION",
    "＋ Kampanye baru":"＋ New campaign",
    "Rencanakan promosi berikutnya":"Plan your next promotion",
    "Satu pusat. Arah yang jelas.":"One hub. Clear direction.",
    "Rencanakan · Jalankan · Evaluasi":"Plan · Launch · Measure",
    "KREATOR":"CREATORS", "BISNIS KECIL":"SMALL BUSINESS",
    "BRAND":"BRANDS", "AGENSI":"AGENCIES", "LAYANAN KAMI":"WHAT WE DO",
    "Lihat layanan":"Explore service", "SIMPLE DAN TERARAH":"SIMPLE BY DESIGN",
    "RUANG KERJA ANDA":"YOUR WORKSPACE",
    "Ringkasan ruang kerja":"Workspace overview",
    "● Semua sistem siap":"● All systems ready",
    "KAMPANYE":"CAMPAIGNS", "SEDANG BERJALAN":"IN PROGRESS",
    "LAPORAN":"REPORTS", "Produksi konten":"Content production",
    "Pendekatan kreator":"Creator outreach",
    "Perencanaan kampanye":"Campaign planning",
    "PRATINJAU DEMO · DATA CONTOH":"DEMO PREVIEW · SAMPLE DATA",
    "SAATNYA MEMBUAT GEBRAKAN":"LET'S MAKE SOME NOISE",
    "Alamat kontak demo — ganti sebelum peluncuran.":"Demo contact address — replace before launch.",
    "Layanan":"Services", "Tentang":"About", "Kontak":"Contact",
    "© 2026 BuzzHub. Buat Brand Anda Jadi Perbincangan.":"© 2026 BuzzHub. Make Your Brand Buzz."
  }
};

let language = "id";
const toggle = document.getElementById("languageToggle");

function replaceLeafText(dictionary) {
  document.querySelectorAll("body *").forEach(el => {
    if (el.children.length === 0) {
      const original = el.textContent.trim();
      if (Object.prototype.hasOwnProperty.call(dictionary, original)) {
        el.textContent = dictionary[original];
      }
    }
  });
}

function applyLanguage() {
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[language][key]) el.innerHTML = translations[language][key];
  });
  replaceLeafText(staticCopy[language]);
  document.title = language === "id"
    ? "BuzzHub — Buat Brand Anda Jadi Perbincangan"
    : "BuzzHub — Make Your Brand Buzz";
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = language === "id"
    ? "BuzzHub — pusat promosi digital, kolaborasi kreator, dan pengelolaan kampanye Anda."
    : "BuzzHub — your hub for digital promotion, creator collaborations, and campaign management.";
  toggle.setAttribute("aria-label", language === "id" ? "Ganti bahasa" : "Switch language");
}

toggle.addEventListener("click", () => {
  language = language === "id" ? "en" : "id";
  applyLanguage();
});
applyLanguage();

document.getElementById("mobileMenu").addEventListener("click", () => {
  const nav = document.querySelector(".desktop-nav");
  const visible = nav.style.display === "flex";
  nav.style.display = visible ? "none" : "flex";
  if (!visible) {
    Object.assign(nav.style, {
      position:"absolute", top:"65px", left:"0", right:"0", padding:"18px",
      background:"#141827", border:"1px solid #30364a",
      borderRadius:"12px", flexDirection:"column", gap:"18px"
    });
  }
});
