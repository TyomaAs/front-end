import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/style.css";

import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Login from "./pages/login.jsx";
import Admin from "./pages/admin.jsx";
import Profile from "./pages/profile.jsx";
import Register from "./pages/register.jsx";
import NotFound from "./pages/not-found.jsx";
import CoursePage from "./pages/course/show.jsx";
import LessonPage from "./pages/lesson/show.jsx";
import CourseEdit from "./pages/course/edit.jsx";
import CourseIndex from "./pages/course/index.jsx";
import GamePage from "./pages/lesson/run/game.jsx";
import CreateCoursePage from "./pages/course/create.jsx";
import LecturePage from "./pages/lesson/run/lecture.jsx";
import LessonPageEdit from "./pages/lesson/edit/main.jsx";
import CreateLessonPage from "./pages/lesson/create/main.jsx";

import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";

import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app-container">
          <Header />
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/register" element={<Register />} />

              <Route path="/course" element={<CourseIndex />} />
              <Route path="/course/:id" element={<CoursePage />} />
              <Route path="/course/:id/edit" element={<CourseEdit />} />
              <Route path="/course/create" element={<CreateCoursePage />} />
              <Route
                path="/course/:id/lesson/:lessonId"
                element={<LessonPage />}
              />
              <Route
                path="/course/:id/lesson/create"
                element={<CreateLessonPage />}
              />
              <Route
                path="/course/:id/lesson/:lessonId/edit"
                element={<LessonPageEdit />}
              />
              <Route
                path="/course/:id/lesson/:lessonId/game"
                element={<GamePage />}
              />
              <Route
                path="/course/:id/lesson/:lessonId/lecture"
                element={<LecturePage />}
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
