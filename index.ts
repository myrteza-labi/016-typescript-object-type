let employee : {
    firstName: string; 
    lastName: string;
    age: number; 
    jobTitle: string; 
}

employee = {
    firstName: "Martin", 
    lastName: "Labi", 
    age: 25, 
    jobTitle: "Programmer",  
}; 

// OR 

let worker: {
    firstName: string; 
    lastName: string; 
    age: number; 
    jobTitle: string; 
}; 

worker = {
    firstName: "Ilir", 
    lastName: "Labi", 
    age: 21, 
    jobTitle: "Pôle Emploi"
}

let vacant : {} = {};

console.log(vacant.toString()); 

console.log(employee.firstName); 