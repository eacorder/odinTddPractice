function caesarCipher(string, shift) {    
    let str="";
    for ( i = 0; i < string.length; i++){
        if(isLetter(string[i])===1)
            str += cipher(string[i],shift, isLowerCase(string[i]));
        else
            str += string[i];
    }
   return str;

}

function isLowerCase(string){
    if (string !== string.toUpperCase())
        return 1;
    else 
        return 0;
}

function isLetter(ch) {
    if(  ch.length === 1
        && (ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z") ) 
            return 1;
        else
            return 0;
  }

function cipher(char, shift, isLowerCase){
    let alp = "abcdefghijklmnopqrstuvwxyz";
    let newChar ="";
    let indexChar = alp.indexOf(char);
    let newIndex = 0;
    if ( (indexChar + shift) > (alp.length -1) )  {
        newIndex = (indexChar + shift) - (alp.length -1)
        newChar = alp[newIndex-1];
    }else
        newChar = alp[ indexChar + shift ];
    if (isLowerCase ===1 )
        return newChar.toLowerCase();
    else 
        return newChar.toUpperCase();
}

module.exports = caesarCipher;