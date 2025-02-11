import Button from "../../Components/Buttons";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div className="ml-20 ">
        <h2 className="text-xl font-bold  mb-[10px] mt-[10px]">Recommended</h2>
        <div className="flex gap-[15px] font-light">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
          <Button onClickHandler={handleClick} value="Puma" title="Puma" />
          <Button onClickHandler={handleClick} value="Vans" title="Vans" />
        </div>
      </div>
    </>
  );
};

export default Recommended;