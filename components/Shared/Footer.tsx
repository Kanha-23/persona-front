import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <h4 className="text-2xl" width={128} height={38}>
            Personafy.
          </h4>
        </Link>
        <p>2024 Personafy. All Rights reserved.</p>
      </div>
      <p className="text-center p-6">Developed by <link href="https://github.com/sanaa9012"/>Sana & <link href="https://github.com/Kanha-23"/>Kanha.</p>
    </footer>
  );
};

export default Footer;
