import { UserProps } from "../../interfaces";

const UserCard = ({ name, email, phone, website, company, address }: UserProps) => {
  return (
    <div className="border p-4 rounded shadow-md hover:shadow-lg transition">
      <h2 className="text-2xl font-semibold mb-2">{name}</h2>
      <p className="text-sm text-gray-600 mb-1"><strong>Email:</strong> {email}</p>
      <p className="text-sm text-gray-600 mb-1"><strong>Phone:</strong> {phone}</p>
      <p className="text-sm text-gray-600 mb-1"><strong>Website:</strong> {website}</p>
      <p className="text-sm text-gray-600 mb-1"><strong>Company:</strong> {company.name}</p>
      <p className="text-sm text-gray-600"><strong>Address:</strong> {address.street}, {address.city}</p>
    </div>
  );
};

export default UserCard;
