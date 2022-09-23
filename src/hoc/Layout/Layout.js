import classes from  './Layout.module.css';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';

export default function Layout(props) {
    return (
    <>
        <NavBar />
        <main className={classes.Content}>
            {props.children}
        </main>
        <Footer/>
    </>);
}