function Info(index){
    
    let html = `<li>${model.cartypes[index].model}, 
    

                    ${model.cartypes[index].årsmodel}</li>
                    <button onclick="fjern(${index})"> slett </button>
                    <button onclick="Endre(${index})"> Endre </button>
                    <input type="text" oninput="model.inputs=this.value">

                    <br>
                    <button onclick="newCar(${index})"> nytt merke? </button>
                    
                `
                   

    
model.info = html;



show();

}

function fjern(index){
    model.cartypes.splice(index,1)
    model.info = '';
show();
}


function Endre(index){

    //alert(index);
     model.cartypes[index].carname = model.inputs;

show();
}

function Leggtilnybil(){
    model.newcar.cartypes.push(index,1)
    model.info ='';

}



    
   











