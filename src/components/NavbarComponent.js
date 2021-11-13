import React from 'react'
import { Navbar } from 'react-bootstrap'
import SearchComponent from './SearchComponent'
function NavbarComponent({ setSearch1, disable }) {
  return (
    <div>

      <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary">
        <SearchComponent text={"Name"} plc={`Name`} setSearch1={setSearch1}  />
      </Navbar>

    </div>
  )
}

export default NavbarComponent
