const Header = (props) => {
    return (
      <div  style={{ fontSize: '20px', fontWeight: 'bold', paddingBottom : 15 }} >
        {props.children}
      </div>
    );
  }
  export default Header;