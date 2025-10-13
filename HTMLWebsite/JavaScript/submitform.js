const form = document.querySelector('form');

form.addEventListener('submit', (e) =>
{
    e.preventDefault;

    const captchaResponse = grecaptcha.getResponse();

    if(captchaResponse.length > 0)
    {
        throw new Error('Captcha not completed!');
    }

    const fd = new FormData(e.target);

    const params = new URLSearchParams(fd);

    fetch('http://127.0.0.1:5500/home.html', {
        method: 'POST',
        body: params,
    })

    .then(res => res.json())
    .then(data => {
        
        if(data.captchaSuccess)
        {
            console.log("Validation was successful!");
        }
        else
        {
            console.error("Validation has failed!");
        }
    })
    .catch(err => console.error(err))
    
});