import React from 'react';

interface IUser {
  name: string;
  email?: string;
}

interface Props {
  user: IUser;
}

const User: React.FC<Props> = ({ user }) => {
  return (
    <div>
      <strong>Nome: </strong> {user.name} <br />
      <strong>E-mail: </strong> {user.email || 'Não possui e-mail'} <br /><br />
    </div>
  );
};

export default User;
