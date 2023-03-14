import Navbar from "./partials/Navbar";
export default function Layouts({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
