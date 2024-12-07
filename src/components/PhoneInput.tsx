import React, { useState, useRef, useEffect } from 'react';

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
  const [displayValue, setDisplayValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const [selection, setSelection] = useState({ start: 0, end: 0 });

  // Format phone number for display
  const formatPhoneNumber = (input: string): string => {
    const numbers = input.replace(/\D/g, '');
    const chars = numbers.split('');
    
    if (chars.length === 0) return '';
    if (chars[0] === '8') chars[0] = '7';
    if (chars[0] !== '7') chars.unshift('7');

    let result = '+7';
    if (chars.length > 1) result += ` (${chars.slice(1, 4).join('')}`;
    if (chars.length > 4) result += `) ${chars.slice(4, 7).join('')}`;
    if (chars.length > 7) result += `-${chars.slice(7, 9).join('')}`;
    if (chars.length > 9) result += `-${chars.slice(9, 11).join('')}`;

    return result;
  };

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const numbers = input.replace(/\D/g, '');
    const formatted = formatPhoneNumber(numbers);
    
    setDisplayValue(formatted);
    onChange(numbers.slice(0, 11));
    
    // Save cursor position
    if (inputRef.current) {
      setSelection({
        start: e.target.selectionStart || 0,
        end: e.target.selectionEnd || 0
      });
    }
  };

  // Handle initial value and updates
  useEffect(() => {
    const formatted = formatPhoneNumber(value);
    setDisplayValue(formatted);
  }, [value]);

  // Restore cursor position after format
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.setSelectionRange(selection.start, selection.end);
    }
  }, [displayValue, selection]);

  return (
    <input
      ref={inputRef}
      type="tel"
      value={displayValue}
      onChange={handleChange}
      placeholder={placeholder}
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