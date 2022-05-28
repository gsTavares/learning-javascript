/**
 * Variáveis
 * São variáveis javascript: var, const, let;
 * let and const -> utilizadas em escopo de bloco
 * 
 * Ex.
 * 
 * const name = 'Gustavo';
 * 
 * function print(){
 *      name = 'João';
 * 
 *      // A variável 'name' pode ser acessada pela função normalmente
 *      console.log(nome);
 * }
 * 
 * var -> utilizado somente no escopo de função;
 * 
 * Ex.
 * 
 * function example(){
 *      if(true){
 *          const a = 'const';
 *          let b = 'let';
 *          var c = 'var';
 *          console.log(a);
 *          console.log(b);
 *          console.log(c);
 *      }
 *      console.log('fora da condicional');
 *      console.log(a);
 *      console.log(b);
 *      console.log(c);
 * }
 * 
 * Output -> 
 * 
 * const
 * let
 * var
 * fora da condicional if
 * var
 * 
 * O var pode ser acessado em qualquer parte da função, desde que esteja dentro dela.
 * O mesmo não acontece com as variáveis const e let;
 * 
 * Utilizar o var não é uma boa prática. Procure sempre usar const ou let 
 * para a declaração de variáveis;
 * 
 * 
 * 
 */