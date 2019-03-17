const users = [
    {name: 'John', birthday: '1999-2-12'},
    {name: 'Bill', birthday: '1999-1-19'},
    {name: 'Carol', birthday: '1999-0-11'},
    {name: 'Luce', birthday: '1999-2-22'}
];

function filterUsersByMonth(users, month) {
    for (let i = 0; i < users.length; i++) {

        let userMonth = users[i].birthday.split('-')[1];

        if (userMonth == month) {
            return users[i];
        }
    }
}
console.log(filterUsersByMonth(users, 0));


// [{ name: 'Carol', birthday: '1999-0-11' }]

//this work in console but not work in
// let result = users.filter(user => user.birthday.split('-')[1] == month);
// return result;
