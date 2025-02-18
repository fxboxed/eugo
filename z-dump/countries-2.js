
const countryLinks = document.querySelectorAll('.country-link');
window.onload = function() {

    countryLinks.forEach(link => {
        if (link.innerHTML.length > 8) {
            link.innerHTML = link.innerHTML.substring(0, 7) + '...';
        }
    });

    //add eventListener to all buttons with classname 'open-country-dropdown'. when clicked, toggle show / hide elements with classname country-list
    const dropdownButtons = document.querySelectorAll('.open-country-dropdown');
    const countryLists = document.querySelectorAll('.country-list');

    if (dropdownButtons.length > 0 && countryLists.length > 0) {
        console.log('showCountriesBtn.length', showCountriesBtn.length);
        dropdownButtons.forEach(button => {
            button.addEventListener('click', () => {
                console.log('open clicked statics');
                countryLists.forEach(list => {
                    list.classList.add('show-country-list');

                });
            });
        });
    }

    //add eventListener to all buttons with classname 'close-country-dropdown'. when clicked, toggle show / hide elements with classname country-list
    const closeDropdownButtons = document.querySelectorAll('.close-country-dropdown');

    if (closeDropdownButtons.length > 0 && countryLists.length > 0) {
        closeDropdownButtons.forEach(button => {
            button.addEventListener('click', () => {
                console.log('close clicked');
                countryLists.forEach(list => {
                    list.classList.remove('show-country-list');
                });
            });
        });
    }
};

//---------2nd dropdown menu for countries--------------
// get 2nd dropdown btn
// const showCountriesBtn = document.querySelectorAll('.show-countries-btn');

// console.log('showCountriesBtn.length', showCountriesBtn.length);
// if (showCountriesBtn.length > 0 && countryLists.length > 0) {
//     console.log('showCountriesBtn.length', showCountriesBtn.length);
//     showCountriesBtn.forEach(button => {
//         button.addEventListener('click', () => {
//             console.log('open clicked in btn 2');
//             countryLists.forEach(list => {
//                 list.classList.add('show-countries');

//             });
//         });
//     });
// }