"use strict"

// ----- dataRender start

function counterFeed() {
    const feed = [
        {
        data: {
            logo: 'fa fa-heart',
            number: '738',
            title: 'happy clients',
        }
        },
        {
            data: {
                logo: 'fa fa-check-square-o',
                number: '102',
                title: 'successfull projects',
            }
        },
        {
            data: {
                logo: 'fa fa-trophy',
                number: '06',
                title: 'awards received',
            }
        },
        {
            data: {
                logo: 'fa fa-coffee',
                number: '511',
                title: 'cups of tea',
            }
            },
    ]

    return feed;
}

function counterHTML() {

    let feed = counterFeed();;
    let len = feed.length;
    let HTML = ``;
    let logo;
    let number;
    let title;

    for (let i = 0; i < len; i++) {

        logo = feed[i].data.logo;
        number = feed[i].data.number;
        title = feed[i].data.title;

        HTML +=`<div class="counter__column">
                <div class="${logo} column__logo"></div>
                <div class="column__number">${number}</div>
                <div class="column__title">${title}</div>
            </div>`;
    }

    return HTML;
}

function getCounterData() {

    let HTML = '';
    let sectionBody = document.querySelector('.counter__container');
    HTML = counterHTML();
    return sectionBody.innerHTML = HTML;
}

export { getCounterData }

// ----- animation start
function counter() {

    let columns = document.querySelectorAll('.counter__column');
    let logos = document.querySelectorAll('.column__logo');
    
    for (let index = 0; index < columns.length; index++) {
        const col = columns[index];
        const logo = logos[index];

        col.addEventListener('mouseover', (e) => {
            logo.style.fontSize  = "35px";
        });

        col.addEventListener('mouseleave', (e) => {
            logo.style.fontSize = "30px";
        });
    }
}

export { counter }