import React from 'react';
import ReactDOM from 'react-dom/client';
import './normalize.css';
import './index.css';
import App from './App';
import { Home } from "./Home";
import { Resume } from "./Resume";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const projects = [
  {
      "category": "Academic Projects",
      "description": "In my User Experience Design class, I created an app through the course of the semester, utilizing paper and digital prototypes. I tested my designs with users to ensure it follows their expectations and modified it as needed. One important change I made was the navigation system. Instead of using a hamburger menu and a single 'add' button, I found it was easier for my users to have a bottom navigation bar and a back button instead.",
      "id": 1,
      "name": "User Experience Design"
  },
  {
      "category": "Academic Projects",
      "description": "My Software Architecture course integrated C# programming, client-side web development skills, and database connections to create dynamic websites. As part of this class, I worked with a group of three other students to create a project over the semester. Our chosen project allows users to view events near them that orgranizers have added, as well as to register and pay for attending those events.",
      "id": 2,
      "name": "Software Architecture"
  },
  {
      "category": "Academic Projects",
      "description": "In this two-part course, I combined my knowledge of HTML, CSS, and JavaScript with learning on Node.js and its server-side technology to create projects like this portfolio website that utilize databases, routing, and hosting.",
      "id": 3,
      "name": "Client-Side Web Development"
  },
  {
      "category": "Academic Projects",
      "description": "My cumulative project in this program was a capstone project where, in collaboration with three other students, two teachers, and a project manager, we created an inventory management system complete with a mobile app, website, and API to access the database. We utilized .NET and MAUI technology, as well as several external APIs to build this system.",
      "id": 4,
      "name": "Application Development Capstone Project"
  },
  {
      "category": "Extracurricular Projects",
      "description": "To help grow my mask-selling business, I created a simple e-commerce website that utilizes the computer's local storage to create an order and submit it, notifying me via email.",
      "id": 5,
      "name": "Masks By Claire"
  },
  {
      "category": "Extracurricular Projects",
      "description": "Using Google's scripting app, I created a program to organize my school files based on its name and sorting it by school year, subject, and unit.",
      "id": 6,
      "name": "Google Drive Organizer"
  }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<Home />} />
        <Route path="resume" element={<Resume />} />
        <Route path="projects" element={<Projects projects={projects} />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);