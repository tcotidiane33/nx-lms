export function breadcrumbHelper() {
  function translate(item: string): string {
    switch (item) {
      case 'courses':
        return 'Cours';
      case 'contact':
        return 'Contact';
      case 'login':
        return 'Connexion';
      case 'signup':
        return 'Inscription';
      default:
        return item;
        break;
    }
  }

  return {
    translate,
  };
}
