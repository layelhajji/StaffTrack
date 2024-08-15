
import { Link, useNavigate } from 'react-router-dom';



function Navbar() {
  const token = localStorage.getItem("token");
  const navigate=useNavigate()
  const handlelogOUt=()=>{
    localStorage.removeItem("token")
    navigate("/")}

  return (
    <>
    {token ? (
      <>
      <nav style={styles.navbar}>
      <div style={styles.logo}>Employee Management</div>
      <ul style={styles.navLinks}>
       
         
         <li style={styles.navItem}><Link to="/dashboard" style={styles.navLink}>Dashboard</Link></li>
         <li style={styles.navItem}><Link to="/addEmp" style={styles.navLink}>Add Employee</Link></li>
         <li style={styles.navItem}><Link to="/" style={styles.navLink} onClick={handlelogOUt}>Log Out</Link></li>
       
       
       
       
      </ul>
    </nav>
    </>
    ):(<>
     
    </>)}
    </>
    
    
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#657fad',
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
