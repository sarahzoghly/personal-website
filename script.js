function showAbout()
{
    document.querySelectorAll(".content-section").forEach(section => section.style.display = "none");
    document.getElementById("about").style.display = "block";
}

function showContacts()
{
    document.querySelectorAll(".content-section").forEach(section => section.style.display = "none");
    document.getElementById("contacts").style.display = "block";
}

function showCS()
{
    document.querySelectorAll(".content-section").forEach(section => section.style.display = "none");
    document.getElementById("cs").style.display = "block";
}

function showAnimation()
{
    document.querySelectorAll(".content-section").forEach(section => section.style.display = "none");
    document.getElementById("animation").style.display = "block";
}