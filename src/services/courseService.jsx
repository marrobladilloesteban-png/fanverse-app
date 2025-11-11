// src/services/courseService.js
import { db } from "../firebase";
import {
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
  orderBy,
} from "firebase/firestore";

/**
 * Listener en tiempo real de los cursos de un usuario (para Dashboard)
 */
export const listenCoursesByUser = (uid, onChange, onError) => {
  const cursosRef = collection(db, "cursos");
  const q = query(cursosRef, where("uid", "==", uid));

  const unsubscribe = onSnapshot(
    q,
    (snapshot) => {
      const data = snapshot.docs.map((docSnap) => ({
        id: docSnap.id,
        ...docSnap.data(),
      }));
      onChange(data);
    },
    (error) => {
      console.error("Error en listenCoursesByUser:", error);
      if (onError) onError(error);
    }
  );

  return unsubscribe;
};

/**
 * Listener en tiempo real del catálogo público (para Cursos.jsx)
 */
export const listenPublicCourses = (onChange, onError) => {
  const cursosRef = collection(db, "cursos");
  const q = query(cursosRef, orderBy("createdAt", "desc"));

  const unsubscribe = onSnapshot(
    q,
    (snapshot) => {
      const data = snapshot.docs.map((docSnap) => ({
        id: docSnap.id,
        ...docSnap.data(),
      }));
      onChange(data);
    },
    (error) => {
      console.error("Error en listenPublicCourses:", error);
      if (onError) onError(error);
    }
  );

  return unsubscribe;
};

/**
 * Alta de curso (crear nuevo álbum)
 */
export const createCourse = async (uid, { nombre, descripcion, precio, grupo, fecha }) => {
  const cursosRef = collection(db, "cursos");

  const payload = {
    nombre: nombre.trim(),
    descripcion: descripcion.trim(),
    precio,
    grupo,
    fecha: new Date(fecha), // ✅ Guarda la fecha correctamente
    uid,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };

  const docRef = await addDoc(cursosRef, payload);
  return docRef.id;
};

/**
 * Actualización de curso (editar álbum)
 */
export const updateCourse = async (id, { nombre, descripcion, precio, grupo, fecha }) => {
  const docRef = doc(db, "cursos", id);

  const payload = {
    nombre: nombre.trim(),
    descripcion: descripcion.trim(),
    precio,
    grupo,
    fecha: new Date(fecha),
    updatedAt: serverTimestamp(),
  };

  await updateDoc(docRef, payload);
};

/**
 * Eliminación de curso
 */
export const deleteCourseById = async (id) => {
  const docRef = doc(db, "cursos", id);
  await deleteDoc(docRef);
};
