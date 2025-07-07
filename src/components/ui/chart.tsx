import { TooltipProps } from "recharts";

type CustomTooltipProps = {
  indicator?: "line" | "dot" | "dashed";
  hideLabel?: boolean;
  hideIndicator?: boolean;
  nameKey?: string;
  labelKey?: string;
  formatter?: (value: any, name: string, props: any) => React.ReactNode;
  labelFormatter?: (label: string) => React.ReactNode;
  className?: string;
  labelClassName?: string;
  color?: string;
};

// ✅ Extend TooltipProps but explicitly include payload and label
type FullTooltipProps = TooltipProps<number, string> &
  CustomTooltipProps & {
    payload?: {
      name: string;
      value: number;
      color?: string;
      payload: Record<string, any>;
    }[];
    label?: string | number;
  };

export function ChartTooltipContent({
  active,
  payload = [],
  className,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey = "name",
}: FullTooltipProps) {
  if (!active || payload.length === 0) return null;

  return (
    <div className="rounded-lg border bg-background p-2 shadow-sm">
      {!hideLabel && (
        <p className={`mb-2 text-sm font-medium ${labelClassName}`}>
          {labelFormatter ? labelFormatter(label as string) : label}
        </p>
      )}
      {payload.map((item, index) => {
        const itemColor = color || item.color || item.payload?.color;
        return (
          <div
            key={index}
            className="flex items-center justify-between space-x-2"
          >
            <div className="flex items-center space-x-2">
              {!hideIndicator && (
                <span
                  className={`inline-block ${
                    indicator === "line"
                      ? "h-0.5 w-4 rounded-none"
                      : indicator === "dashed"
                      ? "h-0.5 w-4 border border-dashed"
                      : "h-2 w-2 rounded-full"
                  }`}
                  style={{
                    backgroundColor: itemColor,
                    borderColor: itemColor,
                  }}
                />
              )}
              <span className="text-sm text-muted-foreground">
                {item.payload?.[nameKey] ?? item.name}
              </span>
            </div>
            <div className="text-sm font-medium text-foreground">
              {formatter
                ? formatter(item.value, item.name, item)
                : item.value}
            </div>
          </div>
        );
      })}
    </div>
  );
}
