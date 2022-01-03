

function test() {
    var login = f.login.value;
    var password = f.password.value;
    var name = f.name.value;
    var surname = f.surname.value;
    var date = f.date.value;
    var numero = f.numero.value;
    //document.getElementById("date").innerHTML= [date.getDate,date.getMonth,date.getYear].join('/');

    if (name.length === 0 || name.length > 20) {
        alert("Entrer un Nom valide");
    }
    else {
        if (surname.length === 0 || surname.length > 20) {
            alert("Entrer un Prenom valide");
        }
        else {
            if (date <= '1900-01-01' || date >= '2050-01-01') {
                alert("Entrer une date valide");
            }
            else {
                if (numero.length === 0 || numero.length > 20) {
                    alert("Entrer un numero de telephone valide!");
                }


                else {
                    if (login.length === 0 || password.length === 0) {
                        alert("Entrer votre Login et votre mot de passe!");
                    }

                    else {
                        if (password.length < 8) {
                            alert("Entrer un mot de passe valide");
                        }

                        else {
                            console.log(login.substring(login.indexOf('@') + 1));
                            console.log(login.substring(0, login.indexOf('.')));
                            if (login.substring(login.indexOf('@') + 1) === 'gmail.tn') {

                                var prenom = login.substring(0, login.indexOf('.'));
                                var nom = login.substring(login.indexOf('.') + 1, login.indexOf('@'));
                                alert('Bienvenue ' + prenom + " " + nom);
                                window.location = "index.html";
                            }
                            else {
                                alert("Vérifier votre login (@gmail.tn)");
                            }
                        }

                    }

                }
            }
        }
    }
}

