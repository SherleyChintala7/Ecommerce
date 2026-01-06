import axios from "axios"
import { useCallback, useEffect, useMemo, useState } from "react"

export const UserList = () => {

    let [users, setUsers] = useState([])
    let [search, setSearch] = useState("")
    let [name, setName] = useState("")
    let [email, setEmail] = useState("")

    useEffect(() => {
        async function dataApi() {
            let { data } = await axios.get("https://dummyjson.com/users")
            console.log(data.users)
            setUsers(data.users)
        }
        dataApi()
    }, [])

    // Filter
    let filterData = useMemo(() => {
        return users.filter(person => person.firstName.toLowerCase().includes(search.toLowerCase())
        )
    }, [users, search])

    // Search
    let handleData = useCallback((e) => {
        setSearch(e.target.value)
    }, [])

    // edit
    let edit = useCallback((user) => {
        setName(user.firstName)
        setEmail(user.email)
        setEditId(user.id)
    })

    // Delete
    let DeleteUser = useCallback(async (user) => {
        await axios.delete(`https://dummyjson.com/users/${user.id}`)
        setUsers(prev => prev.filter(person => person.id != user.id))

    }, [])

    //update

    let [editId, setEditId] = useState(null)

    let updateUser = useCallback(async () => {
        if (!editId) return;

        let updated = { firstName: name, email: email };

        // API call
        let { data } = await axios.put(`https://dummyjson.com/users/${editId}`, updated);

            // Update UI list
            setUsers(prev =>
                prev.map(person =>
                    person.id === editId ? { ...person, firstName: name, email: email } : person
                )
            );

        alert("User updated!");
    }, [editId, name, email]);








    return (
        <>
            <div className="container">
                <div className="row ">
                    <div className="col-5">
                        <input type="text" className="form-control my-5" onChange={handleData} placeholder="Search Users" />
                    </div>
                </div>

                <div className="row text-center">
                    <table className="table table-light table-hover">
                        <thead>
                            <tr className="table-dark">
                                <th>S.NO</th>
                                <th>FirstName</th>
                                <th>gender</th>
                                <th>Email</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filterData.map(person =>
                                    <tr key={person.id}>
                                        <td>{person.id}</td>
                                        <td>{person.firstName}</td>
                                        <td>{person.gender}</td>
                                        <td>{person.email}</td>
                                        <td><button className="btn btn-primary"
                                            type="button"
                                            data-bs-toggle="offcanvas"
                                            data-bs-target="#offcanvasScrolling"
                                            aria-controls="offcanvasScrolling" onClick={() => edit(person)}
                                        >Edit</button>
                                            <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">

                                                <div className="row text-center justify-content-center">
                                                    <div className="offcanvas-header">
                                                        <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Edit the User Details</h5>
                                                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                                    </div>

                                                    <div className="offcanvas-body">
                                                        <div className="col-10">
                                                            <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control " />
                                                        </div>
                                                        <br />

                                                        <div className="col-10 text-center">
                                                            <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" />
                                                        </div>
                                                        <br /><br />
                                                        <div>
                                                            <button className="btn btn-success" onClick={updateUser}>
                                                                Update
                                                            </button>
                                                            <form action=""></form>
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger"
                                                onClick={() => DeleteUser(person)}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>

                                )
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </>
    )
}

