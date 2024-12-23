import React, { useState, useRef, useEffect } from 'react';

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  required?: boolean;
}

export function PhoneInput({
  value,
  onChange,
  className = '',
  required = false
}: PhoneInputProps) {
  const [displayValue, setDisplayValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Format phone number for display
  const formatPhoneNumber = (input: string): string => {
    const numbers = input.replace(/\D/g, '');
    
    // Only force 7 as first digit if there are any digits
    let formatted = numbers;
    if (formatted.length > 0) {
      formatted = '7' + formatted.substring(1);
    }

    // Build formatted string
    let result = '';
    if (formatted.length > 0) {
      result += '+' + formatted[0];
      if (formatted.length > 1) {
        result += ' (' + formatted.substring(1, 4);
      }
      if (formatted.length > 4) {
        result += ') ' + formatted.substring(4, 7);
      }
      if (formatted.length > 7) {
        result += '-' + formatted.substring(7, 9);
      }
      if (formatted.length > 9) {
        result += '-' + formatted.substring(9, 11);
      }
    }

    return result;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const numbersOnly = input.replace(/\D/g, '').substring(0, 11);
    const formatted = formatPhoneNumber(numbersOnly);
    
    setDisplayValue(formatted);
    onChange(numbersOnly);
  };

  useEffect(() => {
    const formatted = formatPhoneNumber(value);
    setDisplayValue(formatted);
  }, [value]);

  return (
    <input
      ref={inputRef}
      type="tel"
      value={displayValue}
      onChange={handleChange}
      placeholder="+7 (___) ___-__-__"
      required={required}
      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${className}`}
      onKeyDown={(e) => {
        // Allow: backspace, delete, tab, escape, enter
        if ([8, 46, 9, 27, 13].includes(e.keyCode)) return;
        
        // Allow: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
        if (['a', 'c', 'v', 'x'].includes(e.key.toLowerCase()) && (e.ctrlKey || e.metaKey)) return;
        
        // Allow: home, end, left, right
        if ([35, 36, 37, 39].includes(e.keyCode)) return;

        // Block non-numeric characters
        if (!/[0-9]/.test(e.key)) {
          e.preventDefault();
        }
      }}
    />
  );
}