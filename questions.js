
const question_one =  {
    name: 'answer',
    message: '¿cuanto es 1 + 1?',
    correct:"1",
    limit: 10,
    initial: 2,
    choices: [
      '1)1+1 = 2',
      '2)1+1 = 10',
      '3)1+1 = 5',
    ]
};
const question_two =  {
    name: 'answer',
    message: '¿cuanto es 100 + 100?',
    correct:"3",
    limit: 10,
    initial: 2,
    choices: [
      '1)100+100 = 2',
      '2)100+100 = 10',
      '3)100+100 = 200',
    ]
};

const questions = [
    question_one,
    question_two
]

module.exports = questions;