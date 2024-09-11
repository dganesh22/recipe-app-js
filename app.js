
const URL = "https://dummyjson.com"
let recipes = []

// read api data
const readData = async () => {
    await fetch(`${URL}/recipes`)
        .then(res=> res.json())
        .then(res => {
            console.log(`data =`, res)
            printData(res.recipes)
            recipes = res.recipes
        }).catch(err => console.log(err))
}

readData()

let recipeBlock = document.getElementById("recipes")
// print recipes list
const printData = (data) => {
    data.forEach(item => {
        recipeBlock.innerHTML += `<div class="card" onclick="dialogHandler(${item.id})">
                                    <img src='${item.image}' />
                                    <div class="content">
                                        <h4> ${item.name} </h4>
                                    </div>
                                </div>`
    });
};

let dialog = document.querySelector("#recipe-dialog")
let cls = document.querySelector("#clsBtn")
let content = document.querySelector("#content")
    
const dialogHandler = (id) => {
    console.log(`card clicked =`,id)
    dialog.show();
    let single = recipes.find(item => item.id == id)
    console.log(`single =`, single)
    content.innerHTML = `<div>
                            <h1>  ${single.name} </h1>
                             <h3>Ingradients</h3>
                             <ol>
                                    ${
                                        single.ingredients 
                                    }
                             </ol>
                            <hr/>
                            <h3>Instructions</h3>
                             <ol>
                                    ${
                                        single.instructions 
                                    }
                             </ol>
                        </div>`
}

cls.addEventListener("click", function() {
    dialog.close();
});