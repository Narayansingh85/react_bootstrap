import React from 'react'
import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import BannerComponent from "../components/BannerComponent"
import NavbarComponent from "../components/NavbarComponent"
import CardComponent from "../components/CardComponent"
import '../../src/app.css'
function HomeScreen() {

    const [users, setUsers] = useState([])
    const [search1, setSearch1] = useState("")

    useEffect(() => {
        const getUser = async () => {
            const users1 = await fetchUsers()
            setUsers(users1)
        }
        getUser()

    }, [])

    //Fetch Users
    const fetchUsers = async () => {
        const res = await fetch("http://localhost:4000/",{mode:'cors'})
        const data = await res.json()
        return data
    }

    return (
        <div>
            <BannerComponent />
            <NavbarComponent setSearch1={setSearch1}  />
            <Container className="cards row card-group">
                {
                    users.filter((user) => {
                        if (search1 === "" ) {
                            return user
                        }
                        else if(user.fname.includes(search1)){
                            return user
                        }
                        
                    }).map((user) => (
                        (<CardComponent name={user.name || user.fname} desc={user.quali} key={user._id} />)
                    ))
                }
            </Container>
        </div>
    )
}

export default HomeScreen


