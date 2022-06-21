//request for insert


document.getElementById("btnadd").addEventListener("click",add_student);


function add_student(e){
    e.preventDefault();
    console.log("Add button clicked");

    let nm = document.getElementById("nameid").value;
    let em = document.getElementById("emailid").value;
    let pw = document.getElementById("passwordid").value;
    
    //console.log(nm);
    //console.log(em);
    //console.log(pw);
    
    //creating XHR object
    const xhr = new XMLHttpRequest();
    
    //initialize
    // xhr.open("GET","insert.php",true);

    xhr.open("POST","insert.php",true);

    xhr.setRequestHeader("Content-Type","application/json");


    //handle
    xhr.onload = () => { 
        if (xhr.readyState === xhr.DONE)
    { if(xhr.status === 200){
           console.log(xhr.responseText());
        }else{
            console.log("Problem occured");
        }
    }};
    
    const mydata = {name: nm ,email: em ,password: pw};
   console.log(mydata);

   //converts js object to json string
    const data =JSON.stringify(mydata);
    console.log(data);
    // var params = 'hi';
   xhr.send();
}    