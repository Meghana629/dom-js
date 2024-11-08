var k=document.getElementById("p");
function b(){
    k.style.backgroundColor="red"
    k.style.color="white"
    k.style.fontSize="100px"
    k.style.borderRadius="30px"
    k.style.height="150px"
    k.style.width="250px"
    k.style.display="inline"
    console.log(k)
}

// 2. click the button and display three images on clicking the button ft img should be of border radius 30px , second img should be border radius 100px , third img should be of borderradius 50%

function a(){
    let images=document.getElementById("div");
    let button=document.getElementById("btn1");
    button.style.width="100px"
    button.style.backgroundColor="red"
    images.innerHTML=`<img id="i1" src="https://images.unsplash.com/photo-1462536943532-57a629f6cc60?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3"width="200px"><img id="i2" src="https://cdn.pixabay.com/photo/2024/06/20/17/03/fishing-8842590_1280.jpg"width="200px"><img id="i3" src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_640.jpg"width="200px">`
    
    let image1=document.getElementById("i1")
    image1.style.borderRadius="30px"
    let image2=document.getElementById("i2")
    image2.style.borderRadius="100px"
    let image3=document.getElementById("i3")
    image3.style.borderRadius="50%"
}