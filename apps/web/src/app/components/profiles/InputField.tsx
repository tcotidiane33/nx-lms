import "./InputField.css";

export function InputField({ 
    label, 
    defaultValue, 
    type, 
    variant = 'default',
    readOnly = false
  }: { 
    label: string; 
    defaultValue: string; 
    type: string;
    variant?: 'default' | 'cyber';
    readOnly?: boolean;
  }) {
    return (
      <div className={`info-group ${variant}`}>
        <label>{label}</label>
        <div className="input-container">
          <input 
            type={type} 
            defaultValue={defaultValue} 
            className="cyber-input" 
            readOnly={readOnly}
          />
          <div className="input-decoration"></div>
        </div>
      </div>
    );
  }