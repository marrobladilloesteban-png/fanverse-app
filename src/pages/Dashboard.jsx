import { useAuth } from "../auth/AuthProvider";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-2">Dashboard</h1>
      <p className="text-gray-600">
        Bienvenido, <b>{user?.displayName || user?.email}</b>
      </p>
      {user?.photoURL && (
        <div className="mt-4">
          <img
            src={user.photoURL}
            alt="Avatar de usuario"
            className="w-16 h-16 rounded-full border"
          />
        </div>
      )}
    </div>
  );
}