const formCaptcha = document.getElementById('divCaptcha');

function onLoadCallback()
{
    grecaptcha.render('divCaptcha', 
        {
            sitekey: '6Ldj-OgrAAAAAN5Ie09f8lrlQJ6lW_1kW5mfbx42',
            callback: successCallback,
            'expired-callback': expiredCallback,
        }
    )

}

function successCallback() 
{
    document.getElementById('submitForm').disabled = false;
}

function expiredCallback() 
{
  document.getElementById('submitForm').disabled = true;
}