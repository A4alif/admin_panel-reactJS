export const userColumns = [
    {
        field: "id",
        headerName: "ID",
        width: 70
    },
    {
        field: "user",
        headerName: "User",
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellUserImg">
                    <img className="userImg" src={params.row.img} alt="userimgage" />
                    {params.row.username}
                </div>
            )
        }
    },
    {
        field: "email",
        headerName: "Email",
        width: 230

    },
    {
        field: "age",
        headerName: "Age",
        width: 230
    },
    {
        field: "status",
        headerName: "Status",
        width: 230,
        renderCell: (params) => {
            return (
                <div className={`cellStatus ${params.row.status}`}>
                    {params.row.status}
                </div>
            )
        }
    }
]
export const userRows = [
    {
        id: 1,
        username: "Alif",
        img:"https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "active",
        email: "alif@gmail.com",
        age: 26,
    },
    {
        id: 2,
        username: "Shahim Uddin",
        img:"https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "pending",
        email: "shahim@gmail.com",
        age: 30,
    },
    {
        id: 3,
        username: "Mohaiminul Eraj",
        img:"https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "active",
        email: "eraj@gmail.com",
        age: 28,
    },
    {
        id: 4,
        username: "Farhan Khan",
        img:"https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "active",
        email: "khan@gmail.com",
        age: 30,
    },
    {
        id: 5,
        username: "Zakia Sultana",
        img:"https://images.pexels.com/photos/13349480/pexels-photo-13349480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "pending",
        email: "zakia@gmail.com",
        age: 22,
    },
    {
        id: 6,
        username: "Aslam Ali",
        img:"https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "pending",
        email: "aslam@gmail.com",
        age: 19,
    },
    {
        id: 7,
        username: "Ariful Islam",
        img:"https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "pending",
        email: "ariful@gmail.com",
        age:28,
    },
    {
        id: 8,
        username: "Ahnaf Ahmed",
        img:"https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "active",
        email: "ahnaf@gmail.com",
        age: 24,
    },
    {
        id: 9,
        username: "Jenat Afren",
        img:"https://images.pexels.com/photos/13349480/pexels-photo-13349480.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        status: "active",
        email: "jenat@gmail.com",
        age: 32,
    },
]