import React from 'react'
import { Link } from 'react-router-dom';

const HomeWall = () => {
  return (
    <div>
      <div
        className="hero min-h-screen h-80"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW1wbG95ZWVzfGVufDB8fDB8fHww)",
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Employee Management System
            </h1>
            <p className="mb-5">
              Streamline. Empower. Succeed. Your Workforce, Our Expertise.
              Efficiency in Every Employee. Empowering Success, One Employee
              at a Time. Managing Talent, Maximizing Potential.
            </p>
            <Link to={'/login'} className="btn btn-primary">Get Started</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeWall