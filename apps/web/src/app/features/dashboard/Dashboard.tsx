import React from 'react';

const courses = [
  {
    id: 1,
    title: 'React de zéro à pro',
    progress: 60,
    teacher: 'Jane Doe',
    thumbnail: 'https://source.unsplash.com/400x200/?react,code',
  },
  {
    id: 2,
    title: 'NestJS pour les débutants',
    progress: 20,
    teacher: 'John Smith',
    thumbnail: 'https://source.unsplash.com/400x200/?nestjs,backend',
  },
];

export default function Dashboard() {
  return (
    <div style={{ maxWidth: 900, margin: 'auto', padding: 24 }}>
      <h1 style={{ marginBottom: 32 }}>Mon espace étudiant</h1>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        {courses.map(course => (
          <div key={course.id} style={{
            width: 280,
            borderRadius: 8,
            boxShadow: '0 2px 8px #0001',
            background: '#fff',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <img src={course.thumbnail} alt={course.title} style={{ width: '100%', height: 120, objectFit: 'cover' }} />
            <div style={{ padding: 16, flex: 1 }}>
              <h3 style={{ margin: 0 }}>{course.title}</h3>
              <div style={{ color: '#888', fontSize: 14, marginBottom: 8 }}>par {course.teacher}</div>
              <div style={{ background: '#eee', borderRadius: 4, height: 8, marginBottom: 8 }}>
                <div style={{
                  width: `${course.progress}%`,
                  background: '#0070f3',
                  height: '100%',
                  borderRadius: 4
                }} />
              </div>
              <div style={{ fontSize: 13 }}>{course.progress}% complété</div>
            </div>
            <button style={{
              border: 'none',
              background: '#0070f3',
              color: '#fff',
              padding: 10,
              borderRadius: '0 0 8px 8px',
              cursor: 'pointer'
            }}>
              Continuer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
