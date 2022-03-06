const readLineSync = require('readline-sync');
const successMessage = "Hurrahhh!!!! you choose correct option, you got 1 point.";
const failureMessage = "Sorry, you choose wrong option.";

const questions = [
	{
		statement: 'Which of the following advantage of using GIT?',
		choices: [
			"Collaboration friendly.",
			"Data redundancy and replication.",
			"Data redundancy.",
			"All of the above."

		],
		ans: 4
	},
	{
		statement: 'Which of the language is used in GIT?',
		choices: [
			"C.",
			"HTML.",
			"C++.",
			"None of these."

		],
		ans: 1
	},
	{
		statement: 'What is the function of ‘GIT PUSH’ in GIT?',
	  choices: [
			"‘GIT PUSH’ updates remote refs.",
			"‘GIT PUSH’ updates remote refs along with associated objects.",
			"‘GIT PUSH’ remote refs along with associated objects.",
			"None of these."

		],
		ans: 2
	},
	{
		statement: 'What is an alternative to merging in git?',
		choices: [
			"Basing.",
			"Rebasing.",
			"Both 1 and 2.",
			"None of these."

		],
		ans: 2
	},
	{
		statement: 'What is the use of ‘git log’?',
		choices: [
			"by author",
			"date",
			"content.",
			"All of the above."

		],
		ans: 1
	}
];

const addNewQuestion = (ques, options, correctOption) => {
	questions.push({
		statement: ques,
		choices: options,
		ans: correctOption
	});
}

const printChoices = (choices) => {
	choices.forEach((choice, idx) => console.log(`${idx+1}. ${choice}`));
}

const displayQuestions = () => {
	let countScore = 0;
	
	questions.forEach((question, questionNumber) => {

		console.log(`Ques${questionNumber+1}. ${question.statement}\n`);
		
		printChoices(question.choices);

		let userInput = parseInt(readLineSync.question('\nenter your choice '));

		if(userInput === question.ans) {
			countScore++;
			console.log(successMessage);
		} else {
			countScore--;
			console.log(`${failureMessage} Correct option is ${question.ans}`);
		}
		console.log('\n');
	});

	console.log(`Your total score is: ${countScore}. Thanks for playing quiz.`)
}

(() => {
	const userName = readLineSync.question('What is your name?\n');
	console.log(`Hi ${userName}. Let's play a quiz on basics of git...\n`);
})();

displayQuestions();

