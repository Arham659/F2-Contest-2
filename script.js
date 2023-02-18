let bookArray=[];
let bookCount=bookArray.length;

document.getElementById("LibForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("bookName").value;
  let issue = document.getElementById("issue").value;
  
  let newEntry = {
    id:bookCount + 1,
    bookname: name,
    issue: issue,

  }
  bookArray.push(newEntry);
  bookCount++;
  document.getElementById("bookName").value="";
  document.getElementById("issue").value="";
  updateTable();
});
const date=new Date();

// 18/02/2023 at 12:00 pm ;
let nr= "Not Returned";
const r= "Returned";

function updateTable() { 
  let List = document.getElementById("List");
  List.innerHTML = "";
  for (let i = 0; i < bookArray.length; i++) {
    let book = bookArray[i];
    List.innerHTML += `
      <tr>
        <td>${book.id}</td>
        <td>${book.bookname}</td>
        <td>${book.issue}</td>
        <td>${`${date.getDate()}/${date.getMonth()}/${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()} PM`}</td>
        <td class="nrr${i}" style="color:red" >${nr}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick="change(${i})" id="button"class="fa fa-edit">     </button></td>  
      </tr>
    `;
  }
}
function change(i){
  console.log(i) ;

  let nrr = document.querySelector(`.nrr${i}`) ;
  if(nrr.textContent.includes("Not Returned")){
  nrr.innerHTML = `${r}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick="change()" id="button"class="fa fa-edit"></button>` ;
nrr.style.color= "green" ;
} 
else{
  nrr.innerHTML = `${nr}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<button onclick="change()" id="button"class="fa fa-edit"></button>`
nrr.style.color = "red" ;
}
}