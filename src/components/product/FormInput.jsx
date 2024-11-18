function FormInput({ label, name, type, defaultValue, size }) {
  return (
    <div className="form-control">
      <label htmlFor="" className="label">
        <span className="labe-text capitalize">{label}</span>
      </label>

      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`input input-bordered ${size}`}
      />
    </div>
  );
}

export default FormInput;
