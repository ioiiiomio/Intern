import React, { createContext, useContext, useState, ReactNode } from "react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import { X } from "lucide-react";

type AlertDialogOptions = {
  title: string;
  description?: string;
  cancelText?: string;
  actionText?: string;
  onConfirm?: () => void;
};

type AlertDialogContextType = {
  showAlert: (options: AlertDialogOptions) => void;
};

const AlertDialogContext = createContext<AlertDialogContextType | null>(null);

export const useAlertDialog = () => {
  const context = useContext(AlertDialogContext);
  if (!context)
    throw new Error("useAlertDialog must be used within AlertDialogProvider");
  return context;
};

export const AlertDialogProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<AlertDialogOptions | null>(null);

  const showAlert = (opts: AlertDialogOptions) => {
    setOptions(opts);
    setIsOpen(true);
  };

  const handleConfirm = () => {
    options?.onConfirm?.();
    setIsOpen(false);
  };

  return (
    <AlertDialogContext.Provider value={{ showAlert }}>
      {children}
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent className="bg-white w-[580px] h-48 p-6">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-xl font-semibold mb-4 flex justify-between">
              {options?.title}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X className="text-text_color w-8 h-8" />
              </button>
            </AlertDialogTitle>
            {options?.description && (
              <AlertDialogDescription className="text-base text-text_color_secondary">
                {options.description}
              </AlertDialogDescription>
            )}
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-background_prime mr-2 w-35">
              {options?.cancelText ?? "Отмена"}
            </AlertDialogCancel>
            <AlertDialogAction
              className="bg-bank_red text-white w-35"
              onClick={handleConfirm}
            >
              {options?.actionText ?? "Продолжить"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </AlertDialogContext.Provider>
  );
};
