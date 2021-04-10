var readLineSync = require('readline-sync');
const chalk = require('chalk');
var score = 0;

function first() {
  var name = readLineSync.question('Please enter your name: ');
  console.log('Hey ' + name + chalk.green(' Welcome to The Office Quiz '));

  console.log('=============');
  console.log('=============');
  console.log(chalk.green('All The Best!!'));
  console.log('=============');
  console.log('=============');
  console.log(
    chalk.green(
      'Answer by pressing 1, 2, 3 or 4 key for correct option and press enter'
    )
  );
  console.log('=============');
  console.log('=============');
}

function play(question, options, answer, length) {
  console.log(question);
  for (var i = 0; i < options.length; i++) {
    console.log(i + 1, chalk.cyan(options[i]));
  }
  var chosenAnswer = readLineSync.question();

  if (options[chosenAnswer - 1] === answer) {
    console.log(chalk.green('You are right,') + ' Congrats!');
    score += 1;
  } else {
    console.log(
      chalk.red('Sorry that was wrong. ') +
        'Correct answer is ' +
        chalk.green(answer)
    );
  }

  console.log('Your score is ', score);
  console.log('=======================');
  if (length === 10) {
    if (score <= 3) {
      console.log('Score: ' + (score / 10) * 100 + '%');
      console.log('You can do better next time');
    } else if (score > 5 && score < 8) {
      console.log('Score: ' + (score / 10) * 100 + '%');
      console.log("🔥🔥🔥 Yaay!! that's a great score 🔥🔥🔥");
    } else {
      console.log('Score: ' + (score / 10) * 100 + '%');
      console.log('🔥🔥🔥 Damn!! You are really good at this 🔥🔥🔥.');
    }
  }
}

var quizArray = [
  {
    question: 'What does Dwight say is the scariest animal?',
    options: ['Box Jellyfish.', 'Sting Ray.', 'Tiger.', 'Elephant.'],
    answer: 'Box Jellyfish.',
  },
  {
    question: 'What is Michael’s favorite restaurant?',
    options: ['BBQ.', 'Chili’s.', 'The Lunch Home.', "Mama's Cafe."],
    answer: 'Chili’s.',
  },
  {
    question: 'What kind of car does Dwight drive?',
    options: ['A Trans Am.', 'Mustang.', 'SUV.', 'HatchBack.'],
    answer: 'A Trans Am.',
  },
  {
    question:
      'Who does Stanley’s daughter flirt with on, Take Your Daughter To Work Day?',
    options: ['Creed.', 'Stanley.', 'Oscar.', 'Ryan.'],
    answer: 'Ryan.',
  },
  {
    question: 'What does Stanley typically do during meetings?',
    options: [
      'Crossword puzzles.',
      'Play Video Games.',
      'Sleep.',
      'Eat Snacks.',
    ],
    answer: 'Crossword puzzles.',
  },
  {
    question: 'Where does Jim propose to Pam?',
    options: ['A gas station.', 'Office', 'Cafe.', 'Outside Park.'],
    answer: 'A gas station.',
  },
  {
    question: 'Which of Angela’s cats does Dwight freeze?',
    options: ['Sprinkles.', 'Neko.', 'Mau.', 'Lulu.'],
    answer: 'Sprinkles.',
  },
  {
    question: 'Who runs the warehouse?',
    options: ['Oscar.', 'Jim.', 'Creed.', 'Darryl.'],
    answer: 'Darryl.',
  },
  {
    question:
      'Who played Jim’s love interest during his Stamford transfer days?',
    options: [
      'Jenna Fischer',
      'Rashida Jones.',
      'Angela Kinsey',
      'Mindy Kaling',
    ],
    answer: 'Rashida Jones.',
  },
  {
    question: 'What facial hairstyle did Michael copy off of Ryan?',
    options: [
      'Royale Beard.',
      'Petite Goatee',
      'The goatee.',
      'Van Dyke Beard',
    ],
    answer: 'The goatee.',
  },
];

first();
for (var i = 0; i < quizArray.length; i++) {
  play(quizArray[i].question, quizArray[i].options, quizArray[i].answer, i + 1);
}
