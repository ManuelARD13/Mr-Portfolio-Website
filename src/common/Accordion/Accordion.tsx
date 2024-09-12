/* Icons */
import { TfiArrowCircleDown } from "react-icons/tfi";

function Accordion({
  items,
  className
}: {
  items: { title: string; img: string; content: JSX.Element }[]
  className?: string;
}) {
  const handleToggle = () => {
    const itemsContents = document.querySelectorAll(".accordion__content");
    const itemsInputs = document.querySelectorAll(".accordion__input") as NodeListOf<HTMLInputElement>;

    itemsInputs.forEach((input) => {
      if (input.checked) {
        itemsContents.forEach((item) => {
          if (item.id === `${input.id}__content`) {
            item.classList.add("active-item");
          } else {
            item.classList.remove("active-item");
          }
        });
      }
    })
  };

  return (
    <div className={`accordion ${className}`}>
      {items.map((item, index) => (
        <div className="accordion__item" key={`${item.title}${index}`}>
          <div className="accordion__label">
            <h2>{item.title}</h2>
            <div className="accordion__label-icon" >
              <input type="radio" name="arrow" id={`label-${index}`} className="accordion__input" onChange={handleToggle} />
              <label htmlFor={`label-${index}`}><TfiArrowCircleDown /></label>
            </div>
          </div>
          <div className="accordion__content" id={`label-${index}__content`}>
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
