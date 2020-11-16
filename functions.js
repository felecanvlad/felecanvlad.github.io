function hide(id) {
    //document.getElementById('skills').style.display = 'none';
    var el = document.getElementById(id);
    //console.info("hide:" + id, el);
    if (el) {
        el.style.display = "none";
    } else {
        console.error("pagina nu exista", id);
    }
}

function hideAllPages() {
    hide("home")
    hide("skills");
    hide("projects");
    hide("languages");

    var pages = document.querySelectorAll(".page");
    //for(initializare; conditie; post execute)
    for (var i = 0; i < pages.length; i++) {
        var page = pages[i]
        var id = pages.id;
        console.info("i=", i, id, page);
        hide(id);
        
    } 

}

function showPage(pageId) {
    hideAllPages();
    document.getElementById(pageId).style.display = '';
}
