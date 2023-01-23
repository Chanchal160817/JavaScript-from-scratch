// CallBack Hell:-
// API
// query :- 
// 1. Fetch student roll no after 2 sec
// 2. When roll no found pick one roll no after 2s.
// 3. Roll no pic then find student name ,age , gender.

// how can we prevent oour api by callback hell
// Using Promise .

const getRollNo = () => {
    setTimeout(() => {
        console.log('API Getting Roll No');
        let roll_no = [1, 2, 3, 4, 5]
        console.log(roll_no);
        setTimeout((rollno) => {
            const biodata = {
                name: 'chanchal',
                age: 22,
            }
            console.log(`My roll no is ${rollno}. My name is ${biodata.name} and I am ${biodata.age} Years old. `);

            setTimeout(() => {
                biodata.gender = 'female'
                console.log(`my gender is ${biodata.gender}`);
            }, 2000, biodata.name)
        }, 2000, roll_no[1])
    }, 2000)
}

getRollNo()
