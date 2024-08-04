import { BiUpArrowAlt } from "react-icons/bi";

function BacktoTopBtn({ anchorId }: { anchorId: string }) {
  // TODO: Adjust mobile styles
  return (
    <a href={anchorId} className="back-to-top">

        <BiUpArrowAlt />
    
    </a>
  );
}

export default BacktoTopBtn;
