import React, { useState } from 'react';

export default function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ email: '', password: '', name: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const endpoint = isLogin ? 'login' : 'register';
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:3333/api'}/auth/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.access_token) {
        localStorage.setItem('token', data.access_token);
        window.location.href = '/dashboard';
      } else {
        setError(data.message || 'Erreur');
      }
    } catch (err) {
      setError('Erreur réseau');
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: 350, margin: 'auto', marginTop: 80, padding: 24, borderRadius: 8, boxShadow: '0 2px 8px #0001', background: '#fff' }}>
      <h2 style={{ textAlign: 'center' }}>{isLogin ? 'Connexion' : 'Créer un compte'}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            name="name"
            placeholder="Nom"
            value={form.name}
            onChange={handleChange}
            style={{ width: '100%', marginBottom: 12, padding: 8 }}
            required
          />
        )}
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={{ width: '100%', marginBottom: 12, padding: 8 }}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Mot de passe"
          value={form.password}
          onChange={handleChange}
          style={{ width: '100%', marginBottom: 12, padding: 8 }}
          required
        />
        <button
          type="submit"
          style={{ width: '100%', padding: 10, background: '#0070f3', color: '#fff', border: 'none', borderRadius: 4 }}
          disabled={loading}
        >
          {loading ? 'Chargement...' : isLogin ? 'Connexion' : 'Créer un compte'}
        </button>
      </form>
      <button
        onClick={() => setIsLogin(!isLogin)}
        style={{ marginTop: 16, width: '100%', background: 'none', border: 'none', color: '#0070f3', cursor: 'pointer' }}
      >
        {isLogin ? 'Créer un compte' : 'Déjà inscrit ? Connexion'}
      </button>
      {error && <div style={{ color: 'red', marginTop: 12 }}>{error}</div>}
    </div>
  );
}
