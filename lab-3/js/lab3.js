const tabs = document.querySelectorAll('li[role="tab"] a');



// first tab starts active
tabs[0].classList.add('active');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {

        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

    });
});

