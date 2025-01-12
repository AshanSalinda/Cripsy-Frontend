import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & {
    onValueChange?: (values: [number, number]) => void;
    value: [number, number];
  }
>(({ className, value, onValueChange, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    value={value}
    onValueChange={onValueChange}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-gray-300">
      <SliderPrimitive.Range className="absolute h-full bg-carnation-500 rounded-full" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className="block h-5 w-5 bg-white border border-gray-400 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-carnation-500 focus:ring-offset-2 transition-transform transform active:scale-110"
      aria-label="Slider Thumb 1"
    />
    <SliderPrimitive.Thumb
      className="block h-5 w-5 bg-white border border-gray-400 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-carnation-500 focus:ring-offset-2 transition-transform transform active:scale-110"
      aria-label="Slider Thumb 2"
    />
  </SliderPrimitive.Root>
));

Slider.displayName = "Slider";

export { Slider };
