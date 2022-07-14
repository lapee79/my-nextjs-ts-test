import {ChangeEventHandler, useState} from 'react';

const useInput = (initialValue: string): [{ value: string, onChange: ChangeEventHandler<HTMLInputElement> }, () => void] => {
  const [value, setValue] = useState(initialValue);

  return [
    { value, onChange: event => setValue((event.target as HTMLInputElement).value) },
    () => setValue(initialValue)
  ]
};

export { useInput };
