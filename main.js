//al click di start genero la griglia
document.getElementById("genera").addEventListener("click",function(){

    GeneraGrid();
})

//funzione che genera la griglia
function GeneraGrid(){
    //svuoto lo stato precedente


    const grid = document.getElementById("grid");
    grid.innerHTML = "";

//genero le bombe
    const numBox = document.querySelector("#level").value;
    var bombs=[]
    for (let i=0; i<16; i++){
        let random=generaRandom(1,numBox);
        //senza ripetizione
        if (bombs.includes(random)){
            i--;
        }else{
            bombs.push(random);
        }

    }
    console.log(bombs);
    let gameover = false;
    let punteggio = 0;



    //genero tot quadrati all'interno della griglia
    for( let i = 1 ; i <= numBox; i ++ ) {
        let box = generaBox(i);
        box.style.width = `calc(100% / ${Math.sqrt(numBox)})`;
        box.style.height = `calc(100% / ${Math.sqrt(numBox)})`;

        //funzione che mi gestisce il click dai quadrati
        box.addEventListener("click" , function(){

            if(gameover==false){
                console.log(bombs)
                if(bombs.includes(i)){

                    box.classList.add("bomb");
                    alert(`oh no amico mi sa che hai preso una bomba
                    il tuo punteggio finale è ${punteggio}
                    `);
                    gameover=true;



                }else{
                    box.classList.add("clicked");
                    punteggio++;

                    if(punteggio>=(numBox-bombs.lenght)){

                        alert(`sembrerebbe che HAI VINTO!!
                            con un punteggio di: ${punteggio}
                        `)

                        gameover=true;

                    }



                }



            }
            console.log(punteggio);
        } )

        grid.appendChild(box);


    }

    
    
    
}


//funzione che genera i quadrati
function generaBox(num){

        const box = document.createElement("div")
        box.classList.add("box");
        box.innerText = num;

        return box;
}


function generaRandom(min,max){
    
    return Math.floor(Math.random() * (max - min) ) + min;


} 