function hide(id) {
    var el = document.getElementById(id);
    if (el) {
        el.style.display = "none";
    } else {
        console.error("pagina nu exista", id);
    }
}

function hideAllPages() {
    var pages = document.querySelectorAll(".page");
    for (var i = 0; i < pages.length; i++) {
        var page = pages[i]
        var id = page.id;
        hide(id);
    }
}

function showPage(pageId) {
    hideAllPages();
    document.getElementById(pageId).style.display = '';
}

function initMenu () {
    document.addEventListener("click", function(e){
        var link = e.target;
        if (e.target.matches("#top-menu-bar a")) {
            var id = link.innerHTML.toLowerCase();
            showPage(id);
        }
    });
}

initMenu();