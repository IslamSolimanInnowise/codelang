import { getStatistics } from "@features/statistics/statistics.thunks";
import { useAppDispatch, useAppSelector } from "@shared/hooks";
import { useCallback } from "react";

const useStatistics = () => {
  const statisticsStore = useAppSelector((state) => state.statistics);
  const dispatch = useAppDispatch();

  const onGetStatistics = useCallback(
    (id: Parameters<typeof getStatistics>[0]) => dispatch(getStatistics(id)),
    [dispatch]
  );

  return { ...statisticsStore, onGetStatistics };
};

export default useStatistics;
