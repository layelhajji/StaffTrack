
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const token = localStorage.getItem("token");
  const navigate=useNavigate()
  const handlelogOUt=()=>{
    localStorage.removeItem("token")
    navigate("/login")}

  return (
    <>
    {token ? (
      <>
      <nav style={styles.navbar}>
      <div style={styles.logo}>MonSite</div>
      <ul style={styles.navLinks}>
       
         <li style={styles.navItem}><Link to="/" style={styles.navLink}>Home</Link></li>
         <li style={styles.navItem}><Link to="/about" style={styles.navLink}>About</Link></li>
         <li style={styles.navItem}><Link to="/services" style={styles.navLink}>Services</Link></li>
         <li style={styles.navItem}><Link to="/login" style={styles.navLink} onClick={handlelogOUt}>Log Out</Link></li>
       
       
       
       
      </ul>
    </nav>
    </>
    ):(<>
    
      <nav style={styles.navbar}>
      <div style={styles.logo}>MonSite</div>
      <ul style={styles.navLinks}>
       
         <li style={styles.navItem}><Link to="/register" style={styles.navLink}>Register</Link></li>
        
         <li style={styles.navItem}><Link to="/login" style={styles.navLink} >Log In</Link></li>
       
       
       
       
      </ul>
    </nav>
    </>)}
    </>
    
    
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: '10px 80px',
  },
  logo: {
    color: '#FFF',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    margin: 0,
    padding:0,
  },
  navItem: {
    marginLeft: '40px',
  },
  navLink: {
    color: '#FFF',
    textDecoration: 'none',
    fontSize: '18px',
  }
};

export default Navbar;
