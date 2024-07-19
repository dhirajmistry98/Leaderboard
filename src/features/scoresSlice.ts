import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface Score {
  username: string;
  score: string;
}

const initialState: Score[] = [];

const scoresSlice = createSlice({
  name: 'scores',
  initialState,
  reducers: {
    addScore(state, action: PayloadAction<Score>) {
      state.push(action.payload);
      state.sort((a, b) => b.score.localeCompare(a.score));
    },
  },
});

export const { addScore } = scoresSlice.actions;
export const selectScores = (state: RootState) => state.scores;
export default scoresSlice.reducer;
