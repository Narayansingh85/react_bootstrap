import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Form, Container,} from "react-bootstrap"


function FormComponent({ addUser, user, setUser }) {

    const handleChange = (e) => {
        const { name, value } = e.target;
        const val = value.toLowerCase()
        setUser({ ...user, [name]: val })
        
    }

    // Function to submit a form

    const handleSubmit = (e) => {
        e.preventDefault()
        addUser(user)
    }

    

    return (
        <div>
            <Container className="formP">
                <Form className="form" method="POST" onSubmit={handleSubmit}>
                    <Form.Group className="form-group"  >
                        <Form.Floating className="form-floating mb-3">
                            <Form.Control type="text" className="form-control" id="floatingName" name='fname' value={user.fname}
                                placeholder="Name" onChange={handleChange} />
                            <Form.Label htmlFor="floatingInput">Name</Form.Label>

                        </Form.Floating>
                        <Form.Floating className="form-floating mb-3">
                            <Form.Control type="text" className="form-control" id="floatingSir" name='lname' value={user.lname}
                                placeholder="name@example.com" onChange={handleChange} />
                            <Form.Label htmlFor="floatingInput">Sir name</Form.Label>
                        </Form.Floating>

                        <Form.Floating className="form-floating mb-3">
                            <Form.Control type="email" className="form-control" id="floatingEmail" name='email' value={user.email}
                                placeholder="Email" onChange={handleChange} />
                            <Form.Label htmlFor="floatingPassword">Email address</Form.Label>
                        </Form.Floating>


                        <Form.Floating className="form-floating mb-3">
                            <Form.Control type="text" className="form-control" id="floatinPassion" name='quali' value={user.quali}
                                placeholder="name@example.com" onChange={handleChange} />
                            <Form.Label htmlFor="floatingInput">Qualification</Form.Label>
                        </Form.Floating>

                        <Form.Floating className="form-floating mb-3">
                            <Form.Control type="password" className="form-control" id="floatingPassword" name='password' value={user.password}
                                placeholder="Password" onChange={handleChange} />
                            <Form.Label htmlFor="floatingPassword">Password</Form.Label>
                        </Form.Floating>

                    </Form.Group>
                    <Button className="btn btn-secondary ms-10 bg-light text-black" type="submit"  >Register</Button>
                </Form>

            </Container>

        </div>
    )
}

export default FormComponent
