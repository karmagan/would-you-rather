import { saveQuestionAnswer, saveQuestionToDATA } from "../utils/api";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_QUESTION_ANSWER ='SAVE_QUESTION_ANSWER'
export const SAVE_QUESTION = 'SAVE_QUESTION'
export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

 function saveAnswer({ authedUser, qid, answer }){
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer
  }
}

function saveQuestion(question){
  return{
    type: SAVE_QUESTION,
    question
  }
}

export function handleSaveAnswer (info) {
  return (dispatch) => {
    saveQuestionAnswer(info)
    .then(() => {
      dispatch(saveAnswer(info));
      })
    .catch((e) => {
      console.warn('Error in handleSaveAnswer: ', e);
      alert('There was an error. Try again.');
  });
};
}
export function handleSaveQuestion (info) {
  console.log(info)
  return (dispatch) => {
    saveQuestionToDATA(info)
    .then((question) => {
      dispatch(saveQuestion(question));
      })
    .catch((e) => {
      console.warn('Error in handleSaveQuestion: ', e);
      alert('There was an error. Try again.');
  });
};
}