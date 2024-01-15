function password(pw){
    let nombreChiffres=2;
    let nombreLettres=1;
    let nombreCaracteresSpeciaux=1;

    let reg=`^(?=(.*[0-9]){2})(?=(.*[a-zA-Z]){${nombreLettres},})(?=(.*[\W_]){${nombreCaracteresSpeciaux},}).*$`;
    let test_carac=new RegExp(reg).test(pw);

    return pw.length>8?(test_carac?true:false):false;

}
let dir=password("aezedsfa123#")
console.log(dir)