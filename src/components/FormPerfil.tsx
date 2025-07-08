import { useEffect, useState } from "react";
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';
import { User } from "@/app/interfaces/User";
import { clubooksApi } from "@/app/service/clubooks-api";
import Image from "next/image";
import { toast } from "react-toastify";

export default function ProfileForm() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    handleUser()
  }, []);

  const handleUser = async () => {
    const token = Cookies.get('token');
    if (!token) {
      console.error('No token found');
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const decoded = jwtDecode<any>(token);
    const userId = decoded.sub;
    try {
      const response = await clubooksApi.getUserProfile(userId)
      setUser(response.data)
    } catch (error) {
      console.error(error)
    }
  }

const handleUpdateUser = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  console.log(user)

  if (user) {
    try {
      await clubooksApi.updateUserProfile(user._id, {
        name: user.name,
        userName: user.userName,
        date_birth: user.date_birth
      });
      toast.success("Perfil atualizado com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Erro ao atualizar o perfil.");
    }
  }
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div className="min-h-screen w-full bg-black text-white p-6 flex justify-center items-start">
      <form className="w-full max-w-md space-y-6" onSubmit={handleUpdateUser}>
        <h2 className="text-center text-2xl font-semibold border-b border-white pb-2">FOTO DE PERFIL</h2>

        <div className="flex justify-center">
          <div className="w-24 h-24 bg-gray-800 border border-white flex items-center justify-center rounded-md">
            {user?.avatar ? (
              <Image 
                src={user.avatar} 
                alt="Avatar do usuário" 
                width={48} 
                height={48} 
                className="rounded-full"
              />
            ) : (
              <span className="text-gray-500 text-xl">📷</span>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1">Nome</label>
          <input
            type="text"
            className="w-full bg-black border border-gray-500 text-white px-3 py-2 rounded-md"
            placeholder="Digite seu nome"
            name="name"
            value={user?.name || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Nome</label>
          <input
            type="text"
            className="w-full bg-black border border-gray-500 text-white px-3 py-2 rounded-md"
            placeholder="Digite seu nome de usuário"
            name="userName"
            value={user?.userName || ''}
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-sm mb-1">Data de nascimento</label>
            <input
              type="date"
              name="date_birth"
              className="w-full bg-black border border-gray-500 text-white px-3 py-2 rounded-md"
              value={user?.date_birth?.split('T')[0] || ''}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-md"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}
