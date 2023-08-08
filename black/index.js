let message=""
let alive=false
let black=false
let card=[]
let sum=0
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum")
let cardEl=document.getElementById("cards")

function random(){
    let num=Math.floor(Math.random()*13)+1
    if(num<=10)
    return num
    else if(num==1)
    return 11
    else
    return 10
}

function startgame(){
    alive=true
    black=false
    let first=random()
    let second=random()
    card=[first,second]
    sum=first+second
    render()
}

function render(){
    cardEl.textContent="Cards: "
    for(let i=0;i<card.length;i++){
        cardEl.textContent+=card[i]+" "

    }
    sumEl.textContent="Sum: "+sum
    if(sum==21){
        message="You've got a Blackjack"
        black=true
    }
    else if(sum>21){
        alive=false
        message="You've lost the game"
    }
    else{
        message="Do you want to draw cards?"
    }
    messageEl.textContent=message
}

function newcard(){
    if(alive && black==false){
    let newcard=random()
    card.push(newcard)
    sum+=newcard
    render()
    }

}
