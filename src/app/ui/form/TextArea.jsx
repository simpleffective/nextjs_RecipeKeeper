import { textarea } from "@/app/ui/form/form.module.css";

export default function TextArea({ className, label, id, error, ...props }) {
  return (
    <div className={className}>
      {label && <label htmlFor={id}>label</label>}
      <textarea className={textarea} id={id} {...props} />
      <div className="control-error">{error && <p>{error}</p>}</div>
    </div>
  );
}
