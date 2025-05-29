import React from 'react';
import { useParams } from 'react-router-dom';

export default function CourseDetail() {
  const { id } = useParams();
  // Ici tu peux fetch les infos du cours avec l'id
  return (
    <div style={{ maxWidth: 700, margin: 'auto', padding: 24 }}>
      <h1>Détail du cours {id}</h1>
      {/* Affiche ici le contenu du cours, la liste des chapitres, etc. */}
    </div>
  );
}
