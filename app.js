class Question{
    constructor(question,a,b,c){
        this.question = question;
        this.a = a;
        this.b = b;
        this.c = c;
    }
} 
function createVariable(id){
    return document.getElementById(id)
    
}
const question =  createVariable('question')
const answerAlabel = createVariable('answerAlabel')
const answerBlabel = createVariable('answerBlabel')
const answeeClabel = createVariable('answerClabel')
const form = createVariable('form')
const submit = createVariable('submit')
const answerList =  document.querySelectorAll('input[name="quiz"]')
const answerA = createVariable('answerA')
let points = 0;
let currentQuestion = 0
let arrQuestion = [
    new Question(`Qual'è il colore preferito di Lara?`,['verde',2],['nero',5],['giallo',0]),
    new Question(`Qual'è l'animale preferito di Lara?`, ['farfalla',0],['volpe',5],['gatto',2]),
    new Question(`Qual'è la cosa che Lara mangia di più?`,['ketchup',0],['wurstel',2],['panini',5]),
    new Question(`Quanto pesa Lara?`,['27',0],['32',2],[30,5]),
    new Question(`Cosa vuole fare Lara da grande?`,['tatuatrice',2],['youtuber',5],['parrucchiera',0]),
    new Question(`Qual'è la bevanda preferita di Lara?`,['succo di frutta',2],['coca cola',0],['the alla pesca',5]),
    new Question(`Qual'è lo youtuber preferito di Lara?`,['Spina',0],['Lyon',2],['Xlao',5]),
    new Question(`Cosa fa Lara quando si annoia?`,['gioca',2],['balla',5],['canta',0]),
    new Question(`Qual'è il gioco preferito di Lara sul tablet?`,['Pokemon Go',0],['Suspect',5],['Magic tiles',2]),
    new Question(`Qual'è il giorno della settimana preferito di Lara?`,['lunedì',2],['giovedì',5],['sabato',0])
]
question.innerHTML= arrQuestion[0].question
answerAlabel.innerHTML = arrQuestion[0].a[0]
answerBlabel.innerHTML = arrQuestion[0].b[0]
answeeClabel.innerHTML = arrQuestion[0].c[0]
form.addEventListener('submit', (e) => {
    e.preventDefault()
   for(let q of answerList){
    if(q.checked){
        
        points += (arrQuestion[currentQuestion][q.value][1])
        currentQuestion++
     
   
    }

   }
   
   if(currentQuestion <= arrQuestion.length - 1){
    changeQuestion(currentQuestion)
    for (let q of answerList){
        q.checked = false
    }
   }else{
    showResult()
   }
   
})
function changeQuestion(currentQuestion){
    question.innerHTML= arrQuestion[currentQuestion].question
    answerAlabel.innerHTML = arrQuestion[currentQuestion].a[0]
    answerBlabel.innerHTML = arrQuestion[currentQuestion].b[0]
    answeeClabel.innerHTML = arrQuestion[currentQuestion].c[0]
}
function showResult(){
    if(points === 50){
        alert(`Complimenti hai ottenuto ${points} punti, conosci Lara meglio di chiunque altro, forse meglio di lei stessa`)
    }else if (points < 50 && points > 30){
        alert(`Bene, hai totalizzato ${points} punti, conosci Lara abbastanza bene`)
    }else if (points < 30 && points > 20){
        alert(`Hai totalizzato ${points} punti, conosci un pò Lara, forse dovreste passare un pò più di tempo insieme`)
    }else if(points < 20){
        alert(`Che peccato!!! Hai totalizzato solo ${points} punti, non conosci per nulla Lara. Non sai cosa ti perdi`)
    }
    
}


