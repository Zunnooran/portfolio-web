import resume from "../assets/pdf/resume.pdf";

type HeaderData = {
  name: string;
  title: string;
  description: string;
  image: string;
  resumePdf: string;
};

export const headerData: HeaderData = {
  name: "Zunnooran Mustafa Alvi",
  title: "Web Developer",
  description:
    "Life may be a meandering path but don't worry about it, rather enjoy it. It is about the journey, not the destination so explore all that comes your way, learn and grow from it, for this journey only happens once.",
  image: "https://avatars.githubusercontent.com/u/85482640?v=4",
  resumePdf: resume,
};
