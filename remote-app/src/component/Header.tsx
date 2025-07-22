import React, { useState, ChangeEvent } from 'react';

export const Header = () => {
  const [bgImage, setBgImage] = useState<string | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validTypes = ["image/png", "image/jpeg", "image/gif"];
    if (!validTypes.includes(file.type)) {
      alert("Please upload an image file (png, jpg, gif)");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setBgImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const fallbackUrl = 'https://i.pinimg.com/originals/1c/e6/3f/1ce63f9442ec9c7391c6d5e569d08cff.gif';

  return (
    <header
      className="relative h-48 flex flex-col justify-center items-center text-white text-center p-4 bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: `url(${bgImage || fallbackUrl})`,
        textShadow: '0 0 8px rgba(0,0,0,0.7)' 
      }}
    >
      <h1 className="text-3xl font-bold">Remote Header</h1>
      <input
        type="file"
        accept=".png,.jpg,.jpeg,.gif"
        onChange={handleImageChange}
        className="mt-4 bg-white bg-opacity-70 rounded px-2 py-1 text-gray-800 cursor-pointer"
      />
    </header>
  );
};
