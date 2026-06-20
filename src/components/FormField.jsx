const inputBaseClass = "w-full bg-[#0a0a0a] text-white px-5 py-4 rounded-xl border border-gray-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition duration-300";
const labelClass = "block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 ml-1";

const FormField = ({ label, type = "text", placeholder, register, error, rows }) => {
  const isTextarea = type === "textarea";

  return (
    <div>
      <label className={labelClass}>{label}</label>
      {isTextarea ? (
        <textarea
          {...register}
          rows={rows || 4}
          placeholder={placeholder}
          className={`${inputBaseClass} resize-none`}
        />
      ) : (
        <input
          {...register}
          type={type}
          placeholder={placeholder}
          className={inputBaseClass}
        />
      )}
      {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
    </div>
  );
};

export default FormField;
