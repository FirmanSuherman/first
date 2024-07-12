const link="https://jsonplaceholder.typicode.com/users";

fetch(link).then((response)=>response.json()).then((data)=>{
    data.map((item)=>{
        let temp = document.createElement("p"); 
        let div=document.getElementById("tabel");

        let nama = document.createElement("span");
        nama.innerText= item.name;
        temp.appendChild(nama);

        let space = document.createElement("span");
        space.innerText=" ====> ";
        temp.appendChild(space);

        let mail = document.createElement("span");
        mail.innerText= item.email;
        temp.appendChild(mail);

        div.appendChild(temp)
    });
})