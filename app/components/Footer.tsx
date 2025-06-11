export default function Footer() {
  return (
    <footer className="mt-5 py-4 text-center">
      <p className="text-sm text-inherit">
        &copy; {new Date().getFullYear()} Browser Extension Magazine. All rights
        reserved.
      </p>
      <p className="mt-2 text-xs text-inherit">
        Made with ❤️ by{" "}
        <a
          className="text-inherit"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.frontendmentor.io/profile/iniadil"
        >
          Muhammad Adil
        </a>
      </p>
    </footer>
  );
}
