export interface ApiResponse {
  statistic: {
    snippetsCount: number;
    rating: number;
    commentsCount: number;
    likesCount: number;
    dislikesCount: number;
    questionsCount: number;
    correctAnswersCount: number;
    regularAnswersCount: number;
  } | null;
}

export interface ThunkApiType {
  rejectValue: string | null;
}

export type StatisticsState = ApiResponse & {
  isLoading: boolean;
  data: string[];
};
