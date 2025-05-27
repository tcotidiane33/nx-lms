/* eslint-disable max-len */
import type { ReactElement } from 'react';
import './course-description.scss';

export function CourseDescription():ReactElement {
  return (
    <div className="course-description box">
      <h3>Description</h3>
      <p>Le contenu de la description du cours sera affiché ici. Ce texte est un exemple de texte de remplissage utilisé pour illustrer la mise en page et le formatage. Le contenu réel sera ajouté ultérieurement.</p>
      <h4>À qui s'adresse ce cours ?</h4>
      <p>Ce cours est conçu pour les personnes intéressées par [sujet du cours]. Il convient aux débutants ainsi qu'à ceux qui souhaitent approfondir leurs connaissances. Aucune connaissance préalable n'est requise, bien que [prérequis optionnel] puisse être utile.</p>
      <h4>Pourquoi devriez-vous suivre ce cours ?</h4>
      <p>En suivant ce cours, vous acquerrez les compétences nécessaires pour [liste des bénéfices]. Vous apprendrez à [compétence 1], [compétence 2], et [compétence 3]. Ce cours vous aidera à atteindre vos objectifs professionnels ou personnels dans le domaine de [domaine].</p>
    </div>

  );
}
