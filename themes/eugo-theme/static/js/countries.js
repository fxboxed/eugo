
const countryLinks = document.querySelectorAll('.country-link');
const dropdownButtons = document.querySelectorAll('.open-country-dropdown');
const countryLists = document.querySelectorAll('.country-list');
const bannerItems = document.querySelectorAll('.banner-items');

window.onload = function() {
    console.log('window loaded');
    // hide dropdown buttons if not on homepage
    if(window.location.href == 'http://localhost:1313/'  || window.location.href == 'http://localhost:1313/#navbar' || window.location.href == 'https://eugo.uk/' || window.location.href == 'https://eugo.uk/#navbar' || window.location.href == 'https://eugo.uk/#footer' )  {
        dropdownButtons.forEach(button => {
            button.style.display = 'block';
        });
    }else{
        dropdownButtons.forEach(button => {
            button.style.display = 'none';
        });
    }



    // truncate country links if length is greater than 8
    countryLinks.forEach(link => {
        if (link.innerHTML.length > 8) {
            link.innerHTML = link.innerHTML.substring(0, 8) + '...';
        }
    });

};

    //add eventListener to all buttons with classname 'open-country-dropdown'. when clicked, toggle show / hide elements with classname country-list

    if (dropdownButtons.length > 0 && countryLists.length > 0) {
        dropdownButtons.forEach(button => {

            button.addEventListener('click', () => {
                console.log('open clicked stat');

                bannerItems.forEach(banner => {
                    banner.classList.add('hide-banner-items');
                });
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
                //console.log('close clicked');
                countryLists.forEach(list => {
                    list.classList.remove('show-country-list');
                });

                bannerItems.forEach(banner => {
                    banner.classList.remove('hide-banner-items');
                });
            });
        });
    }


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