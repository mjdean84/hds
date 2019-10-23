var employeesArr = [];

class Employee {
    constructor(id, lName, fName, mInit, branchID, position, salary, address, city, state, zip, phone, email) {
        this.id = id;
        this.lName = lName;
        this.fName = fName;
        this.mInit = mInit;
        this.branchID = branchID;
        this.position = position;
        this.salary = salary;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phone = phone;
        this.email = email;
    }
}

function createEmployees() {
    employeesArr.push(
        new Employee(111111, 'Herold', 'Joe', 'J', 1, 'President and CEO', 1000000, '123 Broad St', 'Phoenix', 'AZ',
            85001, '123-456-7890', 'jherold@hds.com'),
        new Employee(111112, 'Herold', 'Emily', 'E', 1, 'Vice President and CFO', 2000000, '123 Broad St', 'Phoenix',
            'AZ', 85001, '123-456-7890', 'eherold@hds.com'),
        new Employee(123456, 'Doe', 'John', 'Q', 2, 'Sales Rep', 65000, '789 South St', 'Scottsdale', 'AZ', 85250,
            '123-456-7890', 'jdoe@hds.com'),
        new Employee(123457, 'Jane', 'Doe', 'F', 3, 'Branch Manager', 85000, '111 Orange Ave', 'Tucson', 'AZ', 85756,
            '123-456-7890', 'jfdoe@hds.com'),
        new Employee(225544, 'Dangerously', 'Johnny', 'B', 4, 'Sales Rep', 500000, '55 Green Blvd', 'Las Vegas', 'NV',
            89102, '123-456-7890', 'jdangerously.hds.com'),
        new Employee(234567, 'Smith', 'Michael', 'M', 3, 'Assistant Branch Manager', 50000, '798 One Way Dr', 'Tucson',
            'AZ', 85756, '123-456-7890', 'msmith@hds.com'),
        new Employee(654321, 'Feltson', 'Eddie', 'F', 5, 'HR Manager', 35000, '8546 Harmony Way', 'Albuquerque', 'NM',
            87105, '123-456-7890', 'efeltson@hds.com'),
        new Employee(666555, 'Krelborn', 'Seymour', 'A', 4, 'Assistant Branch Manager', 50000, '9955 Elm St', 'Las Vegas',
            'NV', 89102, '123-456-7890', 'skrelborn@hds.com'),
        new Employee(778899, 'Vega', 'Vincent', 'L', 5, 'Accountant', 75000, '654 Seminole Circle', 'Albuquerque', 'NM',
            87105, '123-456-7890', 'vvega@hds.com'),
        new Employee(789456, 'Kimble', 'Rod', 'R', 1, 'Branch Manager', 85000, '621 Riverside Rd', 'Phoenix', 'AZ', 85003,
            '123-456-7890', 'rkimble@hds.com')
    )
    displayEmployees(employeesArr);
}

function displayEmployees(arr) {
    $('#employeesBody').empty();
    for (let i = 0; i < arr.length; i++) {
        $('#employeesBody').append('<tr><td>' + arr[i].id + '</td><td>' + arr[i].lName + '</td><td>' + arr[i].fName + '</td><td>' + arr[i].mInit + '</td><td>' + arr[i].branchID + '</td><td>' + arr[i].position + '</td><td>' + convUSD.format(arr[i].salary) + '</td><td>' + arr[i].address + '</td><td>' + arr[i].city + '</td><td>' + arr[i].state + '</td><td>' + arr[i].zip + '</td><td>' + arr[i].phone + '</td><td>' + arr[i].email + '</td></tr>');
    }
}