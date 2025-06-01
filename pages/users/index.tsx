import React, { useState } from "react";
import Header from "@/components/layout/Header";
import UserModal from "@/components/common/UserModal";
import { UserData } from "@/interfaces";

interface UsersPageProps {
  users: UserData[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  const [userList, setUserList] = useState(users);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddUser = (newUser: UserData) => {
    const userWithId = { ...newUser, id: userList.length + 1 };
    setUserList((prev) => [...prev, userWithId]);
  };

  return (
    <div>
      <Header />
      <main className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Users</h1>
          <button onClick={() => setModalOpen(true)} className="bg-blue-600 text-white px-4 py-2 rounded">Add User</button>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {userList.map((user) => (
            <div key={user.id} className="p-4 bg-white rounded shadow">
              <h2 className="font-semibold">{user.name}</h2>
              <p className="text-sm text-gray-600">{user.email}</p>
              <p className="text-sm">{user.company.name}</p>
            </div>
          ))}
        </div>
      </main>

      {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users
    }
  };
}

export default UsersPage;
