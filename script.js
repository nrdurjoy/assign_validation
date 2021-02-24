let option = document.querySelectorAll('.open_prom');


function numberVal() {
    const input = prompt('Enter phone number for validation');
    let rgxnum = /^(\+88)?01([0-9]){9}$/;


    switch (true) {
        case rgxnum.test(input):
            alert("Your phone number is valid!");
            break;
        default:
            alert("Wrong input!");
            break;

    }

}

function postCodeVal() {
    const input = prompt('Enter post code for validation');
    let rgxpost = /^([0-9]){4}$/;

    switch (true) {
        case rgxpost.test(input):
            alert("Your post code is valid!");
            break;
        default:
            alert("Wrong input!");
            break;
    }
}

function emailVal() {
    const input = prompt('Enter email for validation');
    let rgxemail = /^([a-z0-9_\.]+)@([a-z0-9_\.]+)\.([a-z]){2,7}$/;

    switch (true) {
        case rgxemail.test(input):
            alert("Your email is valide!");
            break;
        default:
            alert("Wrong input!");
            break;
    }
}
