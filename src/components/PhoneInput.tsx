import React from 'react';
import InputMask from 'react-input-mask';

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
  required?: boolean;
}

export function PhoneInput({ 
  value, 
  onChange, 
  className = '', 
  placeholder = '+7 (___) ___-__-__', 
  required = false 
}: PhoneInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numbers = value.replace(/[^\d]/g, '');
    onChange(numbers);
  };

  // Format the raw value for display
  const formatValue = (rawValue: string) => {
    if (!rawValue) return '';
    if (rawValue.startsWith('7')) return rawValue;
    if (rawValue.startsWith('8')) return '7' + rawValue.slice(1);
    return '7' + rawValue;
  };

  return (
    <InputMask
      mask="+7 (999) 999-99-99"
      value={formatValue(value)}
      onChange={handleChange}
      placeholder={placeholder}
      required={required}
    >
      <input
        type="tel"
        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${className}`}
      />
    </InputMask>
  );
}