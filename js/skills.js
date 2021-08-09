"use strict"

// ----- dataRender start

function skillsFeed() {
  const skillsFeed = [
    {
      skills: {
        title: 'photography',
        perc: '55%',
        alig: 'left',
      }
    },
    {
      skills: {
        title: 'branding',
        perc: '75%',
        alig: 'left',
      }
    },
    {
      skills: {
        title: 'graphic design',
        perc: '88%',
        alig: 'left',
      }
    },
    {
      skills: {
        title: 'development',
        perc: '90%',
        alig: 'left',
      }
    },
    {
      skills: {
        title: 'html / css',
        perc: '75%',
        alig: 'right',
      }
    },
    {
      skills: {
        title: 'js / jquery',
        perc: '95%',
        alig: 'right',
      }
    },
    {
      skills: {
        title: 'php / wordpress',
        perc: '70%',
        alig: 'right',
      }
    },
    {
      skills: {
        title: 'photo shop',
        perc: '85%',
        alig: 'right',
      }
    }
  ]

  return skillsFeed;
}

function skillsHTML() {

  let feed = skillsFeed();;
  let len = feed.length;
  let rightHTML = ``;
  let leftHTML = ``;
  let HTML = ``;
  let title;
  let perc;
  let alig;
  let HT = ``;

  for (let i = 0; i < len; i++) {

    title = feed[i].skills.title;
    perc = feed[i].skills.perc;
    alig = feed[i].skills.alig;
    
    HT = `<span class="progressTitle">${title}</span><span class="progressPercentage">${perc}</span>
            <div class="meter">
                <div class="meter__bar"><span class="progress"></span></div>
            </div>`;

    if (feed[i].skills.alig === 'right') {
          rightHTML += HT;
    }

    if (feed[i].skills.alig === 'left') {
          leftHTML += HT;
    }

    HTML = `<div class="skills__title"><span>my </span> skills</div>
            <div class="skills__bars">
              <div class="progressBar">
                ${leftHTML}
              </div>
              <div class="progressBar">
                ${rightHTML}
              </div>
            </div>`;
  }

  return HTML;
}

function getSkillsData() {

  let HTML = '';
  let sectionBody = document.querySelector('.skills__container');
  HTML = skillsHTML();
  return sectionBody.innerHTML = HTML;
}

export { getSkillsData }


// ------ animation start

let skillsElem = document.querySelector('.skills');

function skills(skills) {

  const skillsPosition = skillsElem.offsetTop;

    if(pageYOffset > skillsPosition - (window.innerHeight/1.2)) {

    let elem = document.getElementsByClassName("progressPercentage");
    let kiek = elem.length;
    let i = 0;

    for (i = 0; i < kiek; i++) {
      animation(i);
    }
  }
}

function animation(data) {

    let elem = document.getElementsByClassName("progressPercentage");
    let bars = document.getElementsByClassName("progress");
    let needWidth = parseInt(elem[data].innerHTML);
    let width = 0;
    let id = setInterval(frame);
      
    function frame() {

      if (width < needWidth) {
        
        width = needWidth;
        elem[data].style.left = needWidth + "%";
        bars[data].style.width = needWidth + "%";
      }
      else {
        clearInterval(id);
      }
    }
  }

export { skills }
