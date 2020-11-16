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
        if (link.matches("#top-menu-bar a")) {
            var id = link.innerHTML.toLowerCase();
            showPage(id);
        }
    });
}

initMenu();

showPage("skills");

var skills = [
    "HTML", 
    "CSS", 
    "JS"
];

var skillsLi = skills.map(function(skill){
    console.info(skill);
    return "<li>" + skill + "</li>"; 
});

//TO DO "add favorite skill"
var ul = document.querySelector("#skills ul");
ul.innerHTML =  skillsLi.join("");