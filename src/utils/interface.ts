interface Exercise {
  name: string;
  sets: number;
  reps: number;
}

interface WorkoutDay {
  warmup: Exercise[];
  workout: Exercise[];
}

export type WorkoutProgram = Record<number, WorkoutDay>;
export const workoutType = ["Push", "Pull", "Legs"];
