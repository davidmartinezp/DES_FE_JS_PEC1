const form = document.getElementById('formCont');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('confirm_password');
const age = document.getElementById('age');
//show input error mesage

function showError(input, message)
{
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small  = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input)
{
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function checkEmail(input)
{
    if (input.value.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ))
    {
        showSuccess(input);
    }
    else
    {
        showError(input, "email is not valid");
    }
  };

  function checkRequired (inputArr)
  {
    inputArr.forEach(function(input){
        if (input.value.trim() === '')
        {
            showError(input, input.id + " is required");
        }
        else{
            showSuccess(input);
        }
    });
  }

  function checkLength(input, min, max)
  {

    if (input.value.length < min)
    {
        showError(input, input.id + " must be at least " + min);

    } else if (input.value.length > max)
    {
        showError(input, input.id + " must be at less then " + max);
    }
    else 
    {
        showSuccess(input);
    }
  }

  function checkPassMatch(input1, input2)
  {
    if (input1.value !== input2.value )
    {
        showError(input2,"password do not match");
    }
  }

  function checkNumber(input,min,max)
  {
    if (Number(input.value) < min)
    {
        showError(input,input.id + " must be equal or greater than " + min);
    }
    else if (Number(input.value) >= max)
    {
        showError(input,input.id + " must be less than " + max);
    }
  }

  function checkPassword(input,min,max)
  {
    if (Number(input.value) < min)
    {
        showError(input,input.id + " must be equal or greater than " + min);
    }
    else if (Number(input.value) >= max)
    {
        showError(input,input.id + " must be less than " + max);
    }
  }
  function checkPassword(input)
  {
    if (input.value.length < 8)
    {
        showError(input,"password must have at least 8 characters"); 
    }
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+={}|\[\]\\:";'<>?,./])[A-Za-z\d~!@#$%^&*()_+={}|\[\]\\:";'<>?,./]{8,}$/;

    if (!regex.test(input.value)) {
        showError(input,"password must contain uppercase, signs, lowercase and numbers"); 
    }
  }
// event listener
form.addEventListener('submit',function(e) {
    e.preventDefault();
    checkRequired([username,email,password,password2,age]);
    checkLength(username,3,15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPassMatch(password,password2);
    checkNumber(age,0,1000);
    checkPassword(password);
});