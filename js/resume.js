function resumeFeed() {
    const resumeFeed = [
        {
        resume: {
            date: 'Jan 2006 - Fab 2010',
            spec: 'economics course',
            univ: 'university of vilnius, lithuania, vilnius',
            alig: 'right',
        }
        },
        {
        resume: {
            date: 'Mar 2015 - Dec 2018',
            spec: 'specialization course',
            univ: 'university of studies, poland, cracow',
            alig: 'right',
        },
        },
        {
        resume: {
            date: 'May 2019 - Dec 2021',
            spec: 'engineering course',
            univ: 'university of studies, Estonia, Tallin',
            alig: 'right',
        },
        },
        {
        resume: {
            date: 'Jan 2006 - Fab 2010',
            spec: 'economics course',
            univ: 'university of vilnius, lithuania, vilnius',
            alig: 'left',
        }
        },
        {
        resume: {
            date: 'Mar 2015 - Dec 2018',
            spec: 'specialization course',
            univ: 'university of studies, poland, cracow',
            alig: 'left',
        },
        },
        {
        resume: {
            date: 'Mar 2020 - Nov 2022',
            spec: 'engineering course',
            univ: 'university of studies, Estonia, Tallin',
            alig: 'left',
        },
        },
    ]

    return resumeFeed;
}

function resumeHTML() {

    let feed = resumeFeed();;
    let len = feed.length;
    let rightHTML = ``;
    let leftHTML = ``;
    let HTML = ``;
    let date;
    let spec;
    let univ;
    let alig;
    let HT = ``;

    for (let i = 0; i < len; i++) {

        date = feed[i].resume.date;
        spec = feed[i].resume.spec;
        univ = feed[i].resume.univ;
        alig = feed[i].resume.alig;

        HT =`<div class="box__row border__${alig}">
                <div class="row__date" ><span></span>${date}</div>
                <div class="row__spec">${spec}</div>
                <div class="row__univ">${univ}</div>
            </div>`;

        if (feed[i].resume.alig == 'right') {

            rightHTML += HT;
        }

        if (feed[i].resume.alig == 'left') {

            leftHTML += HT;
        }

        HTML =`<div class="resume__title"><span>my </span> resume</div>
                 <div class="resume__column1 right">
                 <div class="resume__icon icon__right fa fa-book"></div>
                 ${ rightHTML}
                 </div>
                 <div class="resume__column2 left">
                 <div class="resume__icon icon__left fa fa-briefcase"></div>
                 ${ leftHTML}
                 </div>`;
    }

    return HTML;
}


function getResumeData() {

    let HTML = '';
    let sectionBody = document.querySelector('.resume__container');
    HTML = resumeHTML();
    return sectionBody.innerHTML = HTML;
}

export { getResumeData }