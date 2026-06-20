import { Item } from "./internal/Item";
import { useCounter } from "./internal/useCounter";
import { formatCounterTime } from "./internal/util";

export interface CounterProps {
  endsAt: number;
  unitNumber?: number;
}

export function Counter({ endsAt, unitNumber = 3 }: CounterProps) {
  const { time } = useCounter(endsAt);

  const units = formatCounterTime({ time, unitNumber });

  return (
    <div className="flex items-center gap-2 justify-center">
      {units.map((unit, i) => (
        <Item number={unit} key={i} />
      ))}
    </div>
  );
}
