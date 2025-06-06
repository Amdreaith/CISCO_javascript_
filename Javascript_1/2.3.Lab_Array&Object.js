/* 
Objectives
Familiarize the student with:

the basic properties of complex data types such as Array and Object (treated as a record) and be able to use them in practice.
Scenario
Do you remember the contact list you created while doing the task from the previous Lab? You have to admit that at first glance it looked quite strange. 
We had to use nine variables to store information about just three users. What's worse, adding each new user would require the creation of three more variables. 
This is neither convenient nor practical. Fortunately, since then we have learned something about arrays and objects, which will allow us to save our list in a 
slightly more convenient way. Using the same data as in the previous Lab, create the contact list as an array, each element of which will be an object describing a single user.
 So we should get a three-element array, and each object placed in it will contain three pieces of information (name, phone, and email).

At the end of the list declared in this way, add a new contact using the appropriate array method. The new contact is: Maisie Haley / 0913 531 3030 / risus.Quisque@urna.ca.

Display the first and last contact, again in the format: name / phone / email. Use the length property of the array to determine the index 
*/

/*

let contacts = [{
name: "Maxwell Wright",
phone: "(0191) 719 6495",
email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
name: "Raja Villarreal",
phone: "0866 398 2895",
email: "posuere.vulputate@sed.com"
}, {
name: "Helen Richards",
phone: "0800 1111",
email: "libero@convallis.edu"
}];

*/


let contacts = [ {
    name : "Maxwell Wright",
    phone : "(0191) 719 6495",
    email : "uwu1@gmail.com" 
},
{
    name : "Raja Villarreal",
    phone : "0866 398 2895",
    email : "rajaasulay2@Gmail.com"
},
{
    name : "Helen Richards",
    phone : "0800 1111",
    email : "helenuwu3@gmail.com"
}];

// Add a new contact
contacts.push ({
    name : "Hailey Bieber" ,
    phone : "0913 531 3030",
    email : "bieberrrr@gmail.com"
});

// Display the first and last contact
console.log("First contact: " + contacts[0].name + " / " + contacts[0].phone + " / " + contacts[0].email);
console.log("Last contact: " + contacts[contacts.length - 1].name + " / " + contacts[contacts.length - 1].phone + " / " + contacts[contacts.length - 1].email);