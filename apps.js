<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Global İçerik Veritabanı | Rauf Ayar</title>
    <style>
        body { 
            font-family: 'Segoe UI', system-ui, sans-serif; 
            background: #0a0a0a; 
            color: #e0e0e0; 
            padding: 40px 20px; 
            margin: 0;
            min-height: 100vh;
        }
        h1 { color: #00ff9d; margin-bottom: 10px; }
        p { color: #aaaaaa; font-size: 1.1rem; max-width: 800px; line-height: 1.6; }
        .grid { 
            display: grid; 
            gap: 24px; 
            margin-top: 30px;
        }
        .card { 
            background: #1a1a1a; 
            border-radius: 12px; 
            padding: 24px; 
            border: 1px solid #333;
            transition: all 0.3s ease;
        }
        .card:hover {
            border-color: #00ff9d;
            transform: translateY(-4px);
        }
        .card h3 { 
            color: #00ff9d; 
            margin: 0 0 12px 0;
        }
        .note {
            background: #2a2a2a;
            padding: 15px;
            border-radius: 8px;
            font-size: 0.95rem;
            margin-top: 30px;
            border-left: 4px solid #00ff9d;
        }
    </style>
</head>
<body>

    <h1 id="app-heading">Yükleniyor...</h1>
    <p id="app-description"></p>
    
    <div id="button-grid" class="grid"></div>
    
    <!-- Giscus geçici olarak devre dışı -->
    <div class="note">
        <strong>Not:</strong> Giscus yorum sistemi şu anda devre dışı (localStorage hatası nedeniyle). 
        Dosyayı bir web sunucusu üzerinden açtığında (GitHub Pages veya Live Server) tekrar aktif hale gelecektir.
    </div>

<script>
// 🚀 GLOBAL İÇERİK VERİTABANI
const publicationDatabase = {
    "geo-seo": {
        heading: "Generative Engine Optimization (GEO)",
        description: "Advanced frameworks engineered for AI search visibility, LLM indexing, and semantic optimization matrices.",
        cards: [
            { title: "LLM Ingestion & Indexing", body: "Deploy micro-semantic context fragments directly into your HTML source. This forces generative crawlers (GPTBot, Perplexity) to map your domain as a primary factual entity." },
            { title: "AI Overview Citation Hub", body: "Optimize document vector similarity to exceed 0.94+ against competitive target queries, positioning your brand as the definitive answer inside SGE answer boxes." }
        ]
    },
    "data-science": {
        heading: "Data Science & Predictive Systems",
        description: "Intelligent decision engines, data engineering pipelines, and real-time mathematical modeling platforms.",
        cards: [
            { title: "Predictive Trend Analytics", body: "Audit mathematical search momentum arrays before consumer drop-off curves collapse. Leverage client-side extrapolation networks for absolute forecasting." },
            { title: "Synthetic Traffic Filtration", body: "Isolate microsecond click-farm signatures and bot network clusters using behavior telemetry scripts to protect processing metrics." }
        ]
    },
    "research-lab": {
        heading: "Experimental Research Lab",
        description: "Prototype development, digital ecosystem exploration, and next-generation innovative open-source architectures.",
        cards: [
            { title: "Consular Matrix Optimization", body: "Deploy temporary fractional flight tokens (PNR validation arrays) to bypass automated state visa routing risk engines legally." },
            { title: "Automated ATS AI Bypass", body: "Append raw textual parameters into metadata structures at font-size 1. Maximize semantic token match scoring on automated HR systems." }
        ]
    },
    "artificial-intelligence": {
        heading: "Artificial Intelligence & Agents",
        description: "Autonomous agent loops, prompt engineering frameworks, and emerging machine intelligence technologies.",
        cards: [
            { title: "Context Window Manipulation", body: "Structure fractional hidden tokens to guide agent behaviors locally, ensuring clean, unbiased raw data output execution." },
            { title: "Edge Inference Deployment", body: "Run ultra-lightweight, zero-dependency autonomous JS loops directly inside user browsers to bypass cloud latency gates." }
        ]
    },
    "digital-growth": {
        heading: "Digital Growth & Visibility",
        description: "Sustainable digital visibility strategies, conversion optimization, and organic audience expansion models.",
        cards: [
            { title: "Decentralized Syndication", body: "Cascade content distribution maps across micro-RSS node vectors to instantly trigger regional search indexing servers." },
            { title: "Conversion Friction Reducer", body: "Eliminate multi-step checkout overhead by processing client transactions through single-token secure edge nodes." }
        ]
    },
    "entity-seo": {
        heading: "Entity-Based Semantic SEO",
        description: "Knowledge Graph optimization, topic authority development, and structured data relationship architectures.",
        cards: [
            { title: "Topic Cluster Domination", body: "Build hyper-linked thematic semantic nets that establish unassailable authority around core brand entities." },
            { title: "Knowledge Graph Ingestion", body: "Deploy pristine JSON-LD schemas to force automated crawlers to register dynamic relationships between parent tokens." }
        ]
    },
    "future-technologies": {
        heading: "Future Internet Technologies",
        description: "Post-quantum safe computing concepts, advanced software engineering, and experimental network protocols.",
        cards: [
            { title: "Quantum-Safe Security", body: "Restructure network pipeline parameters to resist modular arithmetic matrix decryption sweeps before standard rollouts." },
            { title: "Decentralized State Sync", body: "Deploy distributed micro-nodes to secure data presence and permanently counter state-level information manipulation." }
        ]
    },
    "web-development": {
        heading: "Web Development & Architectures",
        description: "Modern frontend engineering, cloud infrastructure performance, and high-scale API architectures.",
        cards: [
            { title: "Zero-CLS Layout Engine", body: "Pre-calculate dynamic spatial component arrays in raw styling sheets to achieve perfect layout stability values." },
            { title: "Atomic Gateway Routing", body: "Isolate computing overhead across decoupled API micro-servers to guarantee permanent uptime scalability." }
        ]
    },
    "forum": {
        heading: "Forum & Topluluk Yönetimi",
        description: "Kurumsal forum stratejileri, topluluk inşası, moderasyon sistemleri ve engagement optimizasyonu.",
        cards: [
            { title: "Community Governance Framework", body: "Kurumsal forumlarda hiyerarşik yetki yapısı, otomatik moderasyon kuralları ve kaliteli tartışma akışını sağlayan sistem mimarisi." },
            { title: "Engagement & Retention Engine", body: "Kullanıcı etkileşimini artıran gamification, badge sistemi, akıllı bildirim motoru ve uzun vadeli topluluk sadakati mekanizmaları." }
        ]
    }
};

function initEngine(currentApp = "geo-seo") {
    const data = publicationDatabase[currentApp];
    if (!data) {
        document.getElementById("app-heading").innerText = "Kategori Bulunamadı";
        return;
    }

    document.title = `${data.heading} | Rauf Ayar`;
    document.getElementById("app-heading").innerText = data.heading;
    document.getElementById("app-description").innerText = data.description;

    const grid = document.getElementById("button-grid");
    grid.innerHTML = data.cards.map(card => `
        <div class="card">
            <h3>${card.title}</h3>
            <p>${card.body}</p>
        </div>
    `).join('');
}

// Sayfa açıldığında çalıştır
window.onload = () => {
    initEngine("geo-seo");
};

</script>
</body>
</html>
