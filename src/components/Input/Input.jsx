// src/components/ui/input/Input.jsx
import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <input
      ref={ref}
      className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      {...props} // Passa as props para o input, como placeholder, etc
    />
  );
});

// Este código permite que o `Input` seja usado com `ref` (útil para formulários)
Input.displayName = "Input"; // Para boas práticas de nomeação em componentes React

export { Input };
