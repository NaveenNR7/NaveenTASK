var a = [{ firstname: "Naveen", Lastname: "Ramesh", City: "trichy", Age: 17, College: "GPT_Polytechnic_College", course: "CSE", state: "Tamil Nadu", Country: "India", Dob: "31/10/2005", year: "2023" }]
document.getElementById("b").innerHTML = a.map(getAlldetails);


function getAlldetails(item) {
    return [item.firstname, item.Lastname, item.City, item.Age, item.College, item.course, item.state, item.Country, item.Dob, item.year].join(" ");
}
console.table(a);

// function displaya(a) 
// {
//     let table = '<table border="1">'
//     table += <tr> <th>firstname</th><th>lastname</th><th>city</th><th>age</th><th>college</th><th>course</th><th>state</th><th>country</th><th>Dob</th><th>year</th></tr>
//     a.foreach(a + firstname) => {
//         table = table + '<tr>'
//         table = table + <td>title:${a.Age}</td>

//     });


