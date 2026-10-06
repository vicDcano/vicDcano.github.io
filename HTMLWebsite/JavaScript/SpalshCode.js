const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=>
    {
        setTimeout(()=>
        {
            // Slide the entire screen to the left
            splash.style.transition = "transform 0.8s cubic-bezier(0.77, 0, 0.175, 1)";
            splash.style.transform = "translateX(-100%)";
            splash.classList.add('display-none');
            
        }, 2000)
    })

const header = document.querySelector('.header');

window,onscroll = function()
{
    var top = window.scrollY;
    console.log(top);

    if(top >=50)
    {
        header.classList.add('active');
    }

    else
    {
        header.classList.remove('active');
    }
}

// const splash = document.querySelector('.splash');

// document.addEventListener('DOMContentLoaded', (e)=>
//     {
//         setTimeout(()=>
//         {
//             splash.classList.add('display-none')
//         }, 2000)
//     })

// const header = document.querySelector('.header');

// window.onscroll = function()
// {
//     var top = window.scrollY;
//     console.log(top);

//     if(top >= 50)
//     {
//         header.classList.add('active')
//     }

//     else
//     {
//         header.classList.remove('active');
//     }
// }


// // Grab the splash screen immediately
// window.addEventListener('load', () => {
//         const splash = document.getElementById('splash-screen');
        
//         if (splash) {
//             // Wait 2 seconds for your tube liquid to finish filling
//             setTimeout(() => {
                
//                 // Slide the entire screen to the left
//                 splash.style.transition = "transform 0.8s cubic-bezier(0.77, 0, 0.175, 1)";
//                 splash.style.transform = "translateX(-100%)";
                
//                 // Wait 0.8 seconds for the slide animation to finish, then delete the splash screen entirely
//                 setTimeout(() => {
//                     splash.remove();
//                 }, 200);
                
//             }, 1000);
//         }
//     });