import axios from 'axios';
import { ExercisesResponse } from '../interfaces/gymInterfaces';

const { VITE_RAPID_API_KEY, VITE_RAPID_HOST } = import.meta.env;

const gymApi = axios.create({
  baseURL: `https://${VITE_RAPID_HOST}`,
  headers: {
    'X-RapidAPI-Key': VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': VITE_RAPID_HOST,
  },
});

export const getExercises = () => {
  console.log('fetching getExercises');
  return gymApi.get<ExercisesResponse[]>('/exercises');
};

export const getCategories = () => {
  console.log('fetching getCategories');
  return gymApi.get<string[]>('/exercises/bodyPartList');
};

export const getExercisesByBodyPart = (part: string) => {
  console.log('fetching getExercisesByBodyPart');
  return gymApi.get<ExercisesResponse[]>(`/exercises/bodyPart/${part}`);
};
