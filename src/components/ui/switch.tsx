"use client";

import * as Switch from "@radix-ui/react-switch";

export function RdxSwitch({
                              checked,
                              onChange,
                              label,
                          }: {
    checked: boolean;
    onChange: (v: boolean) => void;
    label?: string;
}) {
    return (
        <label className="flex items-center gap-2 cursor-pointer">
            {label && <span className="text-xs text-slate-400">{label}</span>}

            <Switch.Root
                checked={checked}
                onCheckedChange={onChange}
                className="
          w-10 h-5
          bg-slate-700/60 rounded-full
          relative
          data-[state=checked]:bg-blue-500/80
          transition-colors
        "
            >
                <Switch.Thumb
                    className="
            block w-4 h-4 bg-white rounded-full shadow
            transition-transform translate-x-1
            data-[state=checked]:translate-x-5
          "
                />
            </Switch.Root>
        </label>
    );
}
