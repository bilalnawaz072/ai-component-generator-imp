import Link from "next/link";

export default function Footer() {
  return (
      <footer className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3">
          <div>
              By{" "}
              <a
                  href="https://www.linkedin.com/in/yuval-suede/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold hover:underline transition underline-offset-2"
              >
                  Yuval Suede. {" "} Looking for consultancy?  {" "}
              </a>
          </div>
          <div className="sm:text-right">
              <a
                  href="mailto:yuvalsuede@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold hover:underline transition underline-offset-2"
              >
                  <span className="font-normal">Suggest improvements</span>{" "} yuvalsuede@gmail.com{" "}
              </a>
          </div>
      </footer>

  );
}