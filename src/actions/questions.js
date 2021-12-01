import { saveQuestionAnswer } from "../utils/api";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const SAVE_QUESTION_ANSWER ='SAVE_QUESTION_ANSWER'

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