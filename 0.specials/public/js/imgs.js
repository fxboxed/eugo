const imgs = document.querySelectorAll('.list-img');
// on the list page an empty img is showing, so we hide it
imgs.forEach(img => {
    if(img.alt === ''){
        img.style.display = 'none';
    }
console.log(img.alt);
})