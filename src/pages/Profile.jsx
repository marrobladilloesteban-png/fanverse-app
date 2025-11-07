import { useAuth } from "../auth/AuthProvider";

export default function Profile() {
  const { user } = useAuth();

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Perfil del usuario</h1>

      {!user ? (
        <p className="text-gray-600">
          No hay información de usuario disponible.
        </p>
      ) : (
        <div className="space-y-3">
          <p>
            <span className="font-semibold">Nombre: </span>
            {user.displayName || "Sin nombre registrado"}
          </p>

          <p>
            <span className="font-semibold">Correo: </span>
            {user.email}
          </p>

          {user.photoURL && (
            <div className="mt-4">
              <img
                src={user.photoURL}
                alt="Foto de perfil"
                className="w-24 h-24 rounded-full border"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}