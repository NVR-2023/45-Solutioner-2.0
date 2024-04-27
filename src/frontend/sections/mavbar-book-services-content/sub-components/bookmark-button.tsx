import { BasicComponentProps } from "@/types/component-props-types";
import BookmarkIcon from "@/frontend/components/icons/animated/booknark-icon";

const BookmarkButton = ({ scale , color}: BasicComponentProps) => {
  return (
    <div>
      <BookmarkIcon scale={scale} color={color}/>
    </div>
  );
};

export default BookmarkButton;
