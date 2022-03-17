const { Input, AutoComplete } = require('enquirer');
const questions = require("./questions");


// Expect a normal string input from the user
const askName = new Input({
  name: 'name',
  message: 'Ingresa tu nombre'
});

function getAnswerSelect(questionText){
    const resp = questionText.split(")");
    return resp[0];
}

const run = async () => {
    
    const name = await askName.run();

    for (let index = 0; index < questions.length; index++) {
       
        let startQuestion = true;
        while(startQuestion){
            const question = questions[index];
            const questionPrompt = new  AutoComplete(question);
            const asnwer = await questionPrompt.run();
            const selectAnswer = getAnswerSelect(asnwer);

            
            if(selectAnswer == question.correct){
                startQuestion = false;
                console.log(name+", respuesta correcta");
            }else{
                console.log(name+", respuesta incorrecta, vuelva a intentarlo.");
            }
        }
 
    }
    
  
}

run();