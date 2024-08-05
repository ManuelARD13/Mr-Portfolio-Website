import { BiUpArrowAlt } from "react-icons/bi";

function BacktoTopBtn({ anchorId }: { anchorId: string }) {
  // TODO: hide when in hero section: Use final image over it??
  return (
    <a href={anchorId} className="back-to-top">

        <BiUpArrowAlt />
    
    </a>
  );
}

export default BacktoTopBtn;
