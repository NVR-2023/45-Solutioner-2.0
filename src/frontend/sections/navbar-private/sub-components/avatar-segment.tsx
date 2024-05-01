import { getInitials } from "@/utils/functions/get-Initials";
import { getHexColorFromInitials } from "@/utils/functions/get-hex-color-from-initials";

type AvatarSegmentProps = {
  name: string;
};

export const AvatarSegment = ({ name }: AvatarSegmentProps) => {
  const avatarInitials = getInitials("Nuno Rodrigues");
  const avatarBackgroundColor = "#047857";// getHexColorFromInitials(avatarInitials, 0.4); 

  return (
    <div
      className={`flex items-center justify-center rounded-full p-1  tracking-wide`}
      style={{
        backgroundColor: avatarBackgroundColor,
      }}
    >
      <span className="flex items-center h-5 w-5 justify-center text-[.625rem] font-semibold text-white dark:text-neutral-700 small-caps">
        {avatarInitials}
      </span>
    </div>
  );
};
