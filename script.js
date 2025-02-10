const buttons = document.querySelectorAll('.button');  //here we store .button class in const buttons
const body = document.querySelector('body')            //here we are storing body in const body

//here we applied forEach on buttons           .forEach(function (item){callbackfunction})
buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click',function(e){            //here we add a eventlistner clcik on button function(yaha hum event ko ek nam de denge){callback}
        console.log(e);                                     //e.target tells ki kis target se hamare pas event aya he
        console.log(e.target);                             
        if (e.target.id === 'grey'){                        //e.target.id jis target se hamare pas event aya uski id kya he
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
    })
});