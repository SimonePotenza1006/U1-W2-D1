/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myVariable = "Hello world!"  /* Questa è una variabile di tipo stringa e deve essere racchiusa da degli apici o virgolette */
console.log('Questa è una variabile di tipo stringa', myVariable)
let myVariable2 = 10  /* Questa è una variabile numerica e deve essere scritta senza apici */
console.log('Questa è una variabile di tipo numerico', myVariable2)
let myVariable3 = true /* Questa è una variabile di tipo booleano, può assumere esclusivamente i valori di vero o falso e non vengono racchiusi tra apici o virgolette*/
console.log('Questa è una variabile booleana', myVariable3)
let myVariable4   /* Questa è una variabile undefined, perché non è stato definito il valore della variabile myVariable4 */
console.log('Questa è una variabile undefined', myVariable4)
let myVariable5 = null  /* Questa è una variabile null, perché c'è lassenza di un valore */ 
console.log('Questa è una variabile nulla', myVariable5)

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name = "Simone"
console.log('Esercizio 2', name)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number1 = 12
let number2 = 20
let result = number1+number2
console.log('Esercizio 3', result)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12
console.log('Esercizio 4', x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
name="Potenza" /* Ho riassegnato alla variabile name il mio cognome */
console.log(name) 
const myName="Simone" /* Questa volta ho inizializzato la variabile myName con il costrutto const */
 /* myName ="Potenza"  Tento di cambiare il valore della mia variabile inserendo il mio cognome */
console.log(myName)  /* Il valore rimarrà Simone e non cambierà in Potenza perché ho usato il costrutto const */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
results2 = x - 4 
console.log('Esercizio 6', results2) 

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 ="john"
let name2 ="John"
console.log('Esercizio 7', name1 === name2)


console.log('Extra esercizio 7', name1 === name2.toLowerCase())
