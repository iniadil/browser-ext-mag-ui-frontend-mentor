import { cx } from "@/app/utils/cx";
import Image from "next/image";
import Button from "./Button";
import Switch from "./Switch";

type CardProps = {
  className?: string;
  imageSrc?: string;
  title?: string;
  description?: string;
  onRemove?: () => void;
  onToggle?: (checked: boolean) => void;
  checked?: boolean;
  disabled?: boolean;
};

const Card: React.FC<CardProps> = (props) => {
  const {
    className = "",
    imageSrc,
    title,
    description,
    onRemove,
    onToggle,
    checked = false,
    disabled = false,
  } = props;

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-md dark:border-neutral-700 dark:bg-neutral-800">
      <div className="flex items-start gap-x-4">
        <Image
          src={imageSrc || "/assets/images/logo.svg"}
          alt={title || "Extension Logo"}
          width={32}
          height={32}
          className="h-18 w-18"
        />
        <div>
          <h3 className="font-bold">{title || "Extension Name"}</h3>
          <p>
            {description ||
              "Extension description goes here. It can be a brief summary of what the extension does and its key features."}
          </p>
        </div>
      </div>
      <div className="mt-5 flex justify-between">
        <Button size="sm" onClick={onRemove}>
          Remove
        </Button>
        <Switch
          checked={checked}
          onCheckedChange={onToggle}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default Card;
