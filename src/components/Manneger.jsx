import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

const Manneger = () => {
    const ref = useRef()
    const passwordref = useRef()
    const [form, setform] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setpasswordArray] = useState([])

    useEffect(() => {
        let password = localStorage.getItem("password")
        if (password) {
            setpasswordArray(JSON.parse(password))
        }

    }, [])

    const copytext = (text) => {
        <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
        />
        navigator.clipboard.writeText(text)
    }

    const showpassword = (params) => {
        passwordref.current.type = "text"
        console.log(ref.current.src)
        if (ref.current.src.includes("icon/eye.png")) {
            ref.current.src = "icon/open-eye.png"
            passwordref.current.type = "password"
        }

        else {
            ref.current.src = "icon/eye.png"
            passwordref.current.type = "text"
        }
    }

    const savepassword = () => {
        if (
            form.site.length > 3 &&
            form.username.length > 3 &&
            form.password.length > 3
        ) {
            const newPassword = {
                ...form,
                id: uuidv4()
            }

            const updatedPasswords = [
                ...passwordArray,
                newPassword
            ]

            setpasswordArray(updatedPasswords)

            localStorage.setItem(
                "password",
                JSON.stringify(updatedPasswords)
            )

            setform({
                site: "",
                username: "",
                password: ""
            })

            toast.success("Password Saved!", {
                position: "bottom-right",
                autoClose: 3000,
                theme: "light",
                transition: Bounce
            })
        } else {
            toast.error(
                "Please fill site, username and password",
                {
                    position: "bottom-right",
                    autoClose: 3000,
                    theme: "light",
                    transition: Bounce
                }
            )
        }
    }
    const deletepassword = (id) => {
        // console.log("deleting password", id)
        let c = confirm("Domyou really want to delete this passwordm ?")
        if (c) {
            setpasswordArray(passwordArray.filter(item => item.id !== id))

            localStorage.setItem("password", JSON.stringify(passwordArray.filter(item => item.id !== id)))
        }
        //     console.log([...passwordArray, form])
        toast.error(
                "password deleted!",
                {
                    position: "bottom-right",
                    autoClose: 3000,
                    theme: "light",
                    transition: Bounce
                }
            )
    }
    const editpassword = (id) => {
        // console.log("editing password", id)
        setform(passwordArray.filter(i => i.id === id)[0])
        setpasswordArray(passwordArray.filter(item => item.id !== id))
        //     localStorage.setItem("password", JSON.stringify([...passwordArray, form]))
        //     console.log([...passwordArray, form])

    }

    const handalchange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }



    return (
        <>
            {/* <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="Bounce"
            /> */}
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                theme="light"
                transition={Bounce}
            />

            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>

            <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
                <h1 className=' text-4xl font-bold text-center '>
                    <span className=' text-green-700'> &lt;</span>
                    <span>Pass</span>
                    <span className=' text-green-700'>Box/&gt;</span>
                </h1>
                <p className=' text-green-700 text-lg text-center'>Your own password manager</p>

                <div className='text-black flex flex-col p-4 gap-6 items-center '>

                    <input value={form.site} onChange={handalchange} placeholder='Enter Your Website Name' className=' rounded-full border border-green-700 w-full p-4 py-1' type="text" name="site" id="" />

                    <div className='flex flex-col md:flex-row w-full gap-8 justify-between'>
                        <input value={form.username} onChange={handalchange} placeholder='Enter user name' className=' rounded-full border border-green-700 w-full p-4 py-1' type="text" name="username" id="" />

                        <div className="relative">
                            <input ref={passwordref} value={form.password} onChange={handalchange} placeholder='Enter password' className=' rounded-full border border-green-700 w-full p-4 py-1' type="password" name="password" id="" />
                            <span className=' absolute right-0 top-0 cursor-pointer  ' onClick={showpassword} >
                                <img ref={ref} className=' p-2' width={35} src="/icon/open-eye.png" alt="" />
                            </span>
                        </div>

                    </div>
                    <button onClick={savepassword} className='flex justify-center items-center bg-green-600 hover:bg-green-500 rounded-full px-2 w-fit  '>
                        <lord-icon
                            src="https://cdn.lordicon.com/vjgknpfx.json"
                            trigger="hover"
                            stroke="bold"
                            colors="primary:#121331,secondary:#ffffff">
                        </lord-icon>
                        Save</button>


                </div>
                <div className="password">
                    <h2 className=' font-bold text-2xl py-4'>your password</h2>
                    {passwordArray.length === 0 && <div>no password to show</div>}
                    {passwordArray.length != 0 &&
                        <table className="table-auto w-full rounded-md overflow-hidden">
                            <thead className=' bg-green-800 text-white'>
                                <tr>
                                    <th>Site</th>
                                    <th>Username</th>
                                    <th>Password</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody className=' bg-green-100'>
                                {passwordArray.map((item, index) => {
                                    return <tr key={index}>
                                        <td className=' text-center w-32'>
                                            <div className=' flex items-center justify-center '>
                                                <a href={item.site} target='_blank'> {item.site}</a>
                                                <div className=' cursor-pointer ' onClick={() => { copytext(item.site) }}>
                                                    <lord-icon
                                                        style={{ "width": "25px", "height": "25px", "PddingTop": "3px", "PaddingLeft": "3px" }}
                                                        // src="https://cdn.lordicon.com/vjgknpfx.json"
                                                        trigger="hover"
                                                        stroke="bold"
                                                        colors="primary:#121331,secondary:">
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>

                                        <td className=' flex items-center justify-center text-center '>
                                            <span> {item.username} </span>

                                            <div className=' cursor-pointer ' onClick={() => { copytext(item.username) }}>
                                                <lord-icon
                                                    style={{ "width": "25px", "height": "25px", "PaddingTop": "3px", "PaddingLeft": "3px" }}
                                                    // src="https://cdn.lordicon.com/vjgknpfx.json"
                                                    trigger="hover"
                                                    stroke="bold"
                                                    colors="primary:#121331,secondary:">
                                                </lord-icon>
                                            </div>

                                        </td>
                                        <td className=' text-center '>
                                            <div className='flex items-center justify-center'>
                                                <span> {"•".repeat(item.password.length)} </span>

                                                <div className=' cursor-pointer ' onClick={() => { copytext(item.password) }}>
                                                    <lord-icon
                                                        style={{ "width": "25px", "height": "25px", "PaddingTop": "3px", "PaddingLeft": "3px" }}
                                                        // src="https://cdn.lordicon.com/vjgknpfx.json"
                                                        trigger="hover"
                                                        stroke="bold"
                                                        colors="primary:#121331,secondary:">
                                                    </lord-icon>
                                                </div>
                                            </div>
                                        </td>
                                        <td className=' text-center '>
                                            <span className=' cursor-pointer mx-1' onClick={() => { editpassword(item.id) }}><lord-icon
                                                src="https://cdn.lordicon.com/exymduqj.json"
                                                trigger="hover"
                                                colors="primary:#00000,secondary:#000000"
                                                style={{ "width": "25px", "height": "25px" }}>
                                            </lord-icon></span>
                                            <span className=' cursor-pointer mx-1' onClick={() => { deletepassword(item.id) }}><lord-icon
                                                src="https://cdn.lordicon.com/jzinekkv.json"
                                                trigger="hover"
                                                colors="primary:#000000,secondary:#000000"
                                                style={{ "width": "25px", "height": "25px" }}>
                                            </lord-icon></span>
                                        </td>

                                    </tr>
                                })}

                            </tbody>
                        </table>}

                </div>
            </div >
        </>

    )
}

export default Manneger
