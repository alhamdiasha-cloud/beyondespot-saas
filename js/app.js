const tools = [
    { id: "seo", icon: "📝", name: "SEO Article", category: "SEO" },
    { id: "landing", icon: "🌐", name: "Landing Page", category: "Website" },
    { id: "ads", icon: "📢", name: "Ads Builder", category: "Marketing" },
    { id: "caption", icon: "📸", name: "Instagram Caption", category: "Social Media" },
    { id: "facebook", icon: "👍", name: "Facebook Post", category: "Social Media" },
    { id: "tiktok", icon: "🎬", name: "TikTok Script", category: "Video" },
    { id: "youtube", icon: "▶️", name: "YouTube Script", category: "Video" },
    { id: "product", icon: "📦", name: "Product Description", category: "E-Commerce" },
    { id: "email", icon: "✉️", name: "Email Copy", category: "Marketing" },
    { id: "meta", icon: "🏷️", name: "Meta Description", category: "SEO" }
];

let currentTool = null;

window.onload = function () {
    renderSidebar();
};

function renderSidebar() {

    const sidebar = document.getElementById("sidebar");

    sidebar.innerHTML = "";

    tools.forEach(tool => {

        const item = document.createElement("div");

        item.className = "tool-item";

        item.innerHTML = ${tool.icon} ${tool.name};

        item.onclick = function () {

            document
                .querySelectorAll(".tool-item")
                .forEach(x => x.classList.remove("active"));

            item.classList.add("active");

            openTool(tool);

        };

        sidebar.appendChild(item);

    });

}

function openTool(tool){

    currentTool = tool;

    document.getElementById("toolTitle").textContent = tool.name;

    document.getElementById("toolCategory").textContent = tool.category;

    document.getElementById("toolForm").innerHTML = `
        <label>Masukkan Topik</label>

        <input
            id="prompt"
            type="text"
            placeholder="Contoh: Digital Marketing"
        >

        <button id="generateBtn">
            Generate
        </button>
    `;

    document
        .getElementById("generateBtn")
        .onclick = generate;

}

function generate(){

    const text = document.getElementById("prompt").value.trim();

    if(text===""){
        alert("Masukkan topik terlebih dahulu.");
        return;
    }

    document.getElementById("result").innerHTML = `
        <h2>${currentTool.name}</h2>

        <hr>

        <p><b>Kategori:</b> ${currentTool.category}</p>

        <p><b>Input:</b> ${text}</p>

        <br>

        <h3>Output</h3>

        <p>
        Beyondespot AI berhasil memproses permintaan Anda.
        </p>

        <p>
        (Tahap berikutnya output ini akan diganti dengan hasil AI sebenarnya.)
        </p>
    `;

}
