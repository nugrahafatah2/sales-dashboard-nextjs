export const Input = ({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) => (
    <input 
      className="border p-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none text-black" 
      {...props} 
    />
  );