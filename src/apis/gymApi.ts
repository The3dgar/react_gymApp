import axios from 'axios';
import { ExercisesResponse, VideoResponse } from '../interfaces/gymInterfaces';

const { VITE_RAPID_API_KEY, VITE_RAPID_HOST_GYM, VITE_RAPID_HOST_VIDEO } = import.meta.env;

const gymApi = axios.create({
  baseURL: `https://${VITE_RAPID_HOST_GYM}`,
  headers: {
    'X-RapidAPI-Key': VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': VITE_RAPID_HOST_GYM,
  },
});

const videoApi = axios.create({
  baseURL: `https://${VITE_RAPID_HOST_VIDEO}`,
  headers: {
    'X-RapidAPI-Key': VITE_RAPID_API_KEY,
    'X-RapidAPI-Host': VITE_RAPID_HOST_VIDEO,
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

export const getExerciseById = (id: string) => { 
  console.log('fetching getExerciseById');
  return gymApi.get<ExercisesResponse>(`/exercises/exercise/${id}`);
}

export const getExerciseVideos = (query: string) => {
  console.log('fetching getExerciseVideos');
  return videoApi.get<VideoResponse>(`/search?query=${query}`);
}

export const getExercisesTarget = (target: string) => {
  console.log('fetching getExerciseTarget');
  return gymApi.get<ExercisesResponse[]>(`/exercises/target/${target}`);
}

export const getExercisesByEquipment = (equipment: string) => {
  console.log('fetching getExercisesByEquipment');
  return gymApi.get<ExercisesResponse[]>(`/exercises/equipment/${equipment}`);
}