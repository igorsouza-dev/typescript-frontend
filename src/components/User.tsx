import React from 'react';
interface IUser {
  name: string;
  email: string;
}
interface IProps {
  user: IUser
}
const User: React.FC<IProps> = ({ user }) => {
  return (
    <div>
      <strong>Name: {user.name}</strong> <br/>
      <strong>E-mail: {user.email}</strong> <br/>
    </div>
  );
}
export default User;