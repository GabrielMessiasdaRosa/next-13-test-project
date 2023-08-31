export interface FooterProps {}

export default function Footer({}: FooterProps) {
  return (
    <footer className=" bg-rose-500 px-16 flex flex-col lg:flex-row justify-between  items-center text-white">
      <span className="flex flex-1 text-2xl lg:text-4xl font-light">
        Gabriel Messias da Rosa
      </span>
      <div className="flex flex-1 h-full w-full">
        <ul className="border-l-4 border-gray-50">
          <li className="text-lg font-bold px-4 py-2">Social</li>
          <li className="cursor-pointer transition-all duration-500 hover:bg-gray-50 hover:text-gray-800 px-4 py-2">
            <a href="https://github.com/GabrielMessiasdaRosa">- GitHub</a>
          </li>
          <li className="cursor-pointer transition-all duration-500 hover:bg-gray-50 hover:text-gray-800 px-4 py-2">
            <a href="https://www.linkedin.com/in/gabriel-messias-rosa/">
              - LinkedIn
            </a>
          </li>
          <li className="cursor-pointer transition-all duration-500 hover:bg-gray-50 hover:text-gray-800 px-4 py-2">
            <a href="mailto:gabrielmessiasdarosa@gmail.com">
              - Email: gabrielmessiasdarosa@gmail.com
            </a>
          </li>{" "}
          <li className="cursor-pointer transition-all duration-500 hover:bg-gray-50 hover:text-gray-800 px-4 py-2">
            <a href="/files/cv-gabrielmessiasdarosa.pdf">- Download CV</a>
          </li>
        </ul>
      </div>

      <div className="flex flex-1 h-full w-full">
        <ul className="border-l-4 border-gray-50">
          <li className="text-lg font-bold px-4 py-2">
            Technologies and Tools used
          </li>
          <li className="cursor-pointer transition-all duration-500 hover:bg-gray-50 hover:text-gray-800 px-4 py-2">
            <a href="https://nextjs.org/docs">- Next.js Docs</a>
          </li>
          <li className="cursor-pointer transition-all duration-500 hover:bg-gray-50 hover:text-gray-800 px-4 py-2">
            <a href="https://tailwindcss.com/docs">- Tawilwind CSS Docs</a>
          </li>
          <li className="cursor-pointer transition-all duration-500 hover:bg-gray-50 hover:text-gray-800 px-4 py-2">
            <a href="https://neon.tech/docs/introduction">- Neon DB Docs</a>
          </li>
          <li className="cursor-pointer transition-all duration-500 hover:bg-gray-50 hover:text-gray-800 px-4 py-2">
            <a href="https://www.prisma.io/docs">- Prisma Docs</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
