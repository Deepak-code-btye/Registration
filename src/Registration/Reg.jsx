import React, { useState } from 'react'

const Reg = () => {
    const [fillData, setFillData] = useState({
        fullName: "",
        email: "",
        phone: "",
        password: ""
    })

    const [storeData, setStoreData] = useState([]);
    const handle = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFillData({ ...fillData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecord = { ...fillData, id: new Date().getDate().toString() }
        // console.log(newRecord);
        setStoreData([...storeData, newRecord]);
        console.log(storeData);
        setFillData({ fullName: "", email: "", phone: "", password: "" })

    }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Registration form </h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">FullName</label>
                                <input type="text" autoComplete="off" required="" name="fullName"
                                    onChange={handle} value={fillData.fullName}
                                    className="form-control" i
                                    placeholder="Enter full Name" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email</label>
                                <input type="email" autoComplete="off" required="" name="email"
                                    onChange={handle} value={fillData.email}
                                    className="form-control"
                                    placeholder="Enter your email id" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Phone</label>
                                <input type="text" autoComplete="off" required="" name="phone"
                                    onChange={handle} value={fillData.phone}
                                    className="form-control"
                                    placeholder="Enter your Phono No." />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Password</label>
                                <input type="password" autoComplete="off" required="" name="password"
                                    onChange={handle} value={fillData.password}
                                    className="form-control"
                                    placeholder="Enter Password " />
                            </div>
                            <div className="mb-3">
                                <button className="btn btn-primary" type="submit">Submit</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

            <div className='p-1'>
                <table className="table">
                    <thead >
                        <tr>
                            <th scope="col">S.NO</th>
                            <th scope="col">Full Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone No.</th>
                            <th scope="col">Password</th>
                        </tr>
                    </thead>
                </table>
                {
                    storeData.map((currElem, id) => {
                        const { fullName, email, phone, password } = currElem;
                        return (
                            <>
                                <div className="mb-3">
                                    <table className="table">
                                        <tbody key={id}>
                                            <tr>
                                                <th scope="row">{id + 1}</th>
                                                <td>{fullName}</td>
                                                <td>{email}</td>
                                                <td>{phone}</td>
                                                <td>{password}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>


                            </>
                        )
                    })
                }

            </div>


        </>
    )
}

export default Reg;
