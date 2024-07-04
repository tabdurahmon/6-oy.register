import { useRouteError, NavLink } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <div className="text-centar pt-10 h-lvh">
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className=" btn  rounded-xl font-medium  text-[#333] py-2 px-3 border-2 border-solid border-[#333] bg-white hover:bg-[#c26161] hover:text-white btn-block"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          Read more
        </button>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4"> Page not found </p>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
        <div className="w-full text-center pt-5">
          <NavLink
            className=" btn rounded-xl font-medium no-underline text-[#333] py-2 px-3 border-2 border-solid border-[#333] bg-white hover:bg-[#c26161] hover:text-white"
            to="/"
          >
            Home
          </NavLink>
        </div>
      </div>
    );
  }
}

export default ErrorPage;
