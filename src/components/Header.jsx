const Header = ({ title, date }) => {
  return (
    <header className="newspaper-header">
      <h1 className="newspaper-title">{title}</h1>
      <div className="newspaper-meta">{date}</div>
    </header>
  );
};

export default Header;
