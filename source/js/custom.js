document.addEventListener("DOMContentLoaded", function () {

    // 防止重复插入
    if (document.getElementById("my-footer")) return;

    // 找到 Fluid 原页脚
    const footer = document.querySelector("footer");

    if (!footer) return;

    // 创建新的信息卡片
    const card = document.createElement("div");
    card.id = "my-footer";

    card.innerHTML = `
<div class="footer-card">

    <div class="footer-title">
        🌏 我的博客
    </div>

    <div class="footer-runtime">
        <span id="runtime">计算中...</span>
    </div>

    <div class="footer-line"></div>

    <div class="footer-info">

        <div class="footer-item">
            📄
            <span>文章</span>
            <b id="post-count">--</b>
        </div>

        <div class="footer-item">
            📝
            <span>字数</span>
            <b id="word-count">--</b>
        </div>

        <div class="footer-item">
            👀
            <span>访问</span>
            <b id="busuanzi_value_site_pv">--</b>
        </div>

        <div class="footer-item">
            👤
            <span>访客</span>
            <b id="busuanzi_value_site_uv">--</b>
        </div>

    </div>

    <div class="footer-line"></div>

    <div class="footer-bottom">

        <a href="https://github.com/fgrddddd" target="_blank">
            GitHub
        </a>

    </div>

</div>
`;

    footer.prepend(card);

    //---------------------------------------
    // 网站运行时间
    //---------------------------------------

    const startTime = new Date("2026-07-15 00:00:00");

    function updateRuntime() {

        const now = new Date();

        const diff = now - startTime;

        const days = Math.floor(diff / 86400000);

        const hours = Math.floor(diff / 3600000) % 24;

        const minutes = Math.floor(diff / 60000) % 60;

        const seconds = Math.floor(diff / 1000) % 60;

        document.getElementById("runtime").innerHTML =
            `本站已稳定运行 ${days} 天 ${hours} 小时 ${minutes} 分 ${seconds} 秒`;

    }

    updateRuntime();

    setInterval(updateRuntime, 1000);

});