// ============================================
// 🤖 AI CHATBOT - Nanang Sanjaya Portfolio
// 100% Gratis, Tanpa API Key
// Smart FAQ + Keyword Matching
// ============================================

const ChatBot = {
    // Chatbot identity
    name: "NanangBot",
    avatar: "🤖",
    
    // Knowledge base - FAQ tentang jasa Nanang
    knowledge: [
        {
            keywords: ["halo", "hai", "hi", "hello", "hey", "selamat", "pagi", "siang", "sore", "malam", "assalam"],
            response: "Halo! 👋 Saya NanangBot, asisten virtual Nanang Sanjaya. Saya bisa bantu kamu tau tentang jasa Meta Ads, pricing, cara kerja, dan lainnya. Silakan tanya apa saja! 😊"
        },
        {
            keywords: ["jasa", "layanan", "service", "offer", "apa saja", "melayani", "bantu"],
            response: "🔧 Jasa yang Nanang tawarkan:\n\n• **Meta Ads Management** — Setup, optimasi & reporting campaign Facebook & Instagram Ads\n• **Landing Page (WordPress)** — Pembuatan & optimasi landing page agar selaras dengan iklan\n• **Creative Ads** — Desain materi iklan menggunakan Canva & AI Tools\n• **Video Ads** — Editing video iklan dengan CapCut & Clipchamp\n\nMau tahu lebih detail tentang jasa tertentu?"
        },
        {
            keywords: ["meta ads", "facebook ads", "instagram ads", "iklan fb", "iklan ig", "fb ads", "ig ads", "advertising"],
            response: "📢 **Meta Ads Specialist**\n\nNanang mengelola campaign Facebook & Instagram Ads secara end-to-end:\n\n• 🔍 Riset & segmentasi audiens\n• 🎯 Setup campaign (cold–warm–hot funnel)\n• ✍️ Creative testing (hook & angle)\n• 💰 Optimasi budget & placement\n• 📊 Reporting performa berkala\n• 🔄 Retargeting & Lookalike Audience\n\nTertarik? Bisa langsung chat WhatsApp Nanang! 👇"
        },
        {
            keywords: ["harga", "biaya", "harga jasa", "berapa", "tarif", "fee", "bayar", "budget", "harga iklan", "minim", "minimum"],
            response: "💰 **Informasi Harga**\n\nBiaya jasa Meta Ads bervariasi tergantung:\n\n• Skala campaign & budget iklan\n• Jumlah platform (FB only / FB+IG)\n• Tingkat kompleksitas funnel\n• Durasi kerja sama\n\nUntuk dapat harga yang tepat, sebaiknya langsung diskusi dengan Nanang via WhatsApp ya! Beliau akan sesuaikan dengan kebutuhan & budget kamu. 😊"
        },
        {
            keywords: ["cara kerja", "proses", "flow", "kerja sama", "kerja sama", "gimana cara", "langkah", "step", "tahap"],
            response: "📋 **Cara Kerja Sama dengan Nanang:**\n\n1️⃣ **Konsultasi Gratis** — Diskusi kebutuhan & goal bisnis kamu\n2️⃣ **Strategy Planning** — Menyusun funnel & target audience\n3️⃣ **Setup Campaign** — Pembuatan campaign, ad set & creative\n4️⃣ **Optimasi Harian** — Monitor, testing & scaling\n5️⃣ **Reporting** — Laporan performa berkala + insight\n\nMau mulai dari step 1? Chat Nanang sekarang! 🚀"
        },
        {
            keywords: ["portfolio", "project", "projek", "hasil", "contoh", "contoh kerja", "pengalaman", "pengalaman"],
            response: "🏆 **Portfolio & Pengalaman Nanang:**\n\n• **2020** — Mulai di dunia digital (desain, editing, konten)\n• **2024** — Meta Ads Specialist di Trendsetter Store\n• **2024** — Web WordPress management\n• **2025-Sekarang** — Meta Ads Specialist di CV INSPIRA MEDIA\n\nProject yang sudah dikerjakan bisa kamu lihat di section **Projects** di website ini! Scroll ke bawah ya 👇"
        },
        {
            keywords: ["tools", "tool", "alat", "pakai apa", "software", "aplikasi"],
            response: "🛠️ **Tools yang Nanang Gunakan:**\n\n• **Meta Ads Manager** — Setup & optimasi campaign\n• **Business Suite** — Content & messaging\n• **Events Manager** — Pixel & CAPI tracking\n• **Canva** — Desain materi iklan\n• **AI Tools** — AI creative exploration\n• **CapCut & Clipchamp** — Editing video iklan\n• **WordPress** — Landing page management\n• **Excel** — Reporting & data analysis"
        },
        {
            keywords: ["wordpress", "landing page", "website", "web", "landing", "lp"],
            response: "🌐 **Landing Page (WordPress)**\n\nNanang juga bisa bantu:\n\n• Setup & kustomisasi tema WordPress\n• Optimasi landing page agar selaras dengan iklan (message match)\n• Perbaikan headline, CTA & elemen trust\n• Optimasi kecepatan loading\n• Struktur section yang conversion-friendly\n\nLanding page yang bagus = iklan yang lebih efektif! 💪"
        },
        {
            keywords: ["video", "editing", "capcut", "clipchamp", "reels", "video ads"],
            response: "🎬 **Video Ads Production**\n\nNanang buat konten video iklan yang engaging:\n\n• Hook kuat di 3 detik pertama\n• Subtitle otomatis untuk aksesibilitas\n• Efek & transisi yang menarik\n• Format vertical (Reels/Stories) & landscape\n• Pacing yang cocok untuk mobile viewers\n\nVideo yang bagus = watch time naik = cost per result turun! 📉"
        },
        {
            keywords: ["canva", "desain", "design", "creative", "kreatif", "banner", "gambar"],
            response: "🎨 **Creative Design (Canva + AI Tools)**\n\nJasa desain materi iklan:\n\n• Feed post & carousel\n• Story & Reels thumbnail\n• A/B testing creative variants\n• Brand-consistent design\n• AI-powered creative exploration\n\nCreative yang menarik = CTR naik = cost lebih efisien! 📈"
        },
        {
            keywords: ["roas", "roi", "hasil", "performa", "efektif", "berhasil", "sukses", "metric", "kpi"],
            response: "📊 **Tentang Hasil & Performa**\n\nNanang fokus pada metrik yang matter:\n\n• **ROAS** (Return on Ad Spend) — revenue vs biaya iklan\n• **Cost per Result** — efisiensi setiap conversion\n• **CTR** — seberapa menarik creative iklan\n• **CPM & CPC** — efisiensi pembelian audiens\n• **Lead Quality** — kualitas lead yang masuk\n\nSetiap campaign dilaporkan secara transparan dan berkala. 📈"
        },
        {
            keywords: ["contact", "kontak", "hubungi", "chat", "wa", "whatsapp", "email", "telepon", "reach"],
            response: "📬 **Cara Hubungi Nanang:**\n\n📱 **WhatsApp**: Klik tombol hijau di kanan bawah website ini\n📧 **Email**: Nanangsanjaya123456@gmail.com\n📸 **Instagram**: @nanangdigital\n📘 **Facebook**: Nanang Sanjaya\n🧵 **Threads**: @nanangdigital\n\nAtau bisa juga isi form Contact di bawah ini ya! 👇"
        },
        {
            keywords: ["funnel", "strategi", "strategy", "cold", "warm", "hot", "top of funnel", "bottom"],
            response: "🔄 **Strategi Funnel Meta Ads**\n\nNanang pakai pendekatan 3-tier funnel:\n\n🧊 **Cold Audience** — Awareness, reach sebanyak mungkin orang yang relevan\n🌤️ **Warm Audience** — Consideration, retarget orang yang sudah interact\n🔥 **Hot Audience** — Conversion, push orang yang paling siap beli\n\nPlus: Lookalike Audience dari customer list untuk scaling! 🚀"
        },
        {
            keywords: ["pixel", "capi", "tracking", "konversi", "event", "data"],
            response: "📡 **Pixel & CAPI Tracking**\n\nTracking yang akurat = optimasi yang tepat!\n\n• Setup Meta Pixel di website\n• Conversions API (CAPI) untuk data server-side\n• Event tracking yang relevan (Lead, Purchase, Add to Cart)\n• Event Match Quality optimization\n\nTanpa tracking yang benar, iklan = buta. Nanang pastiin tracking kamu ok! 👁️"
        },
        {
            keywords: ["terima kasih", "makasih", "thanks", "thank", "thx", "oke", "ok", "sip", "good"],
            response: "Sama-sama! 😊 Senang bisa bantu. Kalau ada pertanyaan lain, jangan ragu tanya ya! Atau langsung chat Nanang via WhatsApp untuk diskusi lebih lanjut. Semoga sukses! 🚀"
        },
        {
            keywords: ["bisa gak", "apakah bisa", "mungkin", "possible", "bisa tidak", "bisa nggak"],
            response: "Bisa banget! 💪 Nanang selalu terbuka untuk diskusi dan kebutuhan baru. Setiap bisnis punya keunikan masing-masing, jadi cara terbaik adalah langsung konsultasi gratis via WhatsApp. Nanang akan analisa kebutuhan kamu dan kasih rekomendasi terbaik! 🎯"
        },
    ],

    // Default response kalau keyword tidak ditemukan
    defaultResponses: [
        "Hmm, saya belum bisa jawab pertanyaan itu secara spesifik. 🤔 Tapi Nanang pasti bisa bantu! Coba chat beliau langsung via WhatsApp ya — klik tombol hijau di bawah! 👇",
        "Pertanyaan bagus! Sayangnya di luar knowledge saya. 😅 Tapi jangan khawatir, Nanang bisa jawab langsung. Hubungi via WhatsApp aja ya! 📱",
        "Maaf, saya masih belajar! 📚 Untuk pertanyaan yang lebih detail, Nanang sendiri yang bisa jawab dengan lengkap. Chat beliau via WhatsApp ya! 💬",
    ],

    // Welcome message
    welcomeMessage: "Halo! 👋 Saya **NanangBot**, asisten virtual Nanang Sanjaya.\n\nSaya bisa bantu kamu dengan:\n• 📢 Info jasa Meta Ads\n• 💰 Informasi harga\n• 📋 Cara kerja sama\n• 🏆 Portfolio & pengalaman\n• 🛠️ Tools yang dipakai\n\nSilakan tanya apa saja! 😊",

    // Find best matching response
    getResponse(input) {
        const text = input.toLowerCase().trim();
        
        // Score each knowledge entry
        let bestMatch = null;
        let bestScore = 0;

        for (const entry of this.knowledge) {
            let score = 0;
            for (const keyword of entry.keywords) {
                if (text.includes(keyword)) {
                    score += keyword.length; // Longer keyword = better match
                }
            }
            if (score > bestScore) {
                bestScore = score;
                bestMatch = entry;
            }
        }

        if (bestMatch && bestScore > 0) {
            return bestMatch.response;
        }

        // Return random default response
        return this.defaultResponses[Math.floor(Math.random() * this.defaultResponses.length)];
    }
};

