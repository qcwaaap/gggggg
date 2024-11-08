//В данном задании вам могут понадобиться следующие методы строки: trim, replace, repeat и свойство length.
// Реализуйте следующие функции (соблюдайте именование): 

/*
Реализуйте функцию concatenateStrings, которая принимает две строки в качестве аргументов, возвращает результат 
их конкатенации и удаляет все пробелы.

'aa', 'bb' => 'aabb'
'aa',' '    => 'aa'
'',  'bb'  => 'bb'

*/

//Ваше решение
const concatenateStrings = (str1, str2)=> (str1+str2).trim()
 console.log(concatenateStrings('aa', 'bb'))
 console.log(concatenateStrings('aa',' '))
 console.log(concatenateStrings('',  'bb'))

//Реализуйте функцию getStringLength, которая принимает строку в качестве аргумента и возвращает ее длину.

//Ваше решение:
function getStringLength(text){
         return text.split("").length
 }
 console.log(getStringLength('This is another text'))


/*
Реализуйте функцию getStringFromTemplate, которая принимает параметры firstName и lastName 
и возвращает результат подстановки этих значений в строку-шаблон 'Hello, firstName  lastName!'.
Важно: используйте интерполяцию (шаблонные строки) для формирования результата, а не операцию конкатенации.

'John','Doe'      => 'Hello, John Doe!'
'Chuck','Norris'  => 'Hello, Chuck Norris!'

*/

//Ваше решение:
 function getStringFromTemplate(firstName, lastName) {
         return `Hello, ${firstName} ${lastName}!`;
         }
        console.log(getStringFromTemplate('Chuck','Norris'))

/*
Реализуйте функцию getChar, которая принимает строку и порядковый номер символа в строке 
и возвращает символ, соответствующий этому порядковому номеру.

'John Doe', 1  => 'J'
'cat', 3       => 't'

*/

//Ваше решение:
 function getChar(str, num){
         return str[num - 1]
 }
 console.log(getChar('cat', 3))
/*
Реализуйте функцию removeFirstOccurrences, которая удаляет первое вхождение подстроки  внутри строки.

'To be or not to be', 'not'  => 'To be or  to be'
'I like legends', 'end' => 'I like legs',
'ABABAB','BA' => 'ABAB'
*/

//Ваше решение:
 function removeFirstOccurrences(str, str2){
         return str.replace(str2, "")
 }
 console.log(removeFirstOccurrences('To be or not to be', 'not'))

/* 
Реализуйте функцию getRectangleString, которая  возвращает строковое представление прямоугольника 
с заданной шириной и высотой, используя символы '*'.
        *****
5, 4 => *   *
        *   *
        *****

*/

//Ваше решение:
const getRectangleString = (q,w) => {
        let result = ``
        let space = ` `
for(let i = 0; i < q; i += 1){
result = result+`*`;
}
for(let i = 0; i < w-2; i += 1){
        result = result+`\n*`+space.repeat (q-2)+ `*`;
        }
        result = result+`\n`
for(let i = 0; i < q; i += 1){
        result = result+`*`;
        }
        return result
}
console.log(getRectangleString(5, 4))

export {getRectangleString, concatenateStrings, getStringLength, removeFirstOccurrences, getChar, getStringFromTemplate}
