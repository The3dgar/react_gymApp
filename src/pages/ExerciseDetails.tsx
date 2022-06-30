import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  getExerciseById,
  getExercisesByEquipment,
  getExercisesTarget,
  getExerciseVideos,
} from '../apis/gymApi';
import { Detail, ExerciseVideos, SimilarExercises } from '../components';
import { Loader } from '../components/Loader';
import {
  ExercisesResponse,
  Video,
  VideoResponse,
} from '../interfaces/gymInterfaces';

export const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail] = useState<ExercisesResponse>();
  const [targetMuscle, setTargetMuscle] = useState<ExercisesResponse[]>();
  const [equipment, setEquipment] = useState<ExercisesResponse[]>();
  const [videos, setVideos] = useState<VideoResponse>();
  const { id } = useParams();

  const getExerciseData = async () => {
    if (!id) return;
    const { data } = await getExerciseById(id);
    setExerciseDetail(data);

    const [videoData, targetMuscleData, equipmentData] = await Promise.all([
      getExerciseVideos(data.name),
      getExercisesTarget(data.target),
      getExercisesByEquipment(data.equipment),
    ]);

    setVideos(videoData.data);
    setTargetMuscle(targetMuscleData.data);
    setEquipment(equipmentData.data);

    // const { data: videoData } = await getExerciseVideos(data.name);
    // const { data: targetMuscleData } = await getExercisesTarget(data.target);
    // setTargetMuscle(targetMuscleData);
    // const { data: equipmentData } = await getExercisesByEquipment(
    //   data.equipment
    // );
    // setEquipment(equipmentData);
  };

  useEffect(() => {
    getExerciseData();
  }, [id]);

  if (!exerciseDetail) return <Loader />;

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      {videos ? (
        <ExerciseVideos videos={videos} name={exerciseDetail.name} />
      ) : (
        <Loader />
      )}
      {targetMuscle && equipment && (
        <SimilarExercises
          targetMuscleExercises={targetMuscle}
          equipment={equipment}
        />
      )}
    </Box>
  );
};