// ============================================
// UI Controller
// ============================================

let chatOpen = false;
let chatInitialized = false;

function initChatBot() {
    if (chatInitialized) return;
    chatInitialized = true;

    // Create chatbot HTML
    const chatHTML = `
    <!-- AI Chatbot Toggle Button - KIRI -->
    <button id="chatbot-toggle" onclick="toggleChat()" 
        class="fixed bottom-5 left-5 sm:bottom-6 sm:left-6 z-[70] w-12 h-12 sm:w-14 sm:h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group"
        aria-label="Chat dengan AI">
        <span class="chatbot-icon-open">
            <i class="fas fa-robot text-xl sm:text-2xl"></i>
        </span>
        <span class="chatbot-icon-close hidden">
            <i class="fas fa-times text-xl sm:text-2xl"></i>
        </span>
        <span class="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
    </button>

    <!-- Chatbot Window - KIRI -->
    <div id="chatbot-window" class="fixed left-5 sm:left-6 z-[70] w-[340px] max-w-[calc(100vw-40px)] rounded-2xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden transition-all duration-300 transform scale-0 opacity-0 origin-bottom-left flex flex-col" style="bottom: 5rem; max-height: calc(100vh - 7rem);">
        
        <!-- Header -->
        <div class="bg-primary text-white p-3 sm:p-4 flex items-center gap-3 shrink-0">
            <div class="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center text-base sm:text-xl">
                🤖
            </div>
            <div class="flex-1 min-w-0">
                <h3 class="font-bold text-sm">NanangBot</h3>
                <p class="text-xs text-white/70 flex items-center gap-1">
                    <span class="w-2 h-2 rounded-full bg-green-400 inline-block"></span>
                    Online — Asisten AI
                </p>
            </div>
            <button onclick="toggleChat()" class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors shrink-0" aria-label="Tutup chat">
                <i class="fas fa-times text-sm"></i>
            </button>
        </div>

        <!-- Messages -->
        <div id="chatbot-messages" class="bg-white dark:bg-[#111] flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 scroll-smooth no-scrollbar" style="min-height: 180px; max-height: 50vh;">
        </div>

        <!-- Quick Replies -->
        <div id="chatbot-quick" class="bg-white dark:bg-[#111] px-3 sm:px-4 pb-2 flex gap-2 overflow-x-auto no-scrollbar shrink-0">
            <button onclick="sendQuickReply('Jasa apa saja?')" class="shrink-0 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-bold hover:bg-primary hover:text-white transition-colors">Jasa apa saja?</button>
            <button onclick="sendQuickReply('Berapa harga?')" class="shrink-0 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-bold hover:bg-primary hover:text-white transition-colors">Berapa harga?</button>
            <button onclick="sendQuickReply('Cara kerja sama?')" class="shrink-0 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-bold hover:bg-primary hover:text-white transition-colors">Cara kerja sama?</button>
            <button onclick="sendQuickReply('Hubungi Nanang')" class="shrink-0 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-bold hover:bg-primary hover:text-white transition-colors">Hubungi Nanang</button>
        </div>

        <!-- Input -->
        <div class="bg-white dark:bg-[#111] border-t border-slate-200 dark:border-white/10 p-2.5 sm:p-3 flex gap-2 shrink-0">
            <input id="chatbot-input" type="text" 
                class="flex-1 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm outline-none focus:border-primary dark:text-white" 
                placeholder="Ketik pertanyaan..."
                onkeypress="if(event.key==='Enter')sendMessage()">
            <button onclick="sendMessage()" 
                class="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-blue-700 transition-colors shrink-0">
                <i class="fas fa-paper-plane text-sm"></i>
            </button>
        </div>
    </div>
    `;

    document.body.insertAdjacentHTML('beforeend', chatHTML);
}

