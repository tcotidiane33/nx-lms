import "./ThemeSelector.css"

export function ThemeSelector({ 
    themes, 
    variant = 'default'
  }: { 
    themes: Array<{ name: string; value: string; color?: string }>;
    variant?: 'default' | 'holographic';
  }) {
    return (
      <div className={`theme-selector ${variant}`}>
        {themes.map(theme => (
          <button 
            key={theme.value} 
            className="theme-option" 
            data-theme={theme.value}
            style={variant === 'holographic' ? { '--theme-color': theme.color } as React.CSSProperties : {}}
          >
            <span className={`theme-preview ${theme.value}`}></span>
            <span>{theme.name}</span>
          </button>
        ))}
      </div>
    );
  }