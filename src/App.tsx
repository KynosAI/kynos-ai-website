import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { News } from './pages/News';
import { Careers } from './pages/Careers';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { BlogPostWildRide } from './pages/BlogPostWildRide';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/ai-unleashed" element={<BlogPost />} />
          <Route path="/blog/ai-wild-ride" element={<BlogPostWildRide />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;