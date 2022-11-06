// header projects
let headerBurger = document.querySelector('.header_projects_button');
let headerProjects = document.querySelector('.header_project_row');
let headerBurgerActive = document.querySelector('.header_projects_button-active');

headerBurger.addEventListener('click', () => {
    if (headerBurger.classList.contains('active') || headerBurgerActive.classList.contains('active')) {
        headerProjects.classList.remove('active');
        headerBurgerActive.classList.remove('active');
    } else {
        headerProjects.classList.add('active');
        headerBurgerActive.classList.add('active');
    }
})

headerBurgerActive.addEventListener('click', () => {
    if (headerProjects.classList.contains('active')) {
        headerProjects.classList.remove('active');
    }
})

// header projects

// stories video play
let storieVideoPlay = document.querySelectorAll('.stories_video_play');

storieVideoPlay.forEach(trigger => {
    let storieVideo = document.getElementById(trigger.previousElementSibling.id);

    trigger.addEventListener('mouseenter', () => {
        storieVideo.play();
        storieVideo.parentNode.classList.add('active');
    })

    storieVideo.addEventListener('mouseleave', () => {
        storieVideo.pause();
        storieVideo.parentNode.classList.remove('active');
    })
})
// stories video play