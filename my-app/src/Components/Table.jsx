import { Table } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';



// import { db, auth } from '../FirebaseConfig/config';

// import { getAuth } from 'firebase/auth';

function TableDashboard() {
    // Unfortunately, I didn’t figure it out, 
    // I tried realtime database and auth-admin. 
    //The problem is insufficient understanding of the js language

    // const listAllUsers = (nextPageToken) => {
    //     // List batch of users, 1000 at a time.
    //     getAuth()
    //       .listUsers(4, nextPageToken)
    //       .then((listUsersResult) => {
    //         listUsersResult.users.forEach((userRecord) => {
    //           console.log('user', userRecord.toJSON());
    //         });
    //         if (listUsersResult.pageToken) {
    //           // List next batch of users.
    //           listAllUsers(listUsersResult.pageToken);
    //         }
    //       })
    //       .catch((error) => {
    //         console.log('Error listing users:', error);
    //       });
    //   };
    //   // Start listing users from the beginning, 1000 at a time.
    //   listAllUsers();
    return(
        
    // table in progress...
    <Table striped bordered hover>
        <thead>
            <tr>
            <th>#</th>
            <th>Name</th>
            <th>E-mail</th>
            <th>Registeration date</th>
            <th>Last login date</th>
            <th >Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
                <tr>
                <td>3</td>
                <td>Larry the Bird</td>
                <td>@twitter</td>
            </tr>
        </tbody>
        
    </Table>
    );
}

export default TableDashboard;