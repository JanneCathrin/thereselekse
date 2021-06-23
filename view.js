let appDiv = document.getElementById('app')
show()
function show(){
let html = '';
    for(let i = 0; i <model.cartypes.length;i++){
        html  += `
    
     <button onclick="Info(${i})">${model.cartypes[i].carname}</button>
  
   `;

    }
    html += `${model.info}`
   




appDiv.innerHTML = html;
}
