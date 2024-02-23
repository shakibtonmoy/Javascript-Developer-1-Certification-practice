// Module: Given a block of code, analyze the variable scope and the execution flow.

const data = { 
    user: { 
        name: 'Jim Stokes', 
        updated: '2020-07-25' 
    } 
};
const fetchUser = (data) => {
    console.log(data.user.name);
    const user = data.user ? data.user.name : null;
    return user;
}
console.log('starting the process');
setTimeout(()=> {
    console.log('updating user role');
    // updateRole();
}, 1000);
setTimeout(()=> {
    console.log('updating user profile');
    // updateProfile();
}, 0);
console.log(`updated user: ${fetchUser(data)}`);
console.log('process complete');

//Output
//starting the process
//Jim Stokes
//updated user: Jim Stokes
//process complete
//updating user profile
//updating user role