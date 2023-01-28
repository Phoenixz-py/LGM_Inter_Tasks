
import React, { useState } from "react";

const Navbar = () => {
  const [user, setUser] = useState(null);

  async function fetchUser() {
    try {
      const response = await fetch("https://reqres.in/api/users?page=1");
      const data = await response.json();
      setUser(data);
    } catch (err) {
      console.error(err);
    }
    
      <div className="clearfix">
        <div className="row">
          {user.map((data) => (
            <div className="col-md-4 animated fadeIn" key={data.id}>
              <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img src={data.avatar} className="card-img-top" alt="" />
                  </div>
                  <h5 className="card-title">
                    {data.first_name + " " + data.last_name}
                  </h5>
                  <p className="card-text">
                    {data.location}
                    <br />
                    <span className="phone">{data.email}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    
  }
  return (
    <div>
      <nav className="navbar bg-body-black-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">React-App LGM Fetch User</a>
          <form className="d-flex" role="search">
            <button
              className="btn btn-outline-success"
              type="submit"
              onClick={fetchUser}
            >
              Get User
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
