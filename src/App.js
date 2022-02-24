import React, {useState} from 'react';
import UserTable from './components/UserTable';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/AddUserForm';
import { v4 as uuidv4 } from 'uuid';

function App() {

  //Generates a random id
  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ]

  //state
  const [users, setUsers] = useState(usersData)

  //Add users
  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }

  //Delete users
  const deleteUser = (id) => {
    //console.log(id)

    const arrayFiltrado = users.filter(user => user.id !== id);

    setUsers(arrayFiltrado);
  }

  //Edit users
  const [editing, setEditing] = useState(false);

  return (
    <div className='container'>
     <h1>CRUD App with hooks</h1>
     <div className='flex-row'>
       <div className='flex-large'>

         {
           editing ? (
             <div>
              <h2>Edit user</h2>
              <EditUserForm />
            </div>
           ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
           )
         }
       </div>
       <div className='flex-large'>
         <h2>View users</h2>
         <UserTable 
         users={users} 
         deleteUser={deleteUser} 
         setEditing={setEditing} 
         />
       </div>
     </div>
    </div>
  );
}

export default App;
