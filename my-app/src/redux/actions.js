export const QUESTION_ANSWER = 'QUESTION_ANSWER';
export const CHANGE_QUESTION = 'CHANGE_QUESTION';
export const INIT_QUESTIONS = 'INIT_QUESTIONS';
export const TIMER = 'TIMER';
export const SUBMIT='SUBMIT';


export function questionAnswer(index, answer){
  return{ type: QUESTION_ANSWER, payload: {index, answer}};
}

export function changeQuestion(index){
  return{ type: CHANGE_QUESTION, payload: {index}};
}

export function initQuestions(questions){
  return{type: INIT_QUESTIONS, payload: {questions}};
}

export function timer(time) {
	return { type: TIMER, payload: {time}};
}
export function submit(questions){
   return {type:SUBMIT, payload:{questions}}
}
