// src/hooks/useCourses.js
import { useEffect, useState } from "react";
import { listenCoursesByUser } from "../services/courseService";

export const useCourses = (uid) => {
  const [cursos, setCursos] = useState([]);
  const [loadingCursos, setLoadingCursos] = useState(true);

  useEffect(() => {
    if (!uid) return;

    setLoadingCursos(true);

    const unsubscribe = listenCoursesByUser(
      uid,
      (data) => {
        setCursos(data);
        setLoadingCursos(false);
      },
      () => {
        setLoadingCursos(false);
      }
    );

    return () => unsubscribe();
  }, [uid]);

  return { cursos, loadingCursos };
};