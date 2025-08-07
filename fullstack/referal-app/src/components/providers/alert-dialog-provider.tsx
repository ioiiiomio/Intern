import React, { createContext, useContext, useState, ReactNode } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { X } from "lucide-react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

type AlertDialogOptions = {
  title: string;
  description?: string;
  firstSum?: number;
  secondSum?: number;
  comments?: string;
  cancelText?: string;
  actionText?: string;
  onConfirm?: (data?: {
    firstSum: number;
    secondSum: number;
    comments: string;
  }) => void;
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

  const [firstSum, setFirstSum] = useState<number | undefined>();
  const [secondSum, setSecondSum] = useState<number | undefined>();
  const [comments, setComments] = useState<string>("");

  const showAlert = (opts: AlertDialogOptions) => {
    setOptions(opts);
    setFirstSum(opts.firstSum ?? 0);
    setSecondSum(opts.secondSum ?? 0);
    setComments(opts.comments ?? "");
    setIsOpen(true);
  };

  const handleConfirm = () => {
    options?.onConfirm?.({
      firstSum: firstSum || 0,
      secondSum: secondSum || 0,
      comments,
    });
    setIsOpen(false);
  };

  return (
    <AlertDialogContext.Provider value={{ showAlert }}>
      {children}
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent className="bg-white w-[580px] p-6 justify-self-center">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-xl font-semibold mb-4">
              {options?.title}
            </AlertDialogTitle>
            {options?.description && (
              <AlertDialogDescription className="text-base text-text_color_secondary mb-4">
                {options.description}
              </AlertDialogDescription>
            )}
          </AlertDialogHeader>

          {/* Editable Fields (shown only if editing) */}
          {options?.actionText === "Сохранить" && (
            <div className="space-y-4 mb-4">
              <div>
                <label className="text-sm text-text_color_secondary">
                  Сумма 1
                </label>
                <Input
                  type="number"
                  value={firstSum}
                  onChange={(e) => setFirstSum(Number(e.target.value))}
                />
              </div>
              <div>
                <label className="text-sm text-text_color_secondary">
                  Сумма 2
                </label>
                <Input
                  type="number"
                  value={secondSum}
                  onChange={(e) => setSecondSum(Number(e.target.value))}
                />
              </div>
              <div>
                <label className="text-sm text-text_color_secondary">
                  Комментарий
                </label>
                <Textarea
                  placeholder="Комментарий (необязательно)"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                />
              </div>
            </div>
          )}

          <AlertDialogFooter>
            <AlertDialogCancel className="bg-background_prime mr-2 w-35">
              {options?.cancelText ?? "Отмена"}
            </AlertDialogCancel>
            <AlertDialogAction
              className={`text-white w-35 ${
                options?.actionText === "Сохранить"
                  ? "bg-blue-500"
                  : "bg-bank_red"
              }`}
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
