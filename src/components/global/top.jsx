import { IoMdArrowDropupCircle } from 'react-icons/io';
export default function NavigateToTop({ id }) {
  return (
    <a
      className="bg-pink-600 fixed z-50 top-[90%] left-[95%] text-white flex flex-col justify-center items-center p-2 "
      href={`#${id}`}>
      <IoMdArrowDropupCircle size={30} />
    </a>
  );
}
