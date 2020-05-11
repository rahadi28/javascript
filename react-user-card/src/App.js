import React from 'react';
import Faker from 'faker';
import UserCard from './components/UserCard';
import UserDetail from './components/UserDetail';

function App() {
  return (
    <div className="container">
      <UserCard>
        <UserDetail avatar={Faker.image.avatar()} name={Faker.name.findName()} description={Faker.lorem.lines(3)} join={Faker.date.month()} />
        <UserDetail avatar={Faker.image.avatar()} name={Faker.name.findName()} description={Faker.lorem.lines(3)} join={Faker.date.month()} />
        <UserDetail avatar={Faker.image.avatar()} name={Faker.name.findName()} description={Faker.lorem.lines(3)} join={Faker.date.month()} />
        <UserDetail avatar={Faker.image.avatar()} name={Faker.name.findName()} description={Faker.lorem.lines(3)} join={Faker.date.month()} />
        <UserDetail avatar={Faker.image.avatar()} name={Faker.name.findName()} description={Faker.lorem.lines(3)} join={Faker.date.month()} />
        <UserDetail avatar={Faker.image.avatar()} name={Faker.name.findName()} description={Faker.lorem.lines(3)} join={Faker.date.month()} />
        <UserDetail avatar={Faker.image.avatar()} name={Faker.name.findName()} description={Faker.lorem.lines(3)} join={Faker.date.month()} />
        <UserDetail avatar={Faker.image.avatar()} name={Faker.name.findName()} description={Faker.lorem.lines(3)} join={Faker.date.month()} />
        <UserDetail avatar={Faker.image.avatar()} name={Faker.name.findName()} description={Faker.lorem.lines(3)} join={Faker.date.month()} />
      </UserCard>
    </div>
  );
}

export default App;
