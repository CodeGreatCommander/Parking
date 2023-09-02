import { useState } from 'react'; // Make sure to import useState

interface InputProps {
    type: string;
    placeholder: string;
    label: string;
    wide?: boolean;
    required?: boolean;
    refs: any;
}

export default function Input({ type, placeholder, label, wide = false, required = false ,refs}: InputProps) {
    const InputElement = wide ? 'textarea' : 'input';
    const [isFilled, setIsFilled] = useState(false);

    const handleBlur = (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (required) {
            const value = event.target.value.trim();
            setIsFilled(value !== '');
        }
    };

    const borderClassName = required && !isFilled ? 'border-red-400 border-4' : 'border-gray-300';

    return (
        <div className="my-4 flex-grow mx-2">
            <label className="mx-1 my-8 font-bold text-xl">{label}:</label>
            <InputElement
                type={type}
                placeholder={placeholder}
                className={` bg-slate-50 border rounded px-3 py-2 my-1 w-full focus:outline-none focus:ring focus:border-blue-300 ${borderClassName}`}
                onBlur={handleBlur}
                required={required && !wide}
                ref={refs}
            />
            {required && !isFilled && <p className="text-red-400">This field is required</p>}
        </div>
    );
}
