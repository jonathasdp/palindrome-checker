function palindrome(str) {
  function isPalindrome(value) {

    // Primeiro armazena em uma variável o index que corresponde a metade do array.
    let half = Math.floor(value.length / 2);

    // Verifica se o array possui tamanho ímpar e então remove o caractere do meio pois ele não tem par.
    if (value.length % 2 !== 0) {
      value.splice(half, 1);
    }

    // Utiliza o método do splice para obter os dois caracteres centrais e os remove da string principal.
    let middle = value.splice(half - 1, 2);

    // Verifica se os caracteres são iguais e, ou chegamos ao fim do array ou recursivamente 
    // o array que sobrou é um palíndromo.
    return middle[0] === middle[1] && (value.length == 0 || isPalindrome(value));
  };

  // Transforma string em lower case e em seguida remove os caracteres não alfa númericos e símbolos da string.
  let result = str.toLowerCase().match(/[^\W_]/gi);

  // Retorna verdadeiro em caso do array ser um palíndromo.
  return isPalindrome(result);
}


console.log(palindrome("A man, a plan, a canal. Panama"));