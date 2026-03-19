// Advanced APIs

// Pick

// Pick allows you to create a new type by selecting a set of properties
// [keys] from an existing type {Type}

// Image you have a User model with several properties, but for a user profile display, you only 
// need a subset of these properties

interface User {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
    age: number;
}

// For a profile display, only pick 'name' & 'email'

type UserProfile = Pick<User, 'name' | 'email'>;

const displayUserProfile = (user: UserProfile) => {
    console.log(`Name: ${user.name}, Email: ${user.email}`);
}

type UpdateProps = Pick<User, 'name' | 'age' | 'email'>;

function updateUser(updatedProps: UpdateProps) {
    // hit the database to update the user
}

// Partial

// Partial makes all properties of a type optional, creating a type with
// same properties, but each marked as optional

// in the above UpdateProps have all 3 requires, i.e name, age, email

// so can keep that optional - all 3 are marked optional, i.e we can just give 1 or 2 or 3

type UpdatePropsOptional = Partial<UpdateProps>;


// Readonly

// When you have a configuration object that should not be altered
// after initialization, making it Readonly ensures it properties
// cannot be changed

type Employee = {
    readonly name: string;
    readonly age: number;
}

// now you cannnot change the properties coz they are READ-ONLY

const user: Employee = {
    name: "John",
    age: 21
}

// user.age = 78
// for the above we get this error
// Cannot assign to 'age' because it is a read-only property.


// Record and Map

// Record let's you give a cleaner type to objects
// cleaner way to deal with objects

type Userx = {
    id: string;
    username: string;
}

type Users = {
    [key: string]: Userx;
}

const users: Users = {
    "ras@df": {
        id: '1',
        username: "vermax"
    },
    "rask34": {
        id:'2',
        username: "vermiathor"
    }
}