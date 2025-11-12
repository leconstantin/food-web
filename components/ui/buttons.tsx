import { cn } from "@/lib/utils"; // optional if you use clsx or cn helper

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "outline";
}

export default function Button({
  children,
  variant,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "cursor-pointer rounded-lg bg-[#FF9A0E] px-4 py-1 font-medium text-sm text-white shadow-[0_20px_40px_rgba(255,174,0,0.29),0_5px_10px_rgba(255,174,0,0.26)] transition-all duration-200 hover:opacity-90 active:scale-95",
        variant === "outline" &&
          "border border-[#FF9A0E] bg-transparent text-black shadow-none",
        className
      )}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}

export function SecondaryButton({
  className,
  children,
  type,
}: {
  className?: string;
  children: React.ReactNode;
  type: "open" | "closed";
}) {
  return (
    <div
      className={cn(
        "flex w-fit items-center gap-2 rounded-lg bg-[#F17228] px-3 py-1 font-semibold text-sm text-white",
        type === "closed"
          ? "bg-[#F1722833] text-[#F17228]"
          : "bg-[#79B93C33] text-[#79B93C]",
        className
      )}
    >
      {children}
    </div>
  );
}

export function GhostButton({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "flex w-full cursor-pointer items-center gap-1 px-4 py-2 text-left font-semibold text-black transition-colors hover:bg-orange-50",
        className
      )}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}
