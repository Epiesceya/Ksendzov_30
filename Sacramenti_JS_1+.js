//    1*:
//    Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
 //   Пример: const checkAge = function(age) {
 //   Ваши преобразования
 //   }
 //   Вывести в консоль результат работы функции с возрастами 17, 18, 61
 const checkAge = function(age) {
    let age_2 = 18;
    let age_3 = 60;
    if (age < age_2){
        console.log(`You don't have access cause your age is ${age} It's less then ${age_2}`)}
        else if (age >= age_2 && age < age_3){
        console.log("Welcome!")}
        else if (age > age_3){
        console.log("Keep calm and look Culture channel")}
        else {
        console.log("Technical work")} 
     }
     checkAge(17);
     checkAge(18);
     checkAge(61);
     
//     //    2*:
//     //    Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.
 const checkAge1 = function(age) {
    let age_2 = 18;
    let age_3 = 60;
 //   console.log(typeof(age));
    if (typeof(age) != 'number'){
        console.log("Error data type")}
        else if (age < age_2){
        console.log(`You don't have access cause your age is ${age} It's less then ${age_2}`)}
        else if (age >= age_2 && age < age_3){
        console.log("Welcome!")}
        else if (age > age_3){
        console.log("Keep calm and look Culture channel")}
        else {
        console.log("Technical work")} 
     }
     checkAge1(17);
     checkAge1("18");
     checkAge1(61);

    //    3**:
    //    Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
    const checkAge2 = function(age) {
        let age_1 = Number(age);
        let age_2 = 18;
        let age_3 = 60;
    // console.log(age_1);
    // console.log(isNaN(age_1));
        if (typeof(age_1) != 'number' || isNaN(age_1)){
            console.log("Error data type")}
            else if (age_1 < age_2){
            console.log(`You don't have access cause your age is ${age} It's less then ${age_2}`)}
            else if (age_1 >= age_2 && age < age_3){
            console.log("Welcome!")}
            else if (age_1 > age_3){
            console.log("Keep calm and look Culture channel")}
            else {
            console.log("Technical work")} 
         }
         checkAge2(17);
         checkAge2("18");
         checkAge2("mature");  
         checkAge2(61);   

    //    4***:
    //    Преобразовать задание 3* таким образом, чтобы возраст вводился используя функцию prompt в привязанной верстке  
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <script>
        const checkAge3 = function(age){
        let age_1 = Number(age);
        let age_2 = 18;
        let age_3 = 60;
        if (typeof(age_1) != 'number' || isNaN(age_1)){
            console.log("Error data type")}
            else if (age_1 < age_2){
            console.log(`You don't have access cause your age is ${age} It's less then ${age_2}`)}
            else if (age_1 >= age_2 && age < age_3){
            console.log("Welcome!")}
            else if (age_1 > age_3){
            console.log("Keep calm and look Culture channel")}
            else {
            console.log("Technical work")} 
         }
         checkAge3(prompt("How old are you?"))
//       </script>
// </body>
// </html>

// const checkAge3 = function(...age) {
//   let age_2 = 18;
//   let age_3 = 60;
//   age.forEach(age_1 => {
//   if (age_1 && isNaN(age_1)){
//       alert("Error data type")}
//       else if (age_1 < age_2){
//       alert(`You don't have access cause your age is ${age_1} It's less then ${age_2}`)}
//       else if (age_1 >= age_2 && age_1 < age_3){
//       alert("Welcome!")}
//       else if (age_1 > age_3){
//       alert("Keep calm and look Culture channel")}
//       else {
//       alert("Technical work")} 
//       })}
//    checkAge3(0, 18, 60, 61, "22", "cute")