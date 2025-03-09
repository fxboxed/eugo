const crumbs = document.querySelectorAll(".breadcrumb-link");
console.log('crumbs',crumbs[1].innerHTML);
crumbs.forEach(crumb => {
    if (crumb.innerHTML == 'Beaches' || crumb.innerHTML == null) {
        console.log('crumbs if');
        crumb.style.backgroundColor = 'red';
    }
})