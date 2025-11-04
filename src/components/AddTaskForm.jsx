import React, { useState } from "react";
import { addTask, validateTaskData } from "../services/taskService";

export default function AddTaskForm({ onTaskAdded }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "medium",
    dueDate: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // ✅ limpiar error del campo editado
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    // ✅ Validar datos antes de guardar
    const validation = validateTaskData(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      setLoading(false);
      return;
    }

    try {
      const newTask = await addTask(formData);

      // ✅ Notificar al componente padre
      if (onTaskAdded) {
        onTaskAdded(newTask);
      }

      // ✅ Limpiar formulario
      setFormData({
        title: "",
        description: "",
        priority: "medium",
        dueDate: "",
      });

      alert("Tarea agregada exitosamente ✅");
    } catch (error) {
      console.error(error);
      setErrors({
        general: "Error al guardar la tarea. Inténtalo de nuevo.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-xl font-bold mb-4">Agregar Nueva Tarea</h2>

      {errors.general && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {errors.general}
        </div>
      )}

      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Título</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          placeholder="Escribe el título de la tarea"
          required
        />
        {errors.title && (
          <p className="text-red-600 text-sm mt-1">{errors.title}</p>
        )}
      </div>

      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Descripción</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
          rows="3"
          placeholder="Detalles de la tarea..."
        />
      </div>

      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">Prioridad</label>
        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        >
          <option value="low">Baja</option>
          <option value="medium">Media</option>
          <option value="high">Alta</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="block text-sm font-medium mb-1">
          Fecha de vencimiento
        </label>
        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2 px-4 rounded text-white font-semibold ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loading ? "Guardando..." : "Agregar Tarea"}
      </button>
    </form>
  );
}
