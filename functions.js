function hide(id) {
    //document.getElementById('skills').style.display = 'none';
    var el = document.getElementById(id);
    console.info("hide:" + id, el);
    if (el) {
        el.style.display = "none";
    } else {
        console.error("pagina nu exista", id);
    }
}

function showHome () {
    hide("skills");
    hide("projects");
    hide("languages");
    document.getElementById('home').style.display = '';
}

function showSkills () {
    document.getElementById("home").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("languages").style.display = "none";
    document.getElementById('skills').style.display = '';
}

function showProjects () {
    document.getElementById("skills").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("languages").style.display = "none";
    document.getElementById("projects").style.display = '';
}

function showLanguages () {
    document.getElementById("home").style.display = "none";
    document.getElementById("skills").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("languages").style.display = '';
}
