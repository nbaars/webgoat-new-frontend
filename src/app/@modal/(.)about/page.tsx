"use client";
import "@/content/contributors";
import { contributors } from "@/content/contributors";
import {
  MouseEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/navigation";
const AboutModal: React.FC = () => {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState(true);

  const handleOpen = (state: boolean) => {
    onDismiss();
    setModalOpen(false);
  };
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-y-hidden");
    }
    if (!isModalOpen) {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [isModalOpen]);

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) {
          setModalOpen(false);
          onDismiss();
        }
      }
    },
    [onDismiss, overlay, wrapper],
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss],
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return (
    <div
      ref={overlay}
      className="absolute z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60 overflow-y-scroll"
      onClick={onClick}
    >
      <div
        ref={wrapper}
        className="absolute top-2/5 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-10/12 md:w-10/12 lg:w-4/5"
      >
        <div className={"absolute text-black p-6"}>
          <div className={"bg-white shadow-2xl rounded-md pt-4"}>
            <div
              className={
                "flex justify-between w-full text-2xl font-light mb-4 pl-6 pr-6 pt-2"
              }
            >
              <div>About WebGoat - Provided by the OWASP Foundation</div>
              <button
                onClick={() => {
                  handleOpen(false);
                }}
                className={
                  "text-md rounded-md font-extrabold text-gray-400 opacity-70"
                }
              >
                x
              </button>
            </div>

            <div className={"font-light text-sm pl-6 pr-6"}>
              <p className={"mt-2 mb-2"}>Thanks for hacking The Goat!</p>

              <p className={"mt-2 mb-2"}>
                WebGoat is a demonstration of common web application flaws. The
                associated exercises are intended to provide hands-on experience
                with techniques aimed at demonstrating and testing application
                penetration.{" "}
              </p>

              <p className={"mt-2 mb-2"}>
                From the entire WebGoat team, we appreciate your interest and
                efforts in making applications not just better, but safer and
                more secure for everyone. We, as well as our sacrificial goat,
                thank you.
              </p>

              <p className={"mt-2 mb-2"}>Version: </p>

              <span className={"mt-2 mb-2"}>
                Contact us:
                <ul>
                  <li>WebGoat mailing list: owasp-webgoat@lists.owasp.org</li>
                  <li>Bruce Mayhew: webgoat@owasp.org</li>
                </ul>
              </span>

              <div className={"flex p-2 pl-6 pr-6"}>
                <div className={"flex w-1/2 mr-2 flex-col"}>
                  <div className={"w-full"}>
                    WebGoat Authors
                    <ul className={"list-disc pl-10 pt-2 pb-4"}>
                      {contributors.authors.map((person, index) => {
                        return <li key={index}>{person}</li>;
                      })}
                    </ul>
                  </div>

                  <div className={"w-full"}>
                    WebGoat Design Team (Active)
                    <ul className={"list-disc pl-10 pt-2 pb-4"}>
                      {contributors.designTeam.map((person, index) => {
                        return <li key={index}>{person}</li>;
                      })}
                    </ul>
                  </div>

                  <div className={"w-full"}>
                    Corporate Sponsorship - Companies that have donated
                    significant time to WebGoat development
                    <ul className={"list-disc pl-10 pt-2 pb-4"}>
                      {contributors.sponsors.map((person, index) => {
                        return <li key={index}>{person}</li>;
                      })}
                    </ul>
                  </div>

                  <div>
                    Did we miss you? Our sincere apologies, as we know there
                    have been many contributors over the years. If your name
                    does not appear in any of the lists above, please send us a
                    note. We&apos;ll get you added with no further sacrifices
                    required.
                  </div>
                </div>

                <div className={"flex items-center w-1/2 flex-col"}>
                  <div className={"w-full"}>
                    Active Contributors
                    <ul className={"list-disc pl-10 pt-2 pb-4"}>
                      {contributors.activeContributors.map((person, index) => {
                        return <li key={index}>{person}</li>;
                      })}
                    </ul>
                  </div>

                  <div className={"w-full"}>
                    Past Contributors
                    <ul className={"list-disc pl-10 pt-2 pb-4"}>
                      {contributors.pastContributors.map((person, index) => {
                        return <li key={index}>{person}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className={"w-[100%] h-[1px] bg-gray-500/60 mb-4"}></div>

            <div className={"flex justify-end w-full pl-6 pr-6 pb-4"}>
              <button
                className={
                  "bg-gray-100 shadow-inner rounded-md border-[1px] border-solid border-gray-400 text-black text-sm font-light p-3 pt-2 pb-2"
                }
                onClick={() => handleOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutModal;
