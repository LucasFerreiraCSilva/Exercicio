function verificaSenha(senha) {
    if (senha.length < 8) {
        return false;
    }
    let temMaiuscula = false;
    let temMinuscula = false;
    let temNumero = false;
    for (let i = 0; i < senha.length; i++) {
        let char = senha[i];
        if (char >= 'A' && char <= 'Z') {
            temMaiuscula = true;
        } else if (char >= 'a' && char <= 'z') {
            temMinuscula = true;
        } else if (char >= '0' && char <= '9') {
            temNumero = true;
        }
    }
    return temMaiuscula && temMinuscula && temNumero;
}