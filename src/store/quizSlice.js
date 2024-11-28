import { createSlice } from "@reduxjs/toolkit";
import quizData from '../assets/data'


const initialState = JSON.parse(localStorage.getItem("quizState")) || {
  currentQuestion: 0,
  score: 0,
  completed: false,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    answerQuestion(state, action) {
      const { isCorrect } = action.payload;
      if (isCorrect) state.score += 1;
      state.completed = state.currentQuestion >= quizData.length-1;
      if(!state.completed) {
        state.currentQuestion += 1;
      }
      localStorage.setItem("quizState", JSON.stringify(state)); // Save to localStorage
    },
    resetQuiz(state) {
      state.currentQuestion = 0;
      state.score = 0;
      state.completed = false;
      localStorage.removeItem("quizState"); // Clear localStorage
    },
  },
});

export const { answerQuestion, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;
