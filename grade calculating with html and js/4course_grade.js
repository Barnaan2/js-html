/* grade calculator program 
code writer : sft. Bernabas Tekalign
gitub user name @Barnaan2;
email address: barnaantekalign@gamil.com;
*/
// the known data needed for calculating grade as Ethiopia's
// standard grading system
var grade = ["A+","A","A-","B+","B","B-","C+","C","C-","D","FX","F"];
var values = [ 4, 4, 3.75 , 3.5 , 3 , 2.75 , 2.5 , 2 , 1.75, 1, 0, 0];
var Grade_value = { "A+" : 4,  "A" : 4,
"A-" : 3.75,"B+" : 3.5,
"B" : 3.00,"B-" : 2.75,
"C+" :2.5 ,"C" : 2.0,
"C-" : 1.5,"D" : 1,
"FX" : 0,"F": 0
};
// this is to store users input and keep track of their data.
var user_input = [];
var credit_hours =[];
var grade_store = [];
var final_grade = [];
var grade_point ="";
var error = 0;
var store = 0;
var correct = 0;
var grade_scored = 0;
var grade_score = 1;
var credit= 0;
var your_grade = 0;
var grade_results;

//the over all function to do all operation.
// since all our data disappear after a single reloading
        function me() {
          // collecting the grade from the html part by using html form
        var one =	document.myform.a.value;
        user_input.push(one.toUpperCase());
	   var two = document.myform.b.value
        user_input.push(two.toUpperCase());
       var three  = document.myform.c.value
       user_input.push(three.toUpperCase());
       var four   = document.myform.d.value
       user_input.push(four.toUpperCase());
       //this is to collect the credit hours of the course from the users
        var One = document.myform.A.value;
        credit_hours.push(One);
     var Two = document.myform.B.value
        credit_hours.push(Two);
       var Three  = document.myform.C.value
       credit_hours.push(Three);
       var Four   = document.myform.D.value
       credit_hours.push(Four);
       // to validate wheather user input is relatable grade or not
       for(var i = 0; i< user_input.length; i++)
       {
         for(var j = 0; j < grade.length; j++)
              {
               if(user_input[i] == grade[j])
          { 
            correct +=1; 
       }
    
     }
   };
   // to validate wheather the credit hour is greater than one or not
   for(var i = 0; i < credit_hours.length; i++)
   {
    if(credit_hours[i] <= 1)
    {
    error +=1;
    }
   }
   //to break the process incase the user input has an error grade
   if(user_input.length != correct)
   {
    alert(" your grade has invalid input,please try again!");
   }
 else if(error != 0)
   {
    alert(" your credit hour has invalid input,please try again!");
   }

//this for loop is to asign grades to number values
for(var i = 0; i < user_input.length; i++)
{  
  grade_point = user_input[i];
   store = Grade_value[grade_point];
   grade_store.push(store);
};
// making the input ready for grade calculation
for(var i = 0; i < grade_store.length; i++)
{ 
  var grade_score = grade_store[i] * credit_hours[i];
  final_grade.push(grade_score);
  grade_score = 1;
}
// calculating the actual grade for the user;
for(var i = 0; i< final_grade.length; i++)
{
  grade_scored +=  final_grade[i];
  

}
for(var i = 0; i< credit_hours.length; i++)
{
  credit = parseInt(credit) + parseInt(credit_hours[i]);

}
 your_grade = grade_scored / credit;
 //printing grade with some adivices;
 if(your_grade > 3.8)
 {
grade_results = "its is exellent";
 document.write('<p class="document">'+ grade_results  +'</p>');
document.write('<p class="document">'+ your_grade +'</p>');
 }
 else if((your_grade <= 3.8) && (your_grade > 3.5 ))
 {
 grade_results = "its very very good ";
 document.write('<p class="document">'+ grade_results  +'</p>');
document.write('<p class="document">'+ your_grade +'</p>');
 }
  else if((your_grade <= 3.5) && (your_grade > 3.0 ))
  {
grade_results = "its is good";
 document.write('<p class="document">'+ grade_results  +'</p>');
document.write('<p class="document">'+ your_grade +'</p>');
  }
   else if((your_grade <= 3.0) && (your_grade > 2.8 ))
   {
    grade_results = " its is fair";
   document.write('<p class="document">'+ grade_results  +'</p>');
document.write('<p class="document">'+ your_grade +'</p>');
   }
   else {
  document.write('<p class="document">'+ grade_results  +'</p>');
   };

 };