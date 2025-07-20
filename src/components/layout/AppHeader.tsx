import { Button } from "../ui/button";

export default function AppHeader() {
  return (
    <div className="flex justify-between">
      <h2>Transaction</h2>
      <div className="flex gap-2">
        <Button />
        <Button />
      </div>
    </div>
  );
}
