 document.addEventListener('DOMContentLoaded', () => {
            const navbar = document.querySelector('.nav-bar');   // Select the navigation bar element
        
            window.addEventListener('scroll', () => {  //Add scroll event listener to change navbar background color on scroll
                const scrollPosition = window.scrollY;
                if (scrollPosition > 80) {
                    navbar.style.backgroundColor = ' #44013a';
                } else {
                    navbar.style.backgroundColor = 'grey';
                }
            });
        
            const navLinks = document.querySelectorAll('.nav-links a');  //Select all navigation links
            navLinks.forEach(link => {
                link.addEventListener('mouseover', () => {  //Add event listener for mouseover to add underline effect
                    link.style.borderBottom = '2px solid white';
                });
        
                link.addEventListener('mouseout', () => {
                    link.style.borderBottom = 'none';
                });
        
                link.addEventListener('click', event => {
                    event.preventDefault();
                    const href = link.getAttribute('href');
                    const section = document.querySelector(href);
                    section.scrollIntoView({ behavior: 'smooth' });
                });
            });
        
            navbar.addEventListener('mouseover', () => {   // Add event listener for mouseover on navbar to change background color
                navbar.style.backgroundColor = '#DB7093';
            });
            navbar.addEventListener('mouseout', () => {
                navbar.style.backgroundColor = 'grey';
            });
        
            
        });
        


