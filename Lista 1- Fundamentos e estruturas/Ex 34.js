/*Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras. */

function comparação (str1, str2){
    let confirmação = true

    for (i = 0; i < str1.length; i++){
        let caractereString1 = str1.charAt(i).toLowerCase()
        for (j = 0; j < str2.length; j++){
            let caractereString2 = str2.charAt(j).toLowerCase()
            if (caractereString1 == caractereString2){
                confirmação = true
                break;
            } else {
                confirmação = false
            }
        }
            if (!confirmação){
                return false
        }
    }

    for (i = 0; i < str2.length; i++){
        let caractereString2 = str2.charAt(i).toLowerCase()
        for (j = 0; j < str1.length; j++){
            let caractereString1 = str1.charAt(j).toLowerCase()
            if (caractereString1 == caractereString2){
                confirmação = true
                break;
            } else {
                confirmação = false
            }
        }
            if (!confirmação){
                return false
            }
        
    }
    return true
}




str1 = "abcde", str2 ="Abcde"
console.log(comparação(str1,str2));