"use client";

import { useState } from "react";
import { GENERATOR_QTY_PRESETS } from "@/lib/generator/constants";
import type { GeneratorOutputMode } from "@/lib/generator/modes";
import { cn } from "@/lib/utils";

const segmentBtn =
  "inline-flex h-9 items-center justify-center px-2.5 text-[13px] transition-colors";

export function QuantityAndModeRow({
  quantity,
  onQuantityChange,
  mode,
  onModeChange,
  recordsLabel,
  customLabel,
  modeLabel,
  modePayload,
  modeApi,
  modeHint,
}: {
  quantity: number;
  onQuantityChange: (n: number) => void;
  mode: GeneratorOutputMode;
  onModeChange: (mode: GeneratorOutputMode) => void;
  recordsLabel: string;
  customLabel: string;
  modeLabel: string;
  modePayload: string;
  modeApi: string;
  modeHint: string;
}) {
  const isPreset = (GENERATOR_QTY_PRESETS as readonly number[]).includes(
    quantity,
  );
  const [customOpen, setCustomOpen] = useState(!isPreset);

  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:items-start sm:gap-5">
      <div className="space-y-2">
        <p
          className={cn(
            "text-[13px] font-medium text-foreground",
          )}
        >
          {recordsLabel}
        </p>
        <div
          className="inline-flex h-9 max-w-full items-stretch overflow-hidden rounded-lg border border-border divide-x divide-border"
          role="group"
          aria-label={recordsLabel}
          dir="ltr"
        >
          {GENERATOR_QTY_PRESETS.map((n) => {
            const selected = !customOpen && quantity === n;
            return (
              <button
                key={n}
                type="button"
                onClick={() => {
                  setCustomOpen(false);
                  onQuantityChange(n);
                }}
                aria-pressed={selected}
                className={cn(
                  segmentBtn,
                  selected
                    ? "bg-[var(--request)]/15 font-medium text-foreground"
                    : "text-muted-foreground hover:bg-muted/40 hover:text-foreground",
                )}
              >
                {n.toLocaleString("en-US", {
                  useGrouping: false,
                })}
              </button>
            );
          })}
          <button
            type="button"
            onClick={() => setCustomOpen(true)}
            aria-pressed={customOpen}
            className={cn(
              segmentBtn,
              customOpen
                ? "bg-[var(--request)]/15 font-medium text-foreground"
                : "text-muted-foreground hover:bg-muted/40 hover:text-foreground",
            )}
          >
            {customLabel}
          </button>
        </div>
        {customOpen ? (
          <input
            type="number"
            min={1}
            max={1000}
            inputMode="numeric"
            autoFocus
            value={quantity}
            onChange={(e) => {
              const raw = e.target.value;
              if (raw === "") return;
              const n = Number(raw);
              if (!Number.isFinite(n)) return;
              onQuantityChange(Math.min(1000, Math.max(1, Math.floor(n))));
            }}
            className={cn(
              "field-focus h-9 w-28 rounded-lg border border-border bg-background px-3 text-[13px] text-foreground [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
            )}
            dir="ltr"
            aria-label={customLabel}
          />
        ) : null}
      </div>

      <div className="space-y-2">
        <p
          className={cn(
            "text-[13px] font-medium text-foreground",
          )}
        >
          {modeLabel}
        </p>
        <div
          className="inline-flex h-9 items-stretch overflow-hidden rounded-lg border border-border divide-x divide-border"
          role="group"
          aria-label={modeLabel}
          dir="ltr"
        >
          {(
            [
              ["payload", modePayload],
              ["api", modeApi],
            ] as const
          ).map(([id, label]) => {
            const active = mode === id;
            return (
              <button
                key={id}
                type="button"
                title={modeHint}
                aria-pressed={active}
                onClick={() => onModeChange(id)}
                className={cn(
                  segmentBtn,
                  active
                    ? "bg-[var(--request)]/15 font-medium text-foreground"
                    : "text-muted-foreground hover:bg-muted/40 hover:text-foreground",
                )}
              >
                {label}
              </button>
            );
          })}
        </div>
        <p
          className={cn(
            "text-[11px] leading-4 text-muted-foreground",
          )}
        >
          {modeHint}
        </p>
      </div>
    </div>
  );
}
