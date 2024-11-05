
interface Circle{
    radius : number;
}
interface Square{
    side : number;
}
interface Rectangle{
    width : number;
    height : number;
}


// 👉👉👉👉👉 "Or" ( | ) , "Union" ( & ) 👈👈👈👈👈

type Shap1 = Circle | Square | Rectangle // 👈 useCase for "Or" ( | ) 

// function findArea(myShap : Circle | Square | Rectangle){  👈 // instead of doing this we did as below. Becz assume if there are 100 of funct like this and need to add "some" more shapes.. then we have modify that single shape in 100 different funct. Instead we use 👉 "type" and define all shape inside it. And need to menstion "new shape" whatever we add in "type" only
function findArea(myShap : Shap1){
    console.log("Area got render ");
}

findArea( // calling "findArea" 👈 we just mentioned "radius" and funct was allowed. Becz of (|) <-- "Or" 
   
    { radius : 10,}
);

// ---------------------------------------------------------------------------------------

type Shap2 = Circle & Square & Rectangle // 👈 useCase for "Union" ( & ) // In case of (&) we need to fullfill all "properties" in that mestioned specific "Interface". see nelow calling "renderShape" 👈 Funct

function renderShape(myShap : Shap2){  
    console.log("Shape got render ");
}

renderShape( // calling "renderShape"👈 funct we need to "mentioned" all the "Properties" forcefully. Becz of (&) <-- "And"
    {    
        radius : 3,  // if any of the value we will (miss) not mentioned then we got "error"
        side : 7,
        width : 87,
        height : 90
    }
)



 