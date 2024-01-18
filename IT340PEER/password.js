
function password(pw){
    let test_carac=/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[\W_]).*$/.test(pw);
    return pw.length>8?(test_carac?true:false):false;

}

module.exports=password;

