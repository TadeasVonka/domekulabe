function openNav() {
    document.getElementById("mySidenav").classList.remove("translate-x-full");
    document.getElementById("mySidenav").classList.add("translate-x-0");
    document.getElementById("myOverlay").classList.remove("hidden");
}

function closeNav() {
    document.getElementById("mySidenav").classList.remove("translate-x-0");
    document.getElementById("mySidenav").classList.add("translate-x-full");
    document.getElementById("myOverlay").classList.add("hidden");
}

function toggleNav() {
    const sidenav = document.getElementById("mySidenav");
    const overlay = document.getElementById("myOverlay");
    if (sidenav.classList.contains("translate-x-0")) {
        closeNav();
    } else {
        openNav();
    }
}