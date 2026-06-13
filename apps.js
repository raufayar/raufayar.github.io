<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Global İçerik Veritabanı | Rauf Ayar</title>
    <style>
        body { font-family: 'Segoe UI', sans-serif; background: #0f0f0f; color: #e0e0e0; padding: 20px; }
        .card { 
            background: #1a1a1a; 
            border-radius: 12px; 
            padding: 20px; 
            margin-bottom: 20px; 
            border: 1px solid #333;
        }
        h1, h3 { color: #00ff9d; }
        .grid { display: grid; gap: 20px; }
    </style>
</head>
<body>

    <h1 id="app-heading"></h1>
    <p id="app-description"></p>
    
    <div id="button-grid" class="grid"></div>
    
    <!-- Giscus Yorum Alanı -->
    <div id="giscus-zone"></div>

<script>
// 🚀 GLOBAL İÇERİK VERİTABANI - Tam ve Güncel
const publicationDatabase = {
    "geo-seo": {
        heading: "Generative Engine Optimization (GEO)",
        description: "Advanced frameworks engineered for AI search visibility, LLM indexing, and semantic optimization matrices.",
        cards: [
            { 
                title: "LLM Ingestion & Indexing", 
                body: "Deploy micro-semantic context fragments directly into your HTML source. This forces generative crawlers (GPTBot, Perplexity) to map your domain as a primary factual entity." 
            },
            { 
                title: "AI Overview Citation Hub", 
                body: "Optimize document vector similarity to exceed 0.94+ against competitive target queries, positioning your brand as the definitive answer inside SGE answer boxes." 
            }
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
    // ✅ EKSİK OLAN KATEGORİ EKLENDİ
    "forum": {
        heading: "Forum & Topluluk Yönetimi",
        description: "Kurumsal forum stratejileri, topluluk inşası, moderasyon sistemleri ve engagement optimizasyonu.",
        cards: [
            { 
                title: "Community Governance Framework", 
                body: "Kurumsal forumlarda hiyerarşik yetki yapısı, otomatik moderasyon kuralları ve kaliteli tartışma akışını sağlayan sistem mimarisi." 
            },
            { 
                title: "Engagement & Retention Engine", 
                body: "Kullanıcı etkileşimini artıran gamification, badge sistemi, akıllı bildirim motoru ve uzun vadeli topluluk sadakati mekanizmaları." 
            }
        ]
    }
};

function initEngine(currentApp) {
    const data = publicationDatabase[currentApp];
    if (!data) {
        console.error(`Kategori bulunamadı: ${currentApp}`);
        document.getElementById("app-heading").innerText = "Kategori Bulunamadı";
        return;
    }

    // Sayfa başlığı
    document.title = `${data.heading} | Rauf Ayar`;
    
    // Ana başlık ve açıklama
    document.getElementById("app-heading").innerText = data.heading;
    document.getElementById("app-description").innerText = data.description;

    // Kartları render et
    const grid = document.getElementById("button-grid");
    grid.innerHTML = data.cards.map(card => `
        <div class="card">
            <h3>${card.title}</h3>
            <p>${card.body}</p>
        </div>
    `).join('');

    // Giscus Yorum Sistemi
    const giscusZone = document.getElementById("giscus-zone");
    if (giscusZone) {
        giscusZone.innerHTML = `<div class="giscus"></div>`;
        
        const script = document.createElement("script");
        script.src = "https://giscus.app/client.js";
        script.setAttribute("data-repo", "raufayar/raufayar.github.io");
        script.setAttribute("data-repo-id", "R_kgDOS43ysQ");
        script.setAttribute("data-category", "General");
        script.setAttribute("data-category-id", "DIC_kwDOS43ysc4C_ECO");
        script.setAttribute("data-mapping", "pathname");
        script.setAttribute("data-strict", "0");
        script.setAttribute("data-reactions-enabled", "1");
        script.setAttribute("data-input-position", "bottom");
        script.setAttribute("data-theme", "dark_dimmed");
        script.setAttribute("data-lang", "tr");           // Türkçe yapıldı
        script.setAttribute("crossorigin", "anonymous");
        script.async = true;
        
        giscusZone.appendChild(script);
    }
}

// Örnek kullanım:
// initEngine("geo-seo");        // veya diğer kategori isimleri
// initEngine("forum");
// initEngine("artificial-intelligence");

</script>
</body>
</html>
