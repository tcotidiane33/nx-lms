import React, { useState } from 'react';
import { useAnimatedCounter } from '../lib/hooks/useAnimatedCounter';

export default function StatsSection() {
  const [users, setUsers] = useState(0);
  const [courses, setCourses] = useState(0);
  const [completion, setCompletion] = useState(0);

  useAnimatedCounter(12500, setUsers, 100);
  useAnimatedCounter(320, setCourses, 100);
  useAnimatedCounter(98, setCompletion, 100);

  return (
    <section className="stats-container">
      <div className="stat-card" id="users-stat">
        <h3>Apprenants actifs</h3>
        <div className="counter">{users}</div>
      </div>
      <div className="stat-card" id="courses-stat">
        <h3>Cours disponibles</h3>
        <div className="counter">{courses}</div>
      </div>
      <div className="stat-card" id="completion-stat">
        <h3>Taux de réussite</h3>
        <div className="counter">{completion}</div><span>%</span>
      </div>
    </section>
  );
}
