class Form{
    constructor(){}
    display(){
        var title= createElement("H1")
        title.html("car racing game")
        title.position(500,100)
        var input = createInput("name")
        input.position(450,200)
        var button = createButton("Start")
        button.position(450,230)
        button.mousePressed(function(){
    input.hide()
    button.hide()
    var name = input.value()
    var greeting = createElement("H3")
    greeting.html("Hello"+name)
    greeting.position(450,230)
        })
    }
}