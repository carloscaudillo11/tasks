import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <section className="flex items-center justify-center bg-red-500">
      <header className="p-10 bg-zinc-800">
        <h1 className="py-2 text-5xl font-bold">React Tasks</h1>
        <p className="text-md text-slate-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
          fugit doloremque molestias recusandae labore repellat amet dicta
          tempore necessitatibus facilis repellendus voluptas ducimus maiores
          deserunt sed quo ratione provident debitis aut, voluptatem aliquam
          iste blanditiis ex? Voluptatibus, fuga quasi necessitatibus cumque
          optio error enim, officia accusantium vitae doloremque, molestias
          modi.
        </p>

        <Link
          className="inline-block px-4 py-2 mt-4 text-white rounded-md bg-zinc-500"
          to="/register"
        >
          Get Started
        </Link>
      </header>
    </section>
  );
};

export default HomePage;
