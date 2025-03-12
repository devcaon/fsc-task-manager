function Header(props) {
  return (
    <header>
      <p className="text-4xl font-bold text-red-400">{props.children}</p>
    </header>
  );
}

export default Header;
