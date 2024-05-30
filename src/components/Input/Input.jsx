import "./styles.css";

function Input({ name, placeholder, type = "text", label }) {
  return (
    <div className='input-container'>
      <label className="label">{label}</label>
      <input className = 'input-element' name={name} placeholder={placeholder} type={type} />
    </div>
  );
}

export default Input;
