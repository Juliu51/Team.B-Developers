"use strict";

import { skills } from "./skills.js"
window.addEventListener("scroll", skills);

import { getCounterData } from "./counter.js"
getCounterData()

import { counter } from "./counter.js"
counter()

import { getResumeData } from "./resume.js"
getResumeData()

import { getSkillsData } from "./skills.js"
getSkillsData()


// import { navigation } from "./navigation.js"
// navigation()


//after window is loaded completely 
    window.onload = function() {
        // hide preloader
         setTimeout(skills, 5000);
         setInterval(function () {
           document.querySelector(".preloader").style.display = "none";
         }, 5000);
    }