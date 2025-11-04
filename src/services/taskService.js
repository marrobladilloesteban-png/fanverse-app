// taskService.js - Sesión 05: Escritura con addDoc
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase'; // Asegúrate que tu archivo se llame firebase.js o firebaseConfig.js

// 🟢 Función para agregar una nueva tarea
export const addTask = async (taskData) => {
  try {
    // Validar datos requeridos
    if (!taskData.title || taskData.title.trim() === '') {
      throw new Error('El título es requerido');
    }

    // Preparar datos de la tarea
    const newTask = {
      title: taskData.title.trim(),
      description: taskData.description || '',
      completed: false,
      priority: taskData.priority || 'medium',
      dueDate: taskData.dueDate || null,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    // Agregar documento a Firestore
    const docRef = await addDoc(collection(db, 'tasks'), newTask);

    console.log('✅ Tarea agregada con ID:', docRef.id);

    // Retornar la tarea recién creada
    return {
      id: docRef.id,
      ...newTask,
      // Para mostrar de inmediato las fechas (sin esperar Firestore)
      createdAt: new Date(),
      updatedAt: new Date(),
    };

  } catch (error) {
    console.error('Error al agregar tarea:', error);
    throw error;
  }
};

// 🟣 Función para validar los datos antes de guardarlos
export const validateTaskData = (data) => {
  const errors = {};

  // 🔧 Usabas "DataTransfer" (objeto del navegador) en lugar de "data"
  if (!data.title || data.title.trim().length < 3) {
    errors.title = 'El título debe tener al menos 3 caracteres';
  }

  if (data.title && data.title.length > 100) {
    errors.title = 'El título no puede exceder 100 caracteres';
  }

  if (data.description && data.description.length > 500) {
    errors.description = 'La descripción no puede exceder 500 caracteres';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
