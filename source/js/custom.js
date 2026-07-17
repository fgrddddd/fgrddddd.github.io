document.addEventListener("DOMContentLoaded", function () {

    // 找到 Fluid 页脚
    const footer = document.querySelector("footer");

    if (!footer) return;

    // 创建运行时间
    const runtime = document.createElement("div");
    runtime.id = "runtime";

    footer.appendChild(runtime);

    // 修改成你的建站日期
    const startTime = new Date("2026-06-04T23:03:55");

    function updateRuntime() {

        const now = new Date();

        const diff = now - startTime;

        const days = Math.floor(diff / 86400000);

        const hours = Math.floor(diff / 3600000) % 24;

        const minutes = Math.floor(diff / 60000) % 60;

        const seconds = Math.floor(diff / 1000) % 60;

        runtime.innerHTML =
            `🌏 本站已运行 ${days} 天 ${hours} 小时 ${minutes} 分 ${seconds} 秒`;

    }

    updateRuntime();

    setInterval(updateRuntime, 1000);

});