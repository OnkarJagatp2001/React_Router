import { Link,Outlet } from "react-router-dom";
export default function Product() {
  return (
    <>
      <div>
        <input type="search" placeholder="Search Product"></input>
      </div>
      <nav>
        <Link to="featured">Featured</Link> 
        <Link to="new">New</Link>
      </nav>
      <Outlet/>
    </>
  );
}
