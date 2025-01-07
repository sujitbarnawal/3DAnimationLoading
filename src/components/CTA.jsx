import { Link } from "react-router-dom"


export default function CTA(){
    return (
        <>
         <section className="cta">
            <p className="cta-text">Have a project in mind <br className="hidden sm:block" />
            Lets build something together </p>
            <Link to='/contact' className="btn-green">contact</Link>
         </section>
        </>
    )
}