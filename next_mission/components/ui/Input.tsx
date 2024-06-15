import { ChangeEvent, FocusEvent, KeyboardEvent } from 'react';

interface InputProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder: string;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  isTextArea?: boolean;
  errorMessage?: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  value,
  onChange,
  onBlur,
  placeholder,
  onKeyDown,
  isTextArea,
  errorMessage,
  type = 'text',
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <label htmlFor={id}>{label}</label>}

      {isTextArea ? (
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
        />
      ) : (
        <input
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          type={type}
        />
      )}

      {errorMessage && <span>{errorMessage}</span>}
    </div>
  );
};

export default Input;
