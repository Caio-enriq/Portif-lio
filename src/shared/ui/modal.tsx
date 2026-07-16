import { cn } from "@/lib/utils";

interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  className?: string;
}

export function Modal({ children, open, onClose, className }: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div
        className={cn(
          "border-border bg-popover relative z-10 mx-4 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border p-6 shadow-2xl",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}

export function ModalHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("mb-4 flex items-center justify-between", className)}>{children}</div>;
}

export function ModalBody({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("space-y-4", className)}>{children}</div>;
}

export function ModalFooter({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "border-border mt-6 flex items-center justify-end gap-3 border-t pt-4",
        className
      )}
    >
      {children}
    </div>
  );
}
