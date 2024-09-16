//import Image from "next/image";
//import HeaderInfo from "./components/header-info";
import DateDay from "./components/date-day";
import InputForm from "./components/input-form";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      {/* <HeaderInfo /> */}
      {/* <DateDay datum={``}/> */}
      <InputForm />
    </main>
  );
}
