import { BiUpArrowAlt } from "react-icons/bi";

function BacktoTopBtn({ anchorId }: { anchorId: string }) {
  return (
    <a href={anchorId} className="back-to-top">

        <BiUpArrowAlt />
    
    </a>
  );
}

export default BacktoTopBtn;
