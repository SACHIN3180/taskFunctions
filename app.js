// Create a function greetUser() that takes a user's name and prints a welcome message.

function greetUser(userName) {
        console.log(userName, "Welcome")
}
greetUser("Sachin")

// 2. Create a function calculateSum() that takes two numbers and returns their sum.

function calculateSum(num1, num2) {
        return num1 + num2;
}

console.log(calculateSum(10, 20))

//3. Create a function findMaximum() that takes three numbers and returns the largest number.

function findMaximum(num1, num2, num3) {
        if (num1 > num2 && num1 > num3) {
                return num1;
        } else if (num2 > num1 && num2 > num3) {
                return num2;
        } else {
                return num3;
        }
}

console.log(findMaximum(12, 65, 70))

//4. Create a function checkEvenOdd() that takes a number and returns "Even" or "Odd".

function checkEvenOdd(num) {

        if(num % 2 == 0){
               return "Even"
        } 

        if(num % 2 !=0){
               return "Odd"
        }


}

console.log(checkEvenOdd(3))