function toggleChat() {
    chatOpen = !chatOpen;
    const chatWindow = document.getElementById('chatbot-window');
    const iconOpen = document.querySelector('.chatbot-icon-open');
    const iconClose = document.querySelector('.chatbot-icon-close');
    const toggleBtn = document.getElementById('chatbot-toggle');

    if (chatOpen) {
        // Position chatbot window above the toggle button (KIRI)
        const btnRect = toggleBtn.getBoundingClientRect();
        const gap = 12;
        chatWindow.style.bottom = (window.innerHeight - btnRect.top + gap) + 'px';

        chatWindow.classList.remove('scale-0', 'opacity-0');
        chatWindow.classList.add('scale-100', 'opacity-100');
        iconOpen.classList.add('hidden');
        iconClose.classList.remove('hidden');

        // Show welcome message on first open
        if (!chatWindow.dataset.welcomed) {
            chatWindow.dataset.welcomed = 'true';
            addBotMessage(ChatBot.welcomeMessage);
        }
    } else {
        chatWindow.classList.remove('scale-100', 'opacity-100');
        chatWindow.classList.add('scale-0', 'opacity-0');
        iconOpen.classList.remove('hidden');
        iconClose.classList.add('hidden');
    }
}

function sendMessage() {
    const input = document.getElementById('chatbot-input');
    const text = input.value.trim();
    if (!text) return;

    addUserMessage(text);
    input.value = '';

    // Show typing indicator
    showTyping();

    // Simulate thinking delay
    setTimeout(() => {
        removeTyping();
        const response = ChatBot.getResponse(text);
        addBotMessage(response);
    }, 800 + Math.random() * 800);
}

