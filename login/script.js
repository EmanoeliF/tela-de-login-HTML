let email = ('xemanoeli@gmail.com');

email = 'emanoelifranca.ti@gmail.com';

console.log(email);
console.log('O seu e-mail é: ' + email);
console.log('O seu e-mail é: ${email}');

document.getElementById('btn-submit').addEventListener('click', e=> {
       
    console.log('O botão foi Clicado!');
});

document.getElementById('form-login').addEventListener('mouseenter', e=> {
   
    console.log('O mouse está sobre o formulário.');
});

document.querySelector('#form-login').addEventListener('mouseave', e=> {
    
    console.log('O mouse está sobre o formulário.');
});
document.querySelector('#form-login').addEventListener('submit', e=> {
   
    e.preventDefault();
    
   let email = document.querySelector('#email').value;
   let password = document.querySelector('#password').value;

   console.log(email, password);

   let json = {
        email, 
        password
   };

    if (!json.email) {

        console.error("O campo e-mail deve ser preenchido!");

    } else if (!json.password) {

        console.error("O campo password deve ser preenchido!");

    } else {

        console.info("Dados validados com sucesso!");
    }
});