fetch("miercoles.json")
.then(function(response) {
return response.json();
})
.then(function(miercoles){
let placeholder=document.querySelector("#data-output");
let out="";
for(let dia of miercoles){
out +=`
<tr>
<td>${dia.id}</td>
<td>${dia.nombre}</td>
<td>${dia.edad}</td>
<td>${dia.identidadsecreta}</td>
<td>${dia.poderes}</td>
<td><img src='${dia.image}' width="150px " height="150px"</td>
</tr>
`;
}
placeholder.innerHTML=out;
});