function sendQuickReply(text) {
    document.getElementById('chatbot-input').value = text;
    sendMessage();
}

function addUserMessage(text) {
    const container = document.getElementById('chatbot-messages');
    const msg = document.createElement('div');
    msg.className = 'flex justify-end';
    msg.innerHTML = `
        <div class="max-w-[80%] bg-primary text-white px-4 py-2.5 rounded-2xl rounded-br-md text-sm leading-relaxed">
            ${escapeHtml(text)}
        </div>
    `;
    container.appendChild(msg);
    scrollToBottom();
}

function addBotMessage(text) {
    const container = document.getElementById('chatbot-messages');
    const msg = document.createElement('div');
    msg.className = 'flex justify-start gap-2';
    
    // Convert markdown-like formatting
    const formatted = text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br>');
    
    msg.innerHTML = `
        <div class="w-7 h-7 bg-primary/10 rounded-full flex items-center justify-center text-sm shrink-0 mt-1">🤖</div>
        <div class="max-w-[80%] bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 px-4 py-2.5 rounded-2xl rounded-bl-md text-sm leading-relaxed">
            ${formatted}
        </div>
    `;
    container.appendChild(msg);
    scrollToBottom();
}

function showTyping() {
    const container = document.getElementById('chatbot-messages');
    const typing = document.createElement('div');
    typing.id = 'chatbot-typing';
    typing.className = 'flex justify-start gap-2';
    typing.innerHTML = `
        <div class="w-7 h-7 bg-primary/10 rounded-full flex items-center justify-center text-sm shrink-0 mt-1">🤖</div>
        <div class="bg-slate-100 dark:bg-white/5 text-slate-500 px-4 py-3 rounded-2xl rounded-bl-md text-sm">
            <span class="flex gap-1">
                <span class="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style="animation-delay:0ms"></span>
                <span class="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style="animation-delay:150ms"></span>
                <span class="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style="animation-delay:300ms"></span>
            </span>
        </div>
    `;
    container.appendChild(typing);
    scrollToBottom();
}

function removeTyping() {
    const typing = document.getElementById('chatbot-typing');
    if (typing) typing.remove();
}

function scrollToBottom() {
    const container = document.getElementById('chatbot-messages');
    container.scrollTop = container.scrollHeight;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Initialize on page load
window.addEventListener('load', () => {
    setTimeout(initChatBot, 1500);
});